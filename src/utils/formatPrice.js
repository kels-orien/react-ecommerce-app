export const formatPrice = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}


export const totalAmountInCart = ( price) => {
    const total =+ price;
    return total;
}