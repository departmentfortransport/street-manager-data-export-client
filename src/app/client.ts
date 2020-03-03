import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios'
import { Agent } from 'https'
import { RequestConfig } from '../interfaces/requestConfig'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import * as qs from 'qs'
import { FPNCSVExportRequest } from '../interfaces/fpnCSVExportRequest'
import { CSVExportResponse } from '../interfaces/csvExportResponse'
import { Section81CSVExportRequest } from '../interfaces/section81CSVExportRequest'
import { ReinstatementCSVExportRequest } from '../interfaces/reinstatementCSVExportRequest'
import { InspectionCSVExportRequest } from '../interfaces/inspectionCSVExportRequest'
import { PermitCSVExportRequest } from '../interfaces/permitCSVExportRequest'
import { ForwardPlanCSVExportRequest } from '../interfaces/forwardPlanCSVExportRequest'
import { FeesCSVExportRequest } from '../interfaces/feesCSVExportRequest'
import { Stream } from 'stream'
import { PermitAlterationCSVExportRequest } from '../interfaces/permitAlterationCSVExportRequest'
import { OrganisationDataCSVExportRequest } from '../interfaces/organisationDataCSVExportRequest'
import { CommentCSVExportRequest } from '../interfaces/commentCSVExportRequest'
import { GetDataCSVRequest } from '../interfaces/getDataCSVRequest'

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

  public generateReinstatementsCSV(config: RequestConfig, request: ReinstatementCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/reinstatements/csv', request, this.generateRequestConfig(config)))
  }

  public async generateInspectionsCSV(config: RequestConfig, request: InspectionCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/inspections/csv', request, this.generateRequestConfig(config)))
  }

  public async generatePermitsCSV(config: RequestConfig, request: PermitCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/permits/csv', request, this.generateRequestConfig(config)))
  }

  public async generateForwardPlansCSV(config: RequestConfig, request: ForwardPlanCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/forward-plans/csv', request, this.generateRequestConfig(config)))
  }

  public async generateFeesCSV(config: RequestConfig, request: FeesCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/fees/csv', request, this.generateRequestConfig(config)))
  }

  public async generatePermitAlterationsCSV(config: RequestConfig, request: PermitAlterationCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/alterations/csv', request, this.generateRequestConfig(config)))
  }

  public async generateOrganisationDataCSV(config: RequestConfig, request: OrganisationDataCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/organisation-data/csv', request, this.generateRequestConfig(config)))
  }

  public async generateCommentsCSV(config: RequestConfig, request: CommentCSVExportRequest): Promise<CSVExportResponse> {
    return this.httpHandler<CSVExportResponse>(() => this.axios.post('/comments/csv', request, this.generateRequestConfig(config)))
  }

  public async getCSV(config: RequestConfig, csvId: number): Promise<AxiosResponse<Stream>> {
    try {
      return await this.axios.get(`/csv/${csvId}`, this.generateStreamRequestConfig(config))
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async getWorkDataCSV(requestConfig: RequestConfig, getDataCSVRequest: GetDataCSVRequest): Promise<AxiosResponse<Stream>> {
    try {
      return await this.axios.get('/work-data', this.generateRequestConfig(requestConfig, getDataCSVRequest))
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async getActivityDataCSV(requestConfig: RequestConfig, getDataCSVRequest: GetDataCSVRequest): Promise<AxiosResponse<Stream>> {
    try {
      return await this.axios.get('/activity-data', this.generateRequestConfig(requestConfig, getDataCSVRequest))
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

    if (requestConfig.frontendToken) {
      axiosRequestConfig.headers.frontendToken = requestConfig.frontendToken
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

  private generateStreamRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    return {
      ...this.generateRequestConfig(config, request),
      responseType: 'stream',
      transformResponse: data => data
    }
  }

  private handleError(err: any): Promise<any> {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR

    return Promise.reject(err)
  }
}
