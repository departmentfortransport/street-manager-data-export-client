import { ForwardPlanStatus } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface ForwardPlanCSVExportRequest extends BaseCSVExportRequest {
  forward_plan_status?: ForwardPlanStatus[]
  proposed_start_date?: Date
  proposed_end_date?: Date
  work_start_date_from?: Date
  work_start_date_to?: Date
  work_end_date_from?: Date
  work_end_date_to?: Date
}
