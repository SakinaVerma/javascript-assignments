let rideType = 'sedan';

switch (rideType) {
    case 'mini':
        console.log('mini car booked - $5');
        break;
    case 'sedan':
        console.log('sedan car booked - $8');
        break;
    case 'suv':
        console.log('SUV booked - $12');
        break;
    case 'bike':
        console.log('bike booked - $3');
        break;
    default:
        console.log('ride type not available');
        break;
}

//Output: sedan car booked - $8