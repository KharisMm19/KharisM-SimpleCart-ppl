const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => qty - 1;

function recalculateSubTotal(price, qty) {
    return price * qty; 
}

function totalAmount(price, qty, kode) { 
    return recalculateSubTotal(price, qty) - discount(price, qty, kode);
}

function defaultQty(qty) { 
    return (parseInt(qty) < 1) ? 1 : qty;
}

function discount(price, qty, kode) { 
    const subTotal = recalculateSubTotal(price, qty);
    switch(kode) { 
        case "ART1":
            result = subTotal * 0.10;
            break;
        case "ART2":
            result = subTotal * 0.20;
            break;
        case "ART3":
            result = subTotal * 0.30;
            break;
        case "ART4":
            result = subTotal * 0.40;
            break;
        case "ART5":
            result = subTotal * 0.50;
            break;
        default: 
            break;
    }
    return result;
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubTotal, 
    defaultQty, 
    discount, 
    totalAmount 
};