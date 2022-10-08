

class AccountService {
    
    async Auth(credential) {
        
        try {
            const request = await fetch('https://www.ws.dev/api/account/auth', {
            'method': 'POST',
            'body': JSON.stringify({})
        });

       const response = await request.json();

       return response;
    }
    catch {
        console.log("Deu erro hein, em conectar.")
    }

    }

    Register() {

    }

    GetUser() {

    }
}

export default AccountService;