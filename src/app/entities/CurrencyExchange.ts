/**
 *  Entity which represents a Currency Exchange. (exactly the same as back-end)
 *  @param exchangeFrom - currency to exchange from (string)
 *  @param exchangeTo - currency to exchange to (string)
 *  @param sumExchange - sum to be exchanged (number)
 */
interface CurrencyExchange {
    exchangeFrom: string;
    exchangeTo: string;
    sumExchange: number;
}

export default CurrencyExchange;