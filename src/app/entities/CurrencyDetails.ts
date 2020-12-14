/**
 *  Entity which represents a Currency. (exactly the same as back-end)
 *  @param id - the id of the currency
 *  @param nameOfValue - the name of the currency (string)
 *  @param rate - the rate of the currency (number)
 *  @param refreshTime - the last refresh date of the currency (string)
 */
interface CurrencyDetails {
    id: number;
    nameOfValue: string;
    rate: number;
    refreshTime: string;
}

export default CurrencyDetails;