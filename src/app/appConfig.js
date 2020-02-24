export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


// add here b2c policies you have
export const b2cPolicies = {
    signUpSignIn: "b2c_1_susi",
}

// main msal configuration parameters
export const msalConfig = {
    auth: {
        clientId: 'e760cab2-b9a1-4c0d-86fb-ff7084abd902', 
        authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/' + b2cPolicies.signUpSignIn,
        validateAuthority: false
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
    },
}

// main api configuration parameters
export const apiConfig = {
    b2cScopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"],
    webApi: "https://fabrikamb2chello.azurewebsites.net/hello"
};

// request to sign-in (returns an idToken)
export const loginRequest = {
    scopes: ["openid", "profile"],
};

// request to acquire a token for resource access
export const tokenRequest = {
    scopes: apiConfig.b2cScopes
};


