import { Section81Status } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface Section81CSVExportRequest extends BaseCSVExportRequest {
  status?: Section81Status[]
}
