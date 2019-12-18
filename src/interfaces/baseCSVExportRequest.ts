export interface BaseCSVExportRequest {
  /** Must be provided if user is a contractor
   * Up to four digits
   */
  swa_code?: string
  query?: string
}
