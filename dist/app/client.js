"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const https_1 = require("https");
const http_status_codes_1 = require("http-status-codes");
const qs = require("qs");
class StreetManagerDataExportClient {
    constructor(config) {
        this.config = config;
        const axiosRequestConfig = {
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        };
        if (this.config.disableCertificateVerification) {
            axiosRequestConfig.httpsAgent = new https_1.Agent({
                rejectUnauthorized: false
            });
        }
        this.axios = axios_1.default.create(axiosRequestConfig);
    }
    generateFPNsCSV(config, request) {
        return this.httpHandler(() => this.axios.post('/fixed-penalty-notices/csv', request, this.generateRequestConfig(config)));
    }
    generateSection81sCSV(config, request) {
        return this.httpHandler(() => this.axios.post('/section-81s/csv', request, this.generateRequestConfig(config)));
    }
    generateReinstatementsCSV(config, request) {
        return this.httpHandler(() => this.axios.post('/reinstatements/csv', request, this.generateRequestConfig(config)));
    }
    generateInspectionsCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/inspections/csv', request, this.generateRequestConfig(config)));
        });
    }
    generatePermitsCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/permits/csv', request, this.generateRequestConfig(config)));
        });
    }
    generateForwardPlansCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/forward-plans/csv', request, this.generateRequestConfig(config)));
        });
    }
    generateFeesCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/fees/csv', request, this.generateRequestConfig(config)));
        });
    }
    generatePermitAlterationsCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/alterations/csv', request, this.generateRequestConfig(config)));
        });
    }
    generateOrganisationDataCSV(config, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.post('/organisation-data/csv', request, this.generateRequestConfig(config)));
        });
    }
    getCSV(config, csvId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.get(`/csv/${csvId}`, this.generateStreamRequestConfig(config));
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    getLatestWorkDataCSV(requestConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.axios.get('/work-data', this.generateRequestConfig(requestConfig));
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield request();
                if (response.data) {
                    return response.data;
                }
            }
            catch (err) {
                return this.handleError(err);
            }
        });
    }
    generateRequestConfig(requestConfig, request) {
        const axiosRequestConfig = {
            headers: {
                'x-request-id': requestConfig.requestId
            }
        };
        if (requestConfig.token) {
            axiosRequestConfig.headers.token = requestConfig.token;
        }
        if (requestConfig.frontendToken) {
            axiosRequestConfig.headers.frontendToken = requestConfig.frontendToken;
        }
        if (!request) {
            axiosRequestConfig.params = {};
        }
        else {
            axiosRequestConfig.params = request;
            axiosRequestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        return axiosRequestConfig;
    }
    generateStreamRequestConfig(config, request) {
        return Object.assign({}, this.generateRequestConfig(config, request), { responseType: 'stream', transformResponse: data => data });
    }
    handleError(err) {
        err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        return Promise.reject(err);
    }
}
exports.StreetManagerDataExportClient = StreetManagerDataExportClient;
