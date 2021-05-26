import { WorkStatus, WorkCategory, LaneRentalAssessmentOutcome, AlterationStatus, AlterationType } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface PermitAlterationCSVExportRequest extends BaseCSVExportRequest {
  alteration_status?: null | AlterationStatus[]
  alteration_type?: null | AlterationType[]
  work_status?: null | WorkStatus[]
  work_category?: null | WorkCategory[]
  lane_rental_assessment_outcome?: null | LaneRentalAssessmentOutcome[]
  start_date_created?: null | Date
  end_date_created?: null | Date
  is_traffic_sensitive?: null | boolean
  is_high_impact_traffic_management?: null | boolean
  is_duration_extension?: null | boolean
  is_early_start?: null | boolean
  is_deemed?: null | boolean
  lane_rental_charges_not_agreed?: null | boolean
  lane_rental_charges_potentially_apply?: null | boolean
  status_update_date_from?: null | Date
  status_update_date_to?: null | Date
}
