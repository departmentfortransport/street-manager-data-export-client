import { WorkStatus, WorkCategory, LaneRentalAssessmentOutcome, AlterationStatus, AlterationType } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface PermitAlterationCSVExportRequest extends BaseCSVExportRequest {
    alteration_status?: AlterationStatus[] | null;
    alteration_type?: AlterationType[] | null;
    work_status?: WorkStatus[] | null;
    work_category?: WorkCategory[] | null;
    lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome[] | null;
    start_date_created?: Date | null;
    end_date_created?: Date | null;
    is_traffic_sensitive?: boolean | null;
    is_high_impact_traffic_management?: boolean | null;
    is_duration_extension?: boolean | null;
    is_early_start?: boolean | null;
    is_deemed?: boolean | null;
    lane_rental_charges_not_agreed?: boolean | null;
    lane_rental_charges_potentially_apply?: boolean | null;
}
