let userRole = 'admin';

switch (userRole) {
    case 'admin':
        console.log('full access granted');
        break;
    case 'customer':
        console.log('customer access granted');
        break;
    case 'guest':
        console.log('limited access granted');
        break;
    default:
        console.log('access denied');
        break;
}

//Output: full access granted