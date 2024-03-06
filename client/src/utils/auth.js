import { jwtDecode } from 'jwt-decode';


class AuthService {

    getProfile() {
            return jwtDecode(this.getToken());
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
            const decoded = jwtDecode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
    }

    getToken() {
        console.log('Retrieving Token');
                const token = localStorage.getItem('id_token');
                console.log('Token retrieved for token get');
                return token;
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