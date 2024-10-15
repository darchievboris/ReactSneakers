export function countTotalPriceFromArray(array){
    let totalPrice = ""
    if(!Array.isArray(array)) return totalPrice
    const totalPriceWithoutCurrency = array.reduce((sum,item)=>sum+=item.price,0)
    totalPrice = new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(totalPriceWithoutCurrency);
    return [totalPrice, totalPriceWithoutCurrency]
}
export function formatNumberToPrice(number){
    let price = 0
    if(Number.isNaN(number)) return price
    price = new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(number);
    return price
}
export function formatNumberToPriceWithTax(number,tax){
    let price = 0
    if(Number.isNaN(number)) return price
    const temp = number * (tax/100)
    price = new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(temp);
    return price
}