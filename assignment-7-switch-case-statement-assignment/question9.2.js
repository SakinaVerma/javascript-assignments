
let device = 'smartwatch';

switch (device) {
    case 'mobile':
        console.log('mobile device');
        break;
    case 'tablet':
        console.log('tablet device');
        break;
    case 'desktop':
        console.log('desktop device');
        break;
    default:
        console.log('device type: ' + device);
        break;
}

//Output: device type: smartwatch