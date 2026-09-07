let browser = 'edge';

switch (browser) {
    case 'chrome':
    case 'chromium':
        console.log('chromium-based browser');
        break;
    case 'firefox':
        console.log('mozilla browser');
        break;
    case 'edge':
    case 'ie':
        console.log('microsoft browser');
        break;
    default:
        console.log('other browser');
        break;
}

//Output:microsoft browser