let paymentMethod = 'UPI';

switch (paymentMethod.toLowerCase()) {
    case 'upi':
        console.log('processing UPI payment');
        break;
    case 'card':
        console.log('processing card payment');
        break;
    case 'paypal':
        console.log('processing PayPal payment');
        break;
    case 'cash':
        console.log('processing cash payment');
        break;
    default:
        console.log('payment method not supported');
        break;
}


//Output: processing UPI payment