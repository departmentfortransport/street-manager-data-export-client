import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { FPNCSVExportRequest } from '../interfaces/fpnCSVExportRequest';
import { CSVExportResponse } from '../interfaces/csvExportResponse';
import { Section81CSVExportRequest } from '../interfaces/section81CSVExportRequest';
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
    generateSection81sCSV(config: RequestConfig, request: Section81CSVExportRequest): Promise<CSVExportResponse>;
    getLatestWorkDataCsv(requestConfig: RequestConfig): Promise<AxiosResponse<string>>;
    private httpHandler;
    private generateRequestConfig;
    private handleError;
}
