import { InspectionResponseType, InspectionType, InspectionOutcome } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface InspectionCSVExportRequest extends BaseCSVExportRequest {
    inspection_response_type?: InspectionResponseType[];
    start_date?: Date;
    end_date?: Date;
    inspection_type?: InspectionType[];
    inspection_outcome?: InspectionOutcome[];
    start_date_created?: Date;
    end_date_created?: Date;
}
