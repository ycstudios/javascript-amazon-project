import {formatCurrency} from '../script/utils/money.js';

if(formatCurrency(2095)==='20.95'){
    console.log('passed')
}else{
    console.log('formatCurrency')
}

if(formatCurrency(0)==='0.00'){
    console.log('passed')
}else{
    console.log('formatCurrency')
}