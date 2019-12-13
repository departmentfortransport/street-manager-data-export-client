import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios'
import { Agent } from 'https'
import { RequestConfig } from '../interfaces/requestConfig'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import * as qs from 'qs'
import { FPNCSVExportRequest } from '../interfaces/fpnCSVExportRequest'
import { CSVExportResponse } from '../interfaces/csvExportResponse'
import Section81CSVExportRequest from '../interfaces/section81CSVExportRequest'

export interface StreetManagerDataExportClientConfig {
  baseURL: string,
  timeout?: number,
  disableCertificateVerification?: boolean
}

export class StreetManagerDataExportClient {
  private axios: AxiosInstance

  public constructor (private config: StreetManagerDataExportClientConfig) {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    }

    if (this.config.disableCertificateVerification) {
      axiosRequestConfig.httpsAgent = new Agent({
        rejectUnauthorized: false
      })
    }

    this.axios = axios.create(axiosRequestConfig)
  }

  public generateFPNsCSV(config: RequestConfig, request: FPNCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/fixed-penalty-notices/csv', request, this.generateRequestConfig(config)))
  }

  public generateSection81sCSV(config: RequestConfig, request: Section81CSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/section-81s/csv', request, this.generateRequestConfig(config)))
  }

  public async getLatestWorkDataCsv(requestConfig: RequestConfig): Promise<AxiosResponse<string>> {
    try {
      return await this.axios.get('/work-data', this.generateRequestConfig(requestConfig))
    } catch (err) {
      return this.handleError(err)
    }
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private generateRequestConfig(requestConfig: RequestConfig, request?: any): AxiosRequestConfig {
    const axiosRequestConfig: AxiosRequestConfig = {
      headers: {
        'x-request-id': requestConfig.requestId
      }
    }

    if (requestConfig.token) {
      axiosRequestConfig.headers.token = requestConfig.token
    }

    if (!request) {
      axiosRequestConfig.params = {}
    } else {
      axiosRequestConfig.params = request
      axiosRequestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    return axiosRequestConfig
  }

  private handleError(err: any): Promise<any> {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR

    return Promise.reject(err)
  }
}
