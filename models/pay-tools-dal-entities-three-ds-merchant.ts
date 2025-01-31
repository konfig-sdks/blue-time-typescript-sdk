/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayToolsDalEntitiesThreeDsBrand } from './pay-tools-dal-entities-three-ds-brand';

/**
 * 
 * @export
 * @interface PayToolsDalEntitiesThreeDsMerchant
 */
export interface PayToolsDalEntitiesThreeDsMerchant {
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'merchantName': string;
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'merchantDisplayName': string;
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'merchantRequestorIdSuffix': string;
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'merchantCountry': string;
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'merchantUrl': string;
    /**
     * 
     * @type {string}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'acquirerName': string;
    /**
     * 
     * @type {Array<PayToolsDalEntitiesThreeDsBrand>}
     * @memberof PayToolsDalEntitiesThreeDsMerchant
     */
    'brands'?: Array<PayToolsDalEntitiesThreeDsBrand> | null;
}

