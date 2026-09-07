let testType = 'API';

switch (testType.trim().toLowerCase()) {
    case 'ui':
        console.log('running Ul tests');
        break;
    case 'api':
        console.log('running API tests');
        break;
    case 'mobile':
        console.log('running Mobile tests');
        break;
    default:
        console.log('test type not recognized');
        break;
}

//Output: running API tests