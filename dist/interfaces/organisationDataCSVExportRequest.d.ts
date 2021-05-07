export interface OrganisationDataCSVExportRequest {
    start_date: Date;
    start_date_time?: Date | null;
    end_date: Date;
    end_date_time?: Date | null;
}
