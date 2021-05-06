import { InspectionResponseType, InspectionType, InspectionOutcome } from './referenceTypes';
import { BaseCSVExportRequest } from './baseCSVExportRequest';
export interface InspectionCSVExportRequest extends BaseCSVExportRequest {
    inspection_response_type?: InspectionResponseType[] | null;
    start_date?: Date | null;
    end_date?: Date | null;
    inspection_type?: InspectionType[] | null;
    inspection_outcome?: InspectionOutcome[] | null;
    start_date_created?: Date | null;
    end_date_created?: Date | null;
}
