let environment = 'staging';

switch (environment.toLowerCase()) {
    case 'dev':
        console.log('development environment');
        break;
    case 'staging':
        console.log('staging environment');
        break;
    case 'prod':
        console.log('production environment');
        break;
    default:
        console.log('unknown environment');
        break;
}

//Output : staging environment