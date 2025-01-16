import {renderOrderSummary} from './checkout/orderSumary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary();
})




// new Promise((resolve)=>{
//   loadProducts(()=>{
//     console.log('proucts')
//     resolve('value1');
//   });

// }).then((value)=>{
//   console.log(value)
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   });

// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })



// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//   }