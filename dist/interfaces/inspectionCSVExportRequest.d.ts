import { InspectionResponseType } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface InspectionCSVExportRequest extends BaseCSVExportRequest {
    inspection_response_type?: InspectionResponseType[];
    start_date?: Date;
    end_date?: Date;
    geographical_area_reference_number?: string[];
}
