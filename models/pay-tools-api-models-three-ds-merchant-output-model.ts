/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayToolsDalEntitiesThreeDsMerchant } from './pay-tools-dal-entities-three-ds-merchant';

/**
 * Model for response of 3DS Merchant
 * @export
 * @interface PayToolsApiModelsThreeDsMerchantOutputModel
 */
export interface PayToolsApiModelsThreeDsMerchantOutputModel {
    /**
     * Account name (Name on system)
     * @type {string}
     * @memberof PayToolsApiModelsThreeDsMerchantOutputModel
     */
    'name'?: string | null;
    /**
     * 
     * @type {PayToolsDalEntitiesThreeDsMerchant}
     * @memberof PayToolsApiModelsThreeDsMerchantOutputModel
     */
    'threeDsMerchant'?: PayToolsDalEntitiesThreeDsMerchant;
}

