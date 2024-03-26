/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Base model for card with Security code
 * @export
 * @interface PayToolsApiModelsCardBaseWithSecurityCode
 */
export interface PayToolsApiModelsCardBaseWithSecurityCode {
    /**
     * Card security code (digits on back of card)
     * @type {string}
     * @memberof PayToolsApiModelsCardBaseWithSecurityCode
     */
    'cvv'?: string | null;
    /**
     * Card number (PAN) or a Reference to a Tokenized string. A Token should be referenced in the format @TOKEN, e.g \"@nQGywsQE9gbURtrXEjTZwtWqeMdK9nsO\"
     * @type {string}
     * @memberof PayToolsApiModelsCardBaseWithSecurityCode
     */
    'cardNumber': string;
    /**
     * Expiration year
     * @type {number}
     * @memberof PayToolsApiModelsCardBaseWithSecurityCode
     */
    'expirationYear': number;
    /**
     * Expiration month
     * @type {number}
     * @memberof PayToolsApiModelsCardBaseWithSecurityCode
     */
    'expirationMonth': number;
}

