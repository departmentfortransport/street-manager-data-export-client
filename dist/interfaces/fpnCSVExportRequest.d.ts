import { BaseCSVExportRequest } from './baseCSVExportRequest';
import { FPNStatus } from './referenceTypes';
export interface FPNCSVExportRequest extends BaseCSVExportRequest {
    status?: FPNStatus[];
    start_date?: Date;
    end_date?: Date;
}
