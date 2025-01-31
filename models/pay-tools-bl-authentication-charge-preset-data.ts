/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayToolsSharedModelsMoneyModel } from './pay-tools-shared-models-money-model';

/**
 * Data to be used in Charge request
 * @export
 * @interface PayToolsBlAuthenticationChargePresetData
 */
export interface PayToolsBlAuthenticationChargePresetData {
    /**
     * Order description
     * @type {string}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'dsc'?: string | null;
    /**
     * Creator reference
     * @type {string}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'ref'?: string | null;
    /**
     * Is it digital goods
     * @type {boolean}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'dig'?: boolean;
    /**
     * 
     * @type {PayToolsSharedModelsMoneyModel}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'amt'?: PayToolsSharedModelsMoneyModel;
    /**
     * The Upg Account name
     * @type {string}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'uan'?: string | null;
    /**
     * The Upg Client Certificate name
     * @type {string}
     * @memberof PayToolsBlAuthenticationChargePresetData
     */
    'ucc'?: string | null;
}

