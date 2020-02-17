/// <reference types="node" />
import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { FPNCSVExportRequest } from '../interfaces/fpnCSVExportRequest';
import { CSVExportResponse } from '../interfaces/csvExportResponse';
import { Section81CSVExportRequest } from '../interfaces/section81CSVExportRequest';
import { ReinstatementCSVExportRequest } from '../interfaces/reinstatementCSVExportRequest';
import { InspectionCSVExportRequest } from '../interfaces/inspectionCSVExportRequest';
import { PermitCSVExportRequest } from '../interfaces/permitCSVExportRequest';
import { ForwardPlanCSVExportRequest } from '../interfaces/forwardPlanCSVExportRequest';
import { FeesCSVExportRequest } from '../interfaces/feesCSVExportRequest';
import { Stream } from 'stream';
import { PermitAlterationCSVExportRequest } from '../interfaces/permitAlterationCSVExportRequest';
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
    generateReinstatementsCSV(config: RequestConfig, request: ReinstatementCSVExportRequest): Promise<CSVExportResponse>;
    generateInspectionsCSV(config: RequestConfig, request: InspectionCSVExportRequest): Promise<CSVExportResponse>;
    generatePermitsCSV(config: RequestConfig, request: PermitCSVExportRequest): Promise<CSVExportResponse>;
    generateForwardPlansCSV(config: RequestConfig, request: ForwardPlanCSVExportRequest): Promise<CSVExportResponse>;
    generateFeesCSV(config: RequestConfig, request: FeesCSVExportRequest): Promise<CSVExportResponse>;
    generatePermitAlterationsCSV(config: RequestConfig, request: PermitAlterationCSVExportRequest): Promise<CSVExportResponse>;
    getCSV(config: RequestConfig, csvId: number): Promise<AxiosResponse<Stream>>;
    getLatestWorkDataCSV(requestConfig: RequestConfig): Promise<AxiosResponse<Stream>>;
    private httpHandler;
    private generateRequestConfig;
    private generateStreamRequestConfig;
    private handleError;
}
