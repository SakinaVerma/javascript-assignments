let loanType = 'home';

switch (loanType) {
    case 'home':
        console.log('interest rate: 8%');
        break;

    case 'car':
        console.log('interest rate: 10%');
        break;

    case 'education':
        console.log('interest rate: 6%');
        break;

    case 'personal':
        console.log('interest rate: 12%');
        break;

    default:
        console.log('loan type not available');
        break;
}

//Output: interest rate: 8%