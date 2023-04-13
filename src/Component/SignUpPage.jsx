




import React,{useState} from 'react'
import '../index.css';
import { useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUpPage() {

  
    const navigate = useNavigate();

    const [values,setValues] = useState({
        name:"",
        email:"",
        pass:"",
    })



    const [errorMsg,seterrorMsg]= useState('');
    const [btnSubmitDisable,setbtnSubmitDisable]= useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
     
      }
    const btnSubmit = () => {
        console.log(values);
        if(!values.name|| !values.email|| !values.pass){
            seterrorMsg("Fill all fileds")
            return;
        }
        setbtnSubmitDisable(true)
        seterrorMsg('');

        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setbtnSubmitDisable(false)
            const user = res.user;
            await updateProfile(user,{
                displayName: values.name
            });
            console.log(res);
            navigate('/');
        })
        .catch((error)=>{

            setbtnSubmitDisable(false)
            console.log(error,"This is errorsss");
            seterrorMsg(error.message);
        });     
     
      }

    return (
        <div className='main flex justify-center items-center'>
            <div className='sm:w-[20rem] sm:bg-slate-300  md:w-[35rem] lg:w-[25rem] sm:h-[25rem] sm:mt-24 md:h-[20rem] lg:h-[27rem] lg:bg-slate-300 md:bg-orange-600 text-white rounded-lg flex'>
                <form action="POST" onSubmit={handleSubmit} className='m-auto'>
                    
                    <div className='flex flex-col gap-4 justify-center mt-3 '>
                    <label htmlFor="" className='text-black font-serif text-5xl mb-2 text-center'>Sign Up </label>
                        <input type="text" placeholder='Name' className=' outline-none rounded-lg sm:w-[15rem] lg:w-[20rem] text-black text-center p-2' onChange={(e)=> setValues((prev) => ({...prev,name:e.target.value}))}/>

                        <input type="text" placeholder='Email' className='rounded-lg text-center sm:w-[15rem]  lg:w-[20rem] p-2 text-black outline-none'onChange={(e)=> setValues((prev) => ({...prev,email:e.target.value}))} />


                        <input type="password" placeholder='Password' className='rounded-lg text-center sm:w-[15rem] lg:w-[20rem] text-black p-2 outline-none' onChange={(e)=> setValues((prev) => ({...prev,pass:e.target.value}))} />

                        <b className='text-lg text-center  text-red-500'>{errorMsg}</b>

                        <div className='buttons flex justify-center flex-col items-center '>
                            <button onClick={btnSubmit} type='submit' className='bg-indigo-600 w-[5rem] p-2 rounded-md disabled:bg-indigo-400' disabled={btnSubmitDisable}>Sign Up</button>
                        
                            <div className='loginRegisterText flex flex-col mt-4'>
                                <span className='text-black'>Already Register <Link className='text-blue-600 underline' to="/login">Login</Link>
                                </span>
                            
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
