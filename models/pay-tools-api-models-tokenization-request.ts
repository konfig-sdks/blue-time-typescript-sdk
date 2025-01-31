/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NetworkTokenCardSource } from './network-token-card-source';
import { PayToolsApiModelsNetworkTokenizationPayer } from './pay-tools-api-models-network-tokenization-payer';

/**
 * Model for sending Network Tokenization Request
 * @export
 * @interface PayToolsApiModelsTokenizationRequest
 */
export interface PayToolsApiModelsTokenizationRequest {
    /**
     * Iso-369-1 2-letter language code
     * @type {string}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'consumerLanguage'?: string | null;
    /**
     * 
     * @type {PayToolsApiModelsNetworkTokenizationPayer}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'cardHolder'?: PayToolsApiModelsNetworkTokenizationPayer;
    /**
     * Device score
     * @type {number}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'deviceScore'?: number;
    /**
     * Account score
     * @type {number}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'accountScore'?: number;
    /**
     * Device latitude -90 to 90
     * @type {number}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'deviceLocationLat'?: number | null;
    /**
     * Device longitude -90 to 90
     * @type {number}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'deviceLocationLon'?: number | null;
    /**
     * Ip address of device
     * @type {string}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'deviceIpAddress'?: string | null;
    /**
     * 
     * @type {NetworkTokenCardSource}
     * @memberof PayToolsApiModelsTokenizationRequest
     */
    'cardSource'?: NetworkTokenCardSource;
}

