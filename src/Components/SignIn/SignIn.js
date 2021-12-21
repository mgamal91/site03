import React from 'react'
import { Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrapper, Icon, SigninContainer, Text } from './SignInElements'

const SignIn = () => {
    return (
        <>
        <SigninContainer>
            <FormWrapper>
              <Icon to='/'>dolla</Icon>  
              <FormContent>
                  <Form action='#'>
                      <FormH1>Sign In To Your Account</FormH1>
                      <FormLabel htmlFor='mail'>Email</FormLabel>
                      <FormInput type='email' name='mail' required/>
                      <FormLabel htmlFor='pw'>Password</FormLabel>
                      <FormInput type='password' name='pw' required/>
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forgot Password</Text>
                  </Form>
              </FormContent>
            </FormWrapper>
        </SigninContainer>
            
        </>
    )
}

export default SignIn
