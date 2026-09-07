let environment = 'staging';

if (environment === 'dev') {
    console.log('development environment');
}

if (environment === 'staging') {
    console.log('staging environment');
}

if (environment === 'prod') {
    console.log('production environment');
} 
else {
    console.log('unknown environment');
}

// Output:staging environment
// unknown environment