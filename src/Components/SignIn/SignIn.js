import React from 'react'
import { Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrapper, Icon, SigninContainer } from './SignInElements'

const SignIn = () => {
    return (
        <>
        <SigninContainer>
            <FormWrapper>
              <Icon to='/'>dolla</Icon>  
              <FormContent>
                  <Form action='#'>
                      <FormH1>Sign In To Your Account</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required/>
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required/>
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
