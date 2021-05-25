export interface BaseCSVExportRequest {
    /** Must be provided if user is a contractor
     * Up to four digits
     */
    swa_code?: null | string;
    query?: null | string;
    geographical_area_reference_number?: null | string[];
}
