//todo:     Module no - 8.6         topic: Multi-level If-else Condition:

// multi- lavel if-else: 

const totalAmount = 3000;

if( totalAmount > 5000){
    const discount = 30;
    const totalDiscount = totalAmount / 100 * discount;
    const youWillPay = totalAmount - totalDiscount;
    console.log('you will pay ', youWillPay ,'taka sir');
}
else if( totalAmount> 2000){
    const discount = 5;
    const totalDiscount = totalAmount /100 * discount;
    const youWillPay = totalAmount - totalDiscount;
    console.log('5 % discount , your pay ', youWillPay, 'taka');
}else{
    console.log('no discount, you will payment fully', totalAmount, 'taka');
}

