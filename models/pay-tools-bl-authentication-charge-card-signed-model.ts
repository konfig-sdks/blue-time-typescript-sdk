/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayToolsBlAuthenticationChargePresetData } from './pay-tools-bl-authentication-charge-preset-data';
import { PayToolsSharedModelsCardStoredCard } from './pay-tools-shared-models-card-stored-card';
import { PaymentsOperationResult } from './payments-operation-result';

/**
 * Model for charge operation result after providing Cvv
 * @export
 * @interface PayToolsBlAuthenticationChargeCardSignedModel
 */
export interface PayToolsBlAuthenticationChargeCardSignedModel {
    /**
     * 
     * @type {PaymentsOperationResult}
     * @memberof PayToolsBlAuthenticationChargeCardSignedModel
     */
    'crg_rs'?: PaymentsOperationResult;
    /**
     * 
     * @type {PayToolsSharedModelsCardStoredCard}
     * @memberof PayToolsBlAuthenticationChargeCardSignedModel
     */
    'card'?: PayToolsSharedModelsCardStoredCard;
    /**
     * 
     * @type {PayToolsBlAuthenticationChargePresetData}
     * @memberof PayToolsBlAuthenticationChargeCardSignedModel
     */
    'crg_d'?: PayToolsBlAuthenticationChargePresetData;
}

