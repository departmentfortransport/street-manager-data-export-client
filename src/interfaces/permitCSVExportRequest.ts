import { PermitStatus, WorkStatus, WorkCategory, PermitCsvExportPrefix, LaneRentalAssessmentOutcome } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface PermitCSVExportRequest extends BaseCSVExportRequest {
  status?: null | PermitStatus[]
  work_status?: null | WorkStatus[]
  work_category?: null | WorkCategory[]
  lane_rental_assessment_outcome?: null | LaneRentalAssessmentOutcome[]
  start_date?: null | Date
  end_date?: null | Date
  work_start_date_from?: null | Date
  work_start_date_to?: null | Date
  work_end_date_from?: null | Date
  work_end_date_to?: null | Date
  start_date_created?: null | Date
  end_date_created?: null | Date
  active_permit_only?: null | boolean
  csv_export_prefix?: null | PermitCsvExportPrefix
  is_traffic_sensitive?: null | boolean
  is_high_impact_traffic_management?: null | boolean
  has_no_final_registration?: null | boolean
  has_excavation?: null | boolean
  is_early_start?: null | boolean
  is_deemed?: null | boolean
  lane_rental_charges_not_agreed?: null | boolean
  lane_rental_charges_potentially_apply?: null | boolean
  ever_modification_requested?: null | boolean
  hs2_works_only?: null | boolean
  consultation_works_only?: null | boolean
  consent_works_only?: null | boolean
  unacknowledged_by_ha_only?: null | boolean
  is_duration_challenged?: null | boolean
}
