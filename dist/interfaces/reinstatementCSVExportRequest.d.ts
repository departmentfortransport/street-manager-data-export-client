import { ReinstatementStatus } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface ReinstatementCSVExportRequest extends BaseCSVExportRequest {
    status?: ReinstatementStatus[];
    latest_reinstatements_only?: boolean;
    geographical_area_reference_number?: string[];
}
