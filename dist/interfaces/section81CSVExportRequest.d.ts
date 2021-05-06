import { Section81Status, Section81Severity } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface Section81CSVExportRequest extends BaseCSVExportRequest {
    status?: Section81Status[] | null;
    severity?: Section81Severity[] | null;
}
