import UserService from "./user-service";

class AuthenticationService{

    constructor(){}

    static async signIn(email: string, password: string, rememberToken: boolean = false)
    {
        return [];
    }

    
    static async signUp(userObj: object)
    {
        // get user information
        const {} = userObj;

        // validate user information 

        // check if user exists

        // store user information
        
        return [];
    }
    
    
    static async forgotPassword()
    {
        return [];
    }


    static async changePassword()
    {
        return [];
    }


}

export default AuthenticationService;

// User Login 
// User Registration
// User Forgot Password
// User Change Password