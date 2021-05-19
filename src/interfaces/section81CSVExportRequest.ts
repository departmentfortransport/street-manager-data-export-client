import { Section81Status, Section81Severity } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface Section81CSVExportRequest extends BaseCSVExportRequest {
  status?: null | Section81Status[]
  severity?: null | Section81Severity[]
}
