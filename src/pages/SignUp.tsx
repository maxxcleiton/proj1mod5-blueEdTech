import { Button, Title, Container, FormControl, SignUpForm} from '../components/Layouts';

export default function SignUp() {
    return (
        <SignUpForm>
            <Container>
            <Title># SignUp</Title>
                <form action="">
                    <FormControl>
                        <label htmlFor='text'>Full name:</label>
                        <input
                            name="text"
                            type="text"
                            />
                    </FormControl>
                    <FormControl>
                        <label htmlFor='email'>Email:</label>
                        <input
                            name="email"
                            type="email"
                            />
                    </FormControl>
                    <FormControl>
                        <label htmlFor='reemail'>Email (again):</label>
                        <input
                            name="email"
                            type="email"
                            />
                    </FormControl>
                    <FormControl>
                        <label htmlFor='password'>Password:</label>
                        <input
                            name="password"
                            type="password"
                            />
                    </FormControl>
                    <Button>
                        SignUp now!
                    </Button>
                </form>
            </Container>
        </SignUpForm>
    )
}