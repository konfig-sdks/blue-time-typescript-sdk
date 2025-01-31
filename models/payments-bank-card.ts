/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentsCardTypes } from './payments-card-types';

/**
 * 
 * @export
 * @interface PaymentsBankCard
 */
export interface PaymentsBankCard {
    /**
     * 
     * @type {PaymentsCardTypes}
     * @memberof PaymentsBankCard
     */
    'type'?: PaymentsCardTypes;
    /**
     * 
     * @type {string}
     * @memberof PaymentsBankCard
     */
    'nameOnCard'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentsBankCard
     */
    'issueNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentsBankCard
     */
    'ownerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentsBankCard
     */
    'securityCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentsBankCard
     */
    'number'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PaymentsBankCard
     */
    'expirationMonth'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentsBankCard
     */
    'expirationYear'?: number;
}

