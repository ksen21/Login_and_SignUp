










import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {


    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        pass: "",
    })



    const [errorMsg, seterrorMsg] = useState('');
    const [btnSubmitDisable, setbtnSubmitDisable] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    const btnSubmit = () => {
        console.log(values);
        if (!values.email || !values.pass) {
            seterrorMsg("Fill all fileds")
            return;
        }
        setbtnSubmitDisable(true);

        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setbtnSubmitDisable(false);

                navigate("/");
            })
            .catch((error) => {
                setbtnSubmitDisable(false);
                seterrorMsg(error.message);
            });

        

        // createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
        //     setbtnSubmitDisable(false)
        //     const user = res.user;
        //     await updateProfile(user, {
        //         displayName: values.name
        //     });
        //     console.log(res);
        //     navigate('/');
        // })
        //     .catch((error) => {

        //         setbtnSubmitDisable(false)
        //         console.log(error, "This is errorsss");
        //         seterrorMsg(error.message);
        //     });

    }


    return (
        <div className='main flex justify-center items-center'>
            <div className='sm:w-[20rem] sm:bg-slate-300  md:w-[35rem] lg:w-[25rem] sm:h-[25rem] sm:mt-24 md:h-[20rem] lg:h-[27rem] lg:bg-slate-300 md:bg-orange-600 text-white rounded-lg flex'>
                <form action="" onSubmit={handleSubmit} className='m-auto'>

                    <div className='flex flex-col gap-4 justify-center mt-3 '>
                        <label htmlFor="" className='text-black font-serif text-5xl mb-2 text-center'>Login</label>


                        <input type="text" placeholder='Email' className='rounded-lg text-center sm:w-[15rem]  lg:w-[20rem] p-2 text-black outline-none' onChange={(e)=> setValues((prev) => ({...prev,email:e.target.value}))} />

                        <input type="password" placeholder='Password' className='rounded-lg text-center sm:w-[15rem] lg:w-[20rem] text-black p-2 outline-none' onChange={(e)=> setValues((prev) => ({...prev,pass:e.target.value}))} />

                        <div className='buttons flex justify-center flex-col items-center '>

                            <b className='text-lg text-center  text-red-500'>{errorMsg}</b>
                            <button onClick={btnSubmit} type='submit' className='bg-indigo-600 w-[5rem] p-2  rounded-md ' disabled={btnSubmitDisable}>Login</button>

                            <div className='loginRegisterText flex flex-col mt-4'>
                                <span className='text-black'>Not Register <Link className='text-blue-600 ' to="/signup">Sign Up</Link>
                                </span>
                                <span className='text-black text-center'>forgot <span className='text-blue-600 underline'>password</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

