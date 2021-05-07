import { BaseCSVExportRequest } from './baseCSVExportRequest';
import { CommentTopic } from './referenceTypes';
export interface CommentCSVExportRequest extends BaseCSVExportRequest {
    date_created_from?: Date | null;
    date_created_to?: Date | null;
    topic?: CommentTopic[] | null;
    is_internal?: boolean | null;
    is_read?: boolean | null;
    is_not_read?: boolean | null;
}
