import { ForwardPlanStatus } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface ForwardPlanCSVExportRequest extends BaseCSVExportRequest {
    forward_plan_status?: ForwardPlanStatus[] | null;
    proposed_start_date?: Date | null;
    proposed_end_date?: Date | null;
    work_start_date_from?: Date | null;
    work_start_date_to?: Date | null;
    work_end_date_from?: Date | null;
    work_end_date_to?: Date | null;
}
