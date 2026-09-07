let testResult = 'pass';

// Switch approach
switch (testResult) {
    case 'pass':
        console.log('test passed - switch');
        break;
    case 'fail':
        console.log('test failed - switch');
        break;
    default:
        console.log('unknown result - switch');
        break;
}

// If-else approach
if (testResult === 'pass') {
    console.log('test passed - if-else');
} else if (testResult === 'fail') {
    console.log('test failed - if-else');
} else {

}
console.log('unknown result - if-else');

// Output:test passed - switch
// test passed - if-else
// unknown result - if-else