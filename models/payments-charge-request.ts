/*
Orchestra API

Code Version 1.0.7.15

The version of the OpenAPI document: Prod


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentsBankCard } from './payments-bank-card';
import { PaymentsMoney } from './payments-money';
import { PaymentsPayer } from './payments-payer';
import { PaymentsThreeDS } from './payments-three-ds';

/**
 * 
 * @export
 * @interface PaymentsChargeRequest
 */
export interface PaymentsChargeRequest {
    /**
     * 
     * @type {PaymentsBankCard}
     * @memberof PaymentsChargeRequest
     */
    'bankCard'?: PaymentsBankCard;
    /**
     * 
     * @type {PaymentsPayer}
     * @memberof PaymentsChargeRequest
     */
    'payer'?: PaymentsPayer;
    /**
     * 
     * @type {PaymentsThreeDS}
     * @memberof PaymentsChargeRequest
     */
    'threeDS'?: PaymentsThreeDS;
    /**
     * 
     * @type {string}
     * @memberof PaymentsChargeRequest
     */
    'userToken'?: string | null;
    /**
     * 
     * @type {PaymentsMoney}
     * @memberof PaymentsChargeRequest
     */
    'amount'?: PaymentsMoney;
    /**
     * 
     * @type {string}
     * @memberof PaymentsChargeRequest
     */
    'myReference'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentsChargeRequest
     */
    'isDigitalGoods'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PaymentsChargeRequest
     */
    'orderDesc'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentsChargeRequest
     */
    'generateToken'?: boolean;
}

