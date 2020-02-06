export const clientId = `881035424531-62sq1ujo5kui8c2dhvf2cd0qvji9j81p.apps.googleusercontent.com`;
export const isLoggedIn = localStorage.getItem( 'profileData' );

export function login( response, callBack ) {
    localStorage.setItem( 'profileData', JSON.stringify(response.profileObj) );
    callBack && callBack();
}

export function failure( error ) {
    alert('Something went wrong');
}

export function logout(callback) {
    localStorage.removeItem('profileData');
    callback && callback();
}

export function getProfileData() {
    return localStorage.getItem( 'profileData' );
}