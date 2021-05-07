import { PermitStatus, WorkStatus, WorkCategory, PermitCsvExportPrefix, LaneRentalAssessmentOutcome } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface PermitCSVExportRequest extends BaseCSVExportRequest {
    status?: PermitStatus[] | null;
    work_status?: WorkStatus[] | null;
    work_category?: WorkCategory[] | null;
    lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome[] | null;
    start_date?: Date | null;
    end_date?: Date | null;
    work_start_date_from?: Date | null;
    work_start_date_to?: Date | null;
    work_end_date_from?: Date | null;
    work_end_date_to?: Date | null;
    start_date_created?: Date | null;
    end_date_created?: Date | null;
    active_permit_only?: boolean | null;
    csv_export_prefix?: PermitCsvExportPrefix | null;
    is_traffic_sensitive?: boolean | null;
    is_high_impact_traffic_management?: boolean | null;
    has_no_final_registration?: boolean | null;
    has_excavation?: boolean | null;
    is_early_start?: boolean | null;
    is_deemed?: boolean | null;
    lane_rental_charges_not_agreed?: boolean | null;
    lane_rental_charges_potentially_apply?: boolean | null;
    ever_modification_requested?: boolean | null;
    hs2_works_only?: boolean | null;
    consultation_works_only?: boolean | null;
    consent_works_only?: boolean | null;
    unacknowledged_by_ha_only?: boolean | null;
    is_duration_challenged?: boolean | null;
}
