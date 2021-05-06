import { ReinstatementStatus } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface ReinstatementCSVExportRequest extends BaseCSVExportRequest {
    status?: ReinstatementStatus[] | null;
    latest_reinstatements_only?: boolean | null;
    registration_date_from?: Date | null;
    registration_date_to?: Date | null;
    end_date_from?: Date | null;
    end_date_to?: Date | null;
}
