/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * IIN data
 * @export
 * @interface PayToolsApiModelsIinData
 */
export interface PayToolsApiModelsIinData {
    /**
     * The longest match of the first 6 to 11 digits of the card number that we were able to match
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'bin'?: string | null;
    /**
     * The card brand (AMERICAN EXPRESS, VISA, MASTERCARD, JCB etc)
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'cardBrand'?: string | null;
    /**
     * The type of card (DEBIT, CREDIT, \'DEBIT OR CREDIT\', CHARGE CARD)
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'cardType'?: string | null;
    /**
     * The category of the card (CLASSIC, BUSINESS, STANDARD, PERSONAL, etc)
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'category'?: string | null;
    /**
     * The name of the entity (usually bank) that issued the card
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'issuingOrganization'?: string | null;
    /**
     * The 2 letter country code (<a href=\"https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes\" target=\"_blank\">ISO 3166-2 <img src=\"https://files.readme.io/b676144-openNewWindow.png\" width=\"10\" /></a>) where the card was issued
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'countryCode'?: string | null;
    /**
     * The url to the brand logo
     * @type {string}
     * @memberof PayToolsApiModelsIinData
     */
    'brandLogoUrl'?: string | null;
}

