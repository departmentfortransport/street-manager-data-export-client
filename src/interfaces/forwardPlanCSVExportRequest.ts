import { ForwardPlanStatus } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface ForwardPlanCSVExportRequest extends BaseCSVExportRequest {
  forward_plan_status?: null | ForwardPlanStatus[]
  proposed_start_date?: null | Date
  proposed_end_date?: null | Date
  work_start_date_from?: null | Date
  work_start_date_to?: null | Date
  work_end_date_from?: null | Date
  work_end_date_to?: null | Date
}
