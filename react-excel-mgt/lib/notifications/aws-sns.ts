'use server';

import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

/**
 * Notification content structure
 */
export interface NotificationContent {
  subject: string;
  message: string;
  url?: string;
}

/**
 * Send notification via AWS SNS
 * @param content Notification content (subject, message, optional URL)
 * @param topicArnOrEnvName SNS Topic ARN or environment variable name
 * @param region Optional AWS region (defaults to AWS_REGION env var)
 * @returns Promise with SNS MessageId
 */
export async function sendSNSNotification(
  content: NotificationContent,
  topicArnOrEnvName: string,
  region?: string
): Promise<string> {
  try {
    if (!topicArnOrEnvName) {
      throw new Error('Topic ARN or environment variable name is required');
    }

    // Resolve topicArn from environment variable if it doesn't look like an ARN
    let resolvedTopicArn = topicArnOrEnvName;
    if (!topicArnOrEnvName.startsWith('arn:aws:sns:')) {
      // This is a server-side operation - accessing non-public env variables
      const envValue = process.env[topicArnOrEnvName];
      if (!envValue) {
        throw new Error(
          `Environment variable ${topicArnOrEnvName} is not defined`
        );
      }
      resolvedTopicArn = envValue;
    }

    // In development, simulate successful response
    if (process.env.NODE_ENV === 'development') {
      console.log('DEV: Simulating SNS notification', {
        content,
        topicArn: resolvedTopicArn,
        envName:
          topicArnOrEnvName !== resolvedTopicArn
            ? topicArnOrEnvName
            : undefined,
      });
      return `DEV-MOCK-${Date.now()}`;
    }

    // Prepare and send actual notification
    const awsRegion = region || process.env.AWS_REGION;
    if (!awsRegion) throw new Error('AWS region is not defined');

    const snsClient = new SNSClient({ region: awsRegion });
    const messageBody = content.url
      ? `${content.message}\n\nURL: ${content.url}`
      : content.message;

    const command = new PublishCommand({
      TopicArn: resolvedTopicArn,
      Subject: content.subject,
      Message: messageBody,
    });

    const response = await snsClient.send(command);
    return response.MessageId || 'Message sent successfully';
  } catch (error) {
    console.error('SNS notification error:', error);
    throw error;
  }
}
