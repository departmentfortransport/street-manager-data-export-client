export interface BaseCSVExportRequest {
    /** Must be provided if user is a contractor
     * Up to four digits
     */
    swa_code?: string | null;
    query?: string | null;
    geographical_area_reference_number?: string[] | null;
}
