let isLoggedIn = true;
let hasPermission = false;

if (isLoggedIn) {
    console.log('user logged in');

    if (hasPermission) {
        console.log('access granted');
    } else {
        console.log('access denied');
    }
}

// Output : user logged in
// access denied