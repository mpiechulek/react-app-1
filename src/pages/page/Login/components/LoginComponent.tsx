import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import image_1 from './../../../../assets/images/1509534.jpeg'

const LoginComponent = () => {

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const onSubmit = (data: any) => {

        setIsLoggedIn(!isLoggedIn);

    }

    if (isLoggedIn) {

        return <Redirect to='/user' />

    }

    return (

        <>
            <section className='main-content-box'>

                <img className='image-position-login' src={image_1} alt="img_abstract" />

                <div className='login-form-wrapper'>

                    <h2 className='header-main-2 login-page-margin-bottom-2'>Login</h2>

                    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>

                        <label className='login-form-text login-page-margin-bottom-1'>E-mail</label>

                        <input
                            className='login-input login-form-text '
                            type="email"
                            placeholder='email'
                            {...register(
                                "email",
                                {
                                    required: 'Email address is required',
                                    pattern: {
                                        value: /\S+@\S+.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                }
                            )}
                        />

                        <label className='login-form-text login-page-margin-bottom-1'>Password</label>

                        <input
                            className='login-input login-form-text '
                            type="password"
                            placeholder='password'
                            {...register(
                                "password", {
                                required: 'Password required',
                                minLength: {
                                    value: 8,
                                    message: 'The password is to short, it should be min. 8 characters'
                                }
                            })}
                        />

                        <button

                            className='btn
                                btn--form-login
                                login-form-text
                                login-form-text--button-text-color
                                login-page-margin-bottom-1 '

                            type="submit"

                            disabled={isValid}

                        >

                            Login

                         </button>

                        <p>{isValid}</p>

                        {errors.password &&
                            <p className='login-form-text login-form-text--alert-text-color'>
                                {errors.password.message}
                            </p>
                        }

                        {errors.email &&
                            <p className='login-form-text login-form-text--alert-text-color'>
                                {errors.email.message}
                            </p>
                        }

                    </form>

                </div>

            </section>

        </>
    )
}

export default LoginComponent
