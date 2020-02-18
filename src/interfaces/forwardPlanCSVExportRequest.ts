import { ForwardPlanStatus } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface ForwardPlanCSVExportRequest extends BaseCSVExportRequest {
  forward_plan_status?: ForwardPlanStatus[]
  proposed_start_date?: Date
  proposed_end_date?: Date
}
