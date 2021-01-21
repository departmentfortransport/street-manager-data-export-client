import { ReinstatementStatus } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface ReinstatementCSVExportRequest extends BaseCSVExportRequest {
    status?: ReinstatementStatus[];
    latest_reinstatements_only?: boolean;
    registration_date_from?: Date;
    registration_date_to?: Date;
    end_date_from?: Date;
    end_date_to?: Date;
}
