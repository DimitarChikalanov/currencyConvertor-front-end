/**
 *  Entity which represents a History. (exactly the same as back-end)
 *  @param id - the id of the history
 *  @param currencyFrom - the name of the currency FROM
 *  @param currencyTo - tthe name of the currency TO
 *  @param currencyExchange - how much money to convert
 *  @param exchangeSum - money exchanged
 *  @param exchangedAt - at what time was the exchange
 */
interface ExchangeHistory {
    id: number;
    currencyFrom: string;
    currencyTo: string;
    currencyExchange: number;
    exchangeSum: number;
    exchangedAt: string;
}

export default ExchangeHistory;