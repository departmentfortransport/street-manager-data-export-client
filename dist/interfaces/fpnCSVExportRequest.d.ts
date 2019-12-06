import { BaseCSVExportRequest } from './baseCSVExportRequest';
import { FPNStatus } from './referenceTypes';
export interface FPNCSVExportRequest extends BaseCSVExportRequest {
    status?: FPNStatus[];
    /** start_date must be before or the same as end_date if both are provided */
    start_date?: Date;
    /** end_date must be the same as or after start_date if both are provided */
    end_date?: Date;
}
