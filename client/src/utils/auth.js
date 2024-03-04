import { jwtDecode } from 'jwt-decode';


class AuthService {

    getProfile() {
        if (this) {
            console.log(`${this} token retrieved`);
            return decode(this.getToken);
        } else {
            console.log('No token available for AuthService')
        }
    }

    loggedIn() {
        if(this) {
            const token = this.getToken();
            console.log('Token retrieved for Login');
            return !!token && !this.isTokenExpired(token);
        } else if (!this) {
            console.log('No token available for Login');
            return false;
        }
    }

    isTokenExpired(token) {
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            console.log('Error retrieving token for token expiration check');
            console.log(err);
            return false;
        }
    }

    getToken() {
        console.log('Retrieving Token');
        try {
            if (this === null) {
                console.log('No token available for retrieval');
                return null;
            } else {
                const token = localStorage.getItem('id_token');
                console.log('Token retrieved for token get');
                return token;
            }
        } catch (error) {
            console.log('Error retrieving token for token get');
            console.log(error);
        }
    }

    login(idToken) {
        try {
            localStorage.setItem('id_token', idToken);
            window.location.assign('/user-profile');
            console.log('Login Successful with ID token')
        } catch (error) {
            console.log('Error Logging in with ID token');
            
            console.log(error);
        }
    }

    logout() {
        try {
            localStorage.removeItem('id_token');
            window.location.assign('/');
            console.log('Logout Successful');
        } catch (error) {
            console.log('Error removing id_token from local storage for logout');
            console.log(error)
        }
    }

    register(idToken) {
        try {
            localStorage.setItem('id_token', idToken);
            window.location.assign('/');
            console.log('Registration Successful');
        } catch (error) {
            console.log('Error in Registration Attempt');
            console.log(error)
        }
    }
}

export default new AuthService;