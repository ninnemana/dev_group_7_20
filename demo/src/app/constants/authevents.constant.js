'use strict';

class AuthEvents {
  constructor () {
	this.loginSuccess = 'auth-login-success';
	this.loginFailed = 'auth-login-failed';
	this.logoutSuccess = 'auth-logout-success';
	this.sessionTimeout = 'auth-session-timeout';
	this.notAuthenticated = 'auth-not-authenticated';
	this.notAuthorzed = 'auth-not-authorized';
  }
}

export default AuthEvents;