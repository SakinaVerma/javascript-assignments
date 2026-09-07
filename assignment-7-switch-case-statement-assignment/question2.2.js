let statusCode = 404;

switch (statusCode) {
    case 200:
        console.log('success');
        break;
    case 404:
        console.log('not found');
        break;
    case 500:
        console.log('server error');
        break;
    default:
        console.log('unknown status');
        break;
}

//Output: not found