let browser = 'firefox';

switch (browser) {
  case 'chrome':
    console.log('launching chrome');
    break;

  case 'firefox':
    console.log('launching firefox');
    break;

  case 'edge':
    console.log('launching edge');
    break;

  default:
    console.log('browser not supported');
    break;
}

//Output:launching firefox