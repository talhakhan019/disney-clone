import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
        <CTA>
            <CTALoginOne src = './images/cta-logo-one.svg'/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestiae culpa quam sit consectetur eveniet repellendus mollitia dicta et est, doloremque atque corrupti.
            </Description>
            <CTALoginTwo src = './images/cta-logo-two.png'/>
        </CTA>
    </Container>
  )
}

export default Login
const Container  = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
    position: relative;
    height: calc(100vh - 70px);
    
    &:before{
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('./images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CTALoginOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s all ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALoginTwo = styled.img`
    width: 90%;

`