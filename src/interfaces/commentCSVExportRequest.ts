import { BaseCSVExportRequest } from './baseCSVExportRequest'
import { CommentTopic } from './referenceTypes'

export interface CommentCSVExportRequest extends BaseCSVExportRequest {
  date_created_from?: Date
  date_created_to?: Date
  topic?: CommentTopic[]
  is_internal?: boolean
  is_read?: boolean
  is_not_read?: boolean
}
