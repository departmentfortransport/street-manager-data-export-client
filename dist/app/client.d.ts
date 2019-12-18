import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { FPNCSVExportRequest } from '../interfaces/fpnCSVExportRequest';
import { CSVExportResponse } from '../interfaces/csvExportResponse';
export interface StreetManagerDataExportClientConfig {
    baseURL: string;
    timeout?: number;
    disableCertificateVerification?: boolean;
}
export declare class StreetManagerDataExportClient {
    private config;
    private axios;
    constructor(config: StreetManagerDataExportClientConfig);
    generateFPNsCSV(config: RequestConfig, request: FPNCSVExportRequest): Promise<CSVExportResponse>;
    getLatestWorkDataCsv(requestConfig: RequestConfig): Promise<AxiosResponse<string>>;
    private httpHandler;
    private generateRequestConfig;
    private handleError;
}
