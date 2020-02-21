import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface OrganisationDataCSVExportRequest extends BaseCSVExportRequest {
  start_date: Date
  start_date_time?: Date
  end_date: Date
  end_date_time?: Date
}
