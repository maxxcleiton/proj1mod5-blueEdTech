import styled from "styled-components";

const Header = styled.h1``;

const Title = styled(Header)``;
const Subtitle = styled(Header)``;
const Container = styled.div`
    /* padding-top: 50px; */
    /* display: flex; */
    /* text-align: center; */
    /* flex-direction: column; */
    margin-top: 100px;
    max-width: 360px;
    `;
const SignInForm = styled.div`
justify-content: center;
width: 100vw;
height: 100vh;
display: flex;
`
const SignUpForm = styled.div`
justify-content: center;
width: 100vw;
height: 100vh;
display: flex;
`
const Button = styled.button`background-color: #f7b539;`;
const FormControl = styled.div`
    margin: 1rem 0;
    width: 100%;

    label, input {
        display: inherit;
        width: inherit;
    }

    input {
        /* padding: */
        /* display: inherit; */
        /* width: inherit;     */
    }
`;

export { Button, Header, Title, Subtitle, Container, FormControl, SignInForm, SignUpForm };