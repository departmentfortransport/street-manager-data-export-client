import { Section81Status, Section81Severity } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface Section81CSVExportRequest extends BaseCSVExportRequest {
    status?: Section81Status[];
    severity?: Section81Severity[];
    geographical_area_reference_number?: string[];
}
