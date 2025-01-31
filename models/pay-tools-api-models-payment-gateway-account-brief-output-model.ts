/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Output Model for designating a payment gateway account with a client certificate
 * @export
 * @interface PayToolsApiModelsPaymentGatewayAccountBriefOutputModel
 */
export interface PayToolsApiModelsPaymentGatewayAccountBriefOutputModel {
    /**
     * Name of account
     * @type {string}
     * @memberof PayToolsApiModelsPaymentGatewayAccountBriefOutputModel
     */
    'name'?: string | null;
    /**
     * Unique name of the Payment Gateway the account information relates to.
     * @type {string}
     * @memberof PayToolsApiModelsPaymentGatewayAccountBriefOutputModel
     */
    'paymentGatewayName'?: string | null;
    /**
     * Date and time the credentials were stored
     * @type {string}
     * @memberof PayToolsApiModelsPaymentGatewayAccountBriefOutputModel
     */
    'creationTime'?: string;
}

