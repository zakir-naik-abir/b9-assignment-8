import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Signin = () => {

  const [signinError, setSigninError] = useState('');
  const [signinSuccess, setSigninSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const emailRef = useState(null)

  const handleSignin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password);

    // reset error
    setSigninError('')
    // reset successful
    setSigninSuccess('')

    // add validation
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user)
      if(result.user.emailVerified){
        setSigninSuccess('Log In Successfully')
        return toast.success('Log In Successfully')
      }
      else{
        alert('Please verify your email address.')
      }
    })
    .catch((error) => {
      console.error(error)
      setSigninError("Email or password incorrect")
      return toast.error("Email or password incorrect")
    });
  }
  
  const handleForgetpassword = () =>{
    const email = emailRef.current.value;
    if(!email){
      console.log('Please provide an email', emailRef.current.value);
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log('Please write a valid email');
      return;
    }

    // send validation email
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      return toast.success('Reset successful. Please check your email.')
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <div className="items-center mt-20">
      <Helmet>
        <title>Book Vibe | SignIn</title>
      </Helmet>
      <div className="mx-auto md:h-1/2 py-6 max-w-[420px] border bg-gray-400 rounded-lg">
        <h3 className='mb-5 text-center border-b-2 mx-7 text-gray-800'>Login Now</h3>
        <form className=' m-7' onSubmit={handleSignin}>
          {/* <input className='rounded-lg mb-4 py-2 w-full  text-center ' type="text" name='text' id='text' placeholder='Enter your Full Name' required />
          <br /> */}
          <input className=' rounded-lg mb-4 py-2 w-full  text-center ' type="email" name='email' ref={emailRef} id='email' placeholder='Enter your valid Email' required />
          <br />
          {/* <input className='rounded-lg mb-4 py-2 w-full  text-center ' type="number" name='number' id='number' placeholder='Enter your Number' required />
          <br /> */}
          <div className="relative items-center mb-2">
            <input className=' rounded-lg py-2 w-full text-center' type={showPassword ? "password" : "text"} name='password' id='password' placeholder='Create a Password' required/>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-2 right-4 text-2xl">
              {
                showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoEye></IoEye>
              }
            </span>
          </div>
          <label className="label">
            <a onClick={handleForgetpassword} className="label-text-alt link text-gray-800 " href="#">Forgot Password</a>
          </label>
          <br />
          <input className=' py-2 px-4 w-full text-center btn btn-secondary' type="submit" name="submit" id="submit" />

          <div className="mt-3">
            {
              signinError && <p className="text-red-500 font-semibold">{signinError}</p>
            }
            {
              signinSuccess && <p className="text-green-800 font-semibold">{signinSuccess}</p>
            }
          </div>
          <h5 className="text-gray-800">New to this website ? Please <Link to={"/signup"} className="text-blue-800 font-semibold border-b-2">Sign Up </Link></h5>
        </form>
      </div>
    </div>
  )
}

export default Signin;