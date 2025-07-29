import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { logger } from '@/lib/logger';
import { ROUTES } from '@/app/config/routes';
import { TANK_PLANS_API, QUERY_KEY } from '../config';
import { triggerDatabricksJob } from '../../_shared/services/databricks';
import type { PlanVersion } from '../../_shared/types';

export function useVersionActions() {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [planToEdit, setPlanToEdit] = useState<PlanVersion | null>(null);
  const [editedVersion, setEditedVersion] = useState<PlanVersion | null>(null);

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${TANK_PLANS_API}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Error: ${response.status}`);
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Plan deleted successfully',
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    onError: error => {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      logger.error('Failed to delete plan', {
        module: 'useVersionActions',
        function: 'deletePlan',
        error: errorMessage,
      });

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async (version: PlanVersion) => {
      const response = await fetch(
        `${TANK_PLANS_API}/${version.plan_master_id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            master: {
              ...version,
            },
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Error: ${response.status}`);
      }

      return response.json();
    },
    onSuccess: async (_, variables) => {
      toast({
        title: 'Success',
        description: 'Version info updated successfully',
      });

      // Check if adding 18MP tag - special handling
      if (
        planToEdit?.plan_official !== '18MP' &&
        variables.plan_official === '18MP'
      ) {
        await handleDatabricksJob(variables);
      }

      // Reset state
      setPlanToEdit(null);
      setEditedVersion(null);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    onError: error => {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      logger.error('Failed to update version info', {
        module: 'useVersionActions',
        function: 'handleSaveVersionInfo',
        planId: editedVersion?.plan_master_id,
        error: errorMessage,
      });

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  // Databricks job handler for 18MP tag
  const handleDatabricksJob = async (version: PlanVersion) => {
    const context = {
      module: 'useVersionActions',
      function: 'handleDatabricksJob',
      planId: version.plan_master_id,
    };

    try {
      logger.debug('Triggering Databricks job for new 18MP tag', context);

      toast({
        title: 'Info',
        description: 'Triggering Databricks job...',
        duration: 3000,
      });

      const jobId = Number(process.env.NEXT_PUBLIC_TANK_PLAN_GANTT_JOB_ID);
      if (!jobId || isNaN(jobId)) {
        throw new Error(
          'NEXT_PUBLIC_TANK_PLAN_GANTT_JOB_ID is not configured or invalid'
        );
      }

      const jobResult = await triggerDatabricksJob({
        job_id: jobId,
        plan_version: version.plan_version,
        plan_version_no: version.plan_version_no,
        plan_type: version.plan_type,
        plan_official: version.plan_official,
      });

      toast({
        title: 'Job Triggered Successfully',
        description: `Run ID: ${jobResult.job_run_id}`,
        duration: 5000,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      logger.error('Failed to trigger Databricks job', context, {
        error: errorMessage,
        stack: error instanceof Error ? error.stack : undefined,
      });

      toast({
        variant: 'destructive',
        title: 'Job Trigger Failed',
        description: `Failed to trigger Databricks job: ${errorMessage}`,
        duration: 5000,
      });
    }
  };

  // Action handlers
  const editPlan = (plan: PlanVersion) => {
    logger.debug('Opening version editor', {
      module: 'useVersionActions',
      function: 'editPlan',
      planId: plan.plan_master_id,
    });
    setPlanToEdit(plan);
    setEditedVersion(plan);
  };

  const viewPlan = (plan: PlanVersion) => {
    router.push(`${ROUTES.PLAN_DETAILS}?id=${plan.plan_master_id}`);
  };

  const viewWeeklyPlan = (plan: PlanVersion) => {
    router.push(`${ROUTES.WEEKLY}?id=${plan.plan_master_id}`);
  };

  const deletePlan = async (id: string) => {
    return deleteMutation.mutateAsync(id);
  };

  const handleSaveVersionInfo = async (onSuccess?: () => void) => {
    if (!editedVersion || updateMutation.isPending) return;

    logger.debug('Saving version info', {
      module: 'useVersionActions',
      function: 'handleSaveVersionInfo',
      planId: editedVersion.plan_master_id,
    });

    await updateMutation.mutateAsync(editedVersion);
    onSuccess?.();
  };

  return {
    // State
    planToEdit,
    editedVersion,
    setEditedVersion,
    setPlanToEdit,
    isSaving: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,

    // Actions
    editPlan,
    viewPlan,
    viewWeeklyPlan,
    deletePlan,
    handleSaveVersionInfo,
  };
}
