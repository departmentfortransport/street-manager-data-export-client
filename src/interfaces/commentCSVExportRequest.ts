import { BaseCSVExportRequest } from './baseCSVExportRequest'
import { CommentTopic } from './referenceTypes'

export interface CommentCSVExportRequest extends BaseCSVExportRequest {
  date_created_from?: null | Date
  date_created_to?: null | Date
  topic?: null | CommentTopic[]
  is_internal?: null | boolean
  is_read?: null | boolean
  is_not_read?: null | boolean
}
