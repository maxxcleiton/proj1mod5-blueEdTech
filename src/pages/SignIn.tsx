import { Button, Title, Container, FormControl, SignInForm} from '../components/Layouts';

import { useEffect, useState } from 'react';

import AccountService from '../services/AccountService';

function SignIn() {

    const [credential, setCredential] = useState({});
    
    useEffect(()=> {
        AccountService.Authentication();
    })

    // const accountService = new AccountService();
    
    // const [form, setForm] = useState({});

    function handleForm(event) {

        event.preventDefault();

        const {email, password} = event.target.elements;

        const passwordValue = password.value;

        setCredential({ 
            email: email.value,
            password: password.value
            }
        )

        accountService.Auth(credential);
    }


    return (
        <SignInForm>

            <Container>
            <Title># SignIn</Title>

                <form action="">
                    <FormControl>
                        <label htmlFor='email'>Email:</label>
                        <input
                            name="email"
                            type="email"
                            id='email'
                            />
                    </FormControl>
                    <FormControl>
                        <label htmlFor='password'>Password:</label>
                        <input
                            name="password"
                            type="password"
                            id='password'
                            />
                    </FormControl>
                    <Button>
                        SignIn now!
                    </Button>
                </form>
            </Container>
        </SignInForm>
    )
}