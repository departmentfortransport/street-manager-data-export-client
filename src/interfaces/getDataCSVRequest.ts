export interface GetDataCSVRequest {
  /**
   * csv_export_date must be a date within the last two weeks.
   * If not provided, the current date will be used as the default.
   */
  csv_export_date?: Date
}
