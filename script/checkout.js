import {renderOrderSummary} from './checkout/orderSumary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
import { loadProducts } from '../data/products.js';

loadProducts(()=>{
    renderOrderSummary();
   renderPaymentSummary();
})
