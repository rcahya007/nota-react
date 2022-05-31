import React from 'react'
import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/solid';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';


const LoginForm = () => {
        const { register, handleSubmit, formState: { errors }, } = useForm()

        const navigate = useNavigate();
        
        const onSubmit = async (data, e) => {
            e.preventDefault()
            console.log(data);
            await axios.post('http://localhost:5000/login',{name: data.name,passoword: data.passoword});
            console.
            navigate('/dashboard')
        };


        return (
            <div>
                <title>LOGIN PAGE | Kodehack</title>
                <div className='bg-gradient-to-tl from-gray-400 via-gray-900 to-black'>
                    <div className='flex items-center justify-center min-h-screen'>
                        <section className="text-gray-600 body-font w-4/5">
                            <div className="container px-5 py-24 mx-auto items-center justify-center flex">
                            <form action="">
                                <div className="sm:w-auto border-r-2 flex flex-col items-center justify-center">
                                    <div className='flex leading-10 bg-white rounded-md mb-2 mx-16'>
                                        <p className='p-2'>
                                        <UserCircleIcon className="w-8 h-8 text-black" />
                                        </p>
                                        <input type="text" className='rounded-r-md text-lg ml-2 pl-2 focus:outline-none' placeholder='Username' name='username' {...register("name",{ required: true })}/>
                                    </div>
                                    <div className='text-white mb-2' >
                                        {errors.name && <p>Username Required</p>}
                                    </div>
                                    <div className='flex blog leading-10 bg-white rounded-md mb-2'>
                                        <p className='p-2'>
                                        <LockClosedIcon className='w-8 h-8 text-black' />
                                        </p>
                                        <input type="password" className='rounded-r-md text-lg ml-2 pl-2 focus:outline-none' placeholder='Password' name='password' {...register("password",{ required: true })} />
                                    </div>
                                    <div className='text-white mb-2' >
                                        {errors.password && <p>Password Required</p>}
                                    </div>
                                    <div className='mt-5'>
                                        <Link to="/dashboard">
                                            <button className='px-8 py-2 bg-white text-l text-black rounded-lg font-sans font-bold hover:bg-slate-700 hover:text-white' onClick={handleSubmit(onSubmit)}>
                                                MASUK
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                                <div className="px-4 mx-5">
                                <div className="h-auto w-auto flex">
                                    <img alt="content" className="object-center h-52 w-52 " src="images/kodehack.png"/>
                                    <div className='text-white flex justify-center items-center'>
                                    <p className='font-bold text-5xl ml-7'>KODEHACK</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }


export default LoginForm;