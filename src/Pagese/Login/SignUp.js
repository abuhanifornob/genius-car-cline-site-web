import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/images/login/login.svg"

import { FaBeer, FaFacebook, FaFacebookF, FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUserEmailAndPassword } = useContext(AuthContext);
    const handleForm = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUserEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error("error", error))



    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col grid md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl pb-4">
                    <h1 className="text-5xl font-bold text-center pt-5">Sign Up</h1>
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                        <p className='text-center text-2xl font-bold'>Or Sign Up With</p>
                        <div className='flex justify-center'>
                            <button><FaFacebookF className='mr-4 text-2xl' /></button>
                            <button><FaGoogle className='mr-4 text-2xl' /></button>
                            <button><FaGithub className='text-2xl' /></button>
                        </div>
                    </form>
                    <p className='text-center'>Don’t have a account?<Link to="/login" className='text-orange-500 text-xl font-bold'>Log In!!</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;