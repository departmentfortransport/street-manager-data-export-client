import { ReinstatementStatus } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface ReinstatementCSVExportRequest extends BaseCSVExportRequest {
  status?: null | ReinstatementStatus[]
  latest_reinstatements_only?: null | boolean
  registration_date_from?: null | Date
  registration_date_to?: null | Date
  end_date_from?: null | Date
  end_date_to?: null | Date
}
