import { BaseCSVExportRequest } from './baseCSVExportRequest'
import { FPNStatus, OffenceCode } from './referenceTypes'

export interface FPNCSVExportRequest extends BaseCSVExportRequest {
  status?: null | FPNStatus[]
  /** start_date must be before or the same as end_date if both are provided */
  start_date?: null | Date
  /** end_date must be the same as or after start_date if both are provided */
  end_date?: null | Date
  offence_code?: null | OffenceCode[]
  /** status_changed_date_from must be before or the same as status_changed_date_to if both are provided */
  status_changed_date_from?: null | Date
  /** end_date must be the same as or after status_changed_date_from if both are provided */
  status_changed_date_to?: null | Date
}
