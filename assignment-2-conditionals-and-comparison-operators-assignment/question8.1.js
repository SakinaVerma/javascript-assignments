let testStatus = 'pass';
let executionTime = 5;

if (testStatus === 'pass') {
    console.log('test passed');
} else if (testStatus === 'fail') {
    console.log('test failed');
} else {
    console.log('test skipped');
}

if (executionTime > 10) {
    console.log('slow execution');
} 
else {
    console.log('fast execution');
}

// Output: test passed
// fast execution