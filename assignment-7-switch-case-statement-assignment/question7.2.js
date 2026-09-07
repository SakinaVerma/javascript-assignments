let day = 'saturday';
switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('weekday');
        break;
    case 'saturday':
    case 'sunday':
        console.log('weekend');
        break;
    default:
        console.log('invalid day');
        break;
}

//Output:weekend