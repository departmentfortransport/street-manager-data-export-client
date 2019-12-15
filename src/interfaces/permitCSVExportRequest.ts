import { PermitStatus, WorkStatus, WorkCategory, PermitCsvExportPrefix, LaneRentalAssessmentOutcome } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface PermitCSVExportRequest extends BaseCSVExportRequest {
  status?: PermitStatus[]
  work_status?: WorkStatus[]
  work_category?: WorkCategory[]
  lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome[]
  start_date?: Date
  end_date?: Date
  start_date_created?: Date
  end_date_created?: Date
  active_permit_only?: boolean
  csv_export_prefix?: PermitCsvExportPrefix
  is_traffic_sensitive?: boolean
  is_high_impact_traffic_management?: boolean
  has_no_final_registration?: boolean
  has_excavation?: boolean
  is_early_start?: boolean
  is_deemed?: boolean
  lane_rental_charges_not_agreed?: boolean
  lane_rental_charges_potentially_apply?: boolean
}
