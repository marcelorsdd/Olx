import {
   Divider,
   Button,
   FormControl,
   InputLabel,
   OutlinedInput,
   InputAdornment,
   IconButton,
   TextField,
   Link,
   Container,
   Paper,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import OlxLogo from '../../assets/OlxLogo'
import { useState } from 'react'

const styledButton = {
   width: '100%',
   height: '48px',
   borderRadius: '24px',
   fontSize: '16px',
   textTransform: 'none',
}

const textInput = {
   width: '100%',
}

function SignIn() {
   const [values, setValues] = useState({
      password: '',
      showPassword: false,
   })

   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value })
   }

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      })
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <Container
         maxWidth={'md'}
         sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh',
            justifyContent: 'center',
         }}
      >
         <Paper
            sx={{
               width: '50%',
               padding: '32px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >

            <OlxLogo />

            <p
               style={{
                  fontSize: '20px',
                  color: 'rgb(74, 74, 74)'
               }}
            >
               Acesse a sua conta
            </p>

            <Button
               variant="contained"
               sx={{
                  ...styledButton,
                  backgroundColor: 'rgb(58, 89, 152)',
                  '&:hover': { opacity: '0.9' },
               }}
            >
               Entrar com o Facebook
            </Button>

            <Button
               variant="contained"
               sx={{
                  ...styledButton,
                  backgroundColor: 'rgb(66, 133, 244)',
                  marginTop: '8px',
                  '&:hover': { opacity: '0.9' },
               }}
            >
               Entrar com o Google
            </Button>

            <Divider
               sx={{
                  marginTop: '25px',
                  marginBottom: '25px',
                  width: '100%',
                  color: 'rgb(137, 137, 137)',
               }}
            >
               ou
            </Divider>

            <form
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
               }}
            >
               <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  sx={{ textInput }}
               />
               <FormControl
                  sx={{ ...textInput, marginTop: '8px' }}
                  variant="outlined"
               >
                  <InputLabel htmlFor="outlined-adornment-password">
                     Senha
                  </InputLabel>
                  <OutlinedInput
                     id="outlined-adornment-password"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.password}
                     onChange={handleChange('password')}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                           >
                              {values.showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                     label="Password"
                  />
               </FormControl>

               <Button
                  variant="contained"
                  type="submit"
                  sx={{
                     ...styledButton,
                     marginTop: '8px',
                     backgroundColor: 'rgb(247, 131, 35)',
                  }}
               >
                  Entrar
               </Button>

               <Divider
                  sx={{
                     marginTop: '25px',
                     marginBottom: '25px',
                     width: '100%',
                     color: 'rgb(137, 137, 137)',
                  }}
               />

               <p
                  style={{
                     textAlign: 'center',
                  }}
               >
                  Não tem uma conta?{' '}
                  <Link
                     href="#"
                     underline="none"
                     sx={{ color: 'rgb(110, 10, 214)' }}
                  >
                     Cadastre-se
                  </Link>
               </p>
            </form>
         </Paper>
      </Container>
   )
}

export default SignIn
