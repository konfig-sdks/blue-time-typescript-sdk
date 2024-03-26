/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayToolsApiModelsCardBaseWithSecurityCode } from './pay-tools-api-models-card-base-with-security-code';
import { PayToolsApiModelsTokenizationRequest } from './pay-tools-api-models-tokenization-request';

/**
 * Network Tokenization Request
 * @export
 * @interface PayToolsApiModelsNetworkTokenizationTokenizeRequest
 */
export interface PayToolsApiModelsNetworkTokenizationTokenizeRequest {
    /**
     * 
     * @type {PayToolsApiModelsTokenizationRequest}
     * @memberof PayToolsApiModelsNetworkTokenizationTokenizeRequest
     */
    'tokenizationRequest'?: PayToolsApiModelsTokenizationRequest;
    /**
     * 
     * @type {PayToolsApiModelsCardBaseWithSecurityCode}
     * @memberof PayToolsApiModelsNetworkTokenizationTokenizeRequest
     */
    'card'?: PayToolsApiModelsCardBaseWithSecurityCode;
}

