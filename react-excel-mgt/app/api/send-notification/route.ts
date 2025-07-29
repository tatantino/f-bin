import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { logger } from '@/lib/logger';

const AWS_SNS_TOPIC_ARN = process.env.AWS_SNS_TOPIC_ARN;
const AWS_REGION = process.env.AWS_REGION || 'ap-northeast-1';

const snsClient = new SNSClient({ region: AWS_REGION });

interface NotificationRequest {
  subject: string;
  message: string;
  type: 'plan_update' | 'job_trigger' | 'system';
}

function validateRequest(body: unknown): body is NotificationRequest {
  if (!body || typeof body !== 'object') {
    return false;
  }

  const request = body as NotificationRequest;
  return (
    typeof request.subject === 'string' &&
    typeof request.message === 'string' &&
    ['plan_update', 'job_trigger', 'system'].includes(request.type)
  );
}

export async function POST(request: NextRequest) {
  const context = {
    module: 'send-notification',
    function: 'POST',
  };

  try {
    if (!AWS_SNS_TOPIC_ARN) {
      throw new Error('AWS_SNS_TOPIC_ARN is required');
    }

    const body = await request.json();

    if (!validateRequest(body)) {
      logger.error('Invalid request format', context, { body });
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request format',
        },
        { status: 400 }
      );
    }

    const command = new PublishCommand({
      TopicArn: AWS_SNS_TOPIC_ARN,
      Message: body.message,
      Subject: body.subject,
    });

    const result = await snsClient.send(command);

    logger.debug('SNS notification sent successfully', context, {
      messageId: result.MessageId,
    });

    return NextResponse.json({
      success: true,
      messageId: result.MessageId,
    });
  } catch (error) {
    logger.error('Error sending notification', context, {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export const OPTIONS = () =>
  new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
