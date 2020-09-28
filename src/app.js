import { 
  incrementQty, 
  decrementQty,
  recalculateSubTotal, 
  defaultQty, 
  totalAmount 
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price'); 
const subTotal = document.querySelector('#subtotal'); 
const kodePromo = document.querySelector('#code'); 
const btnOk = document.querySelector('#confirmButton') 

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); 
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  qtyInput.value = defaultQty(qtyInput.value);
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value);
});

qtyInput.addEventListener('keyup', () => { 
  subTotal.textContent = `Rp. ` + recalculateSubTotal(price.value, qtyInput.value); 
});

price.addEventListener('keyup', () => { 
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value); 
});

kodePromo.addEventListener('keyup', () => { 
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value); 
});

btnOk.addEventListener('keyup', () => { 
  subTotal.textContent = `Rp. ` + totalAmount(price.value, qtyInput.value, kodePromo.value);
});