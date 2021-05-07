import { BaseCSVExportRequest } from './baseCSVExportRequest'
import { FPNStatus, OffenceCode } from './referenceTypes'

export interface FPNCSVExportRequest extends BaseCSVExportRequest {
  status?: FPNStatus[] | null
  /** start_date must be before or the same as end_date if both are provided */
  start_date?: Date | null
  /** end_date must be the same as or after start_date if both are provided */
  end_date?: Date | null
  offence_code?: OffenceCode[] | null
  /** status_changed_date_from must be before or the same as status_changed_date_to if both are provided */
  status_changed_date_from?: Date | null
  /** end_date must be the same as or after status_changed_date_from if both are provided */
  status_changed_date_to?: Date | null
}
