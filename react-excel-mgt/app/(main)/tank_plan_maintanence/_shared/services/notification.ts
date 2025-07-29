import { logger } from '@/lib/logger';
import { ApiClient } from './api-client';

interface NotificationParams {
  subject: string;
  message: string;
  type: 'plan_update' | 'job_trigger' | 'system';
}

interface NotificationResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendEmailNotification(
  params: NotificationParams
): Promise<NotificationResult> {
  try {
    return await ApiClient.post<NotificationResult>(
      '/api/send-notification',
      params
    );
  } catch (error) {
    logger.error('Error in sendEmailNotification', {
      module: 'notification',
      error: error instanceof Error ? error.message : 'Unknown error',
      params,
    });
    throw error;
  }
}
