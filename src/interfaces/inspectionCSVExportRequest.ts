import { InspectionResponseType, InspectionType, InspectionOutcome } from './referenceTypes'
import { BaseCSVExportRequest } from './baseCSVExportRequest'

export interface InspectionCSVExportRequest extends BaseCSVExportRequest {
  inspection_response_type?: null | InspectionResponseType[]
  start_date?: null | Date
  end_date?: null | Date
  inspection_type?: null | InspectionType[]
  inspection_outcome?: null | InspectionOutcome[]
  start_date_created?: null | Date
  end_date_created?: null | Date
}
