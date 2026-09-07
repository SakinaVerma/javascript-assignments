let locatorType = 'xpath';
switch (locatorType) {
    case 'id':
        console.log('finding element by ID');
        break;
    case 'xpath':
        console.log('finding element by XPath');
        break;
    case 'css':
        console.log('finding element by CSS');
        break;
    case 'text':
        console.log('finding element by text');
        break;
    default:
        console.log('invalid locator type');
        break;
}

//Output: finding element by XPath