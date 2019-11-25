/// <reference types="node" />
import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { Stream } from 'stream';
export interface StreetManagerDataExportClientConfig {
    baseURL: string;
    timeout?: number;
    disableCertificateVerification?: boolean;
}
export declare class StreetManagerDataExportClient {
    private config;
    private axios;
    constructor(config: StreetManagerDataExportClientConfig);
    getLatestWorkDataCsv(requestConfig: RequestConfig): Promise<AxiosResponse<Stream>>;
    private generateRequestConfig;
    private handleError;
}
