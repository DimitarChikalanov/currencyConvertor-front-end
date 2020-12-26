/**
 *  Entity which represents a New Currency to be added. (exactly the same as back-end)
 *  @param id - the id of the currency
 *  @param currencyName - the name of the currency (string)
 *  @param rate - the rate of the currency (number)
 */
interface NewCurrency {
    id: number;
    currencyName: string;
    rate: number;
}

export default NewCurrency;