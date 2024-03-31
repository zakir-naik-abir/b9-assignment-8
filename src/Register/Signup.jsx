import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";



const Signup = () => {

  const [signupError, setSignupError] = useState('')
  const [signupSuccess, setSignupSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  // submit
  const handleRegister = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log( email, password, accepted);

    if(password.length < 6){
      setSignupError('Password should be at least 6 characters');
      return toast.done('Password should be at least 6 characters');
    }
    else if(!/[A-Z]/.test(password)){
      setSignupError('Your password should have at least one upper case characters.')
      return
    }
    else if(!accepted){
      setSignupError('Please accept our terms and conditions!')
      return
    }


    // reset error
    setSignupError('');
    // reset success
    setSignupSuccess('');

    // sign up with email
    createUserWithEmailAndPassword
    (auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSignupSuccess('Registration Successful')
        return toast.success('Registration Successful')
        // ...
      })
      .catch((error) => {
        console.log(error)
        setSignupError("Already Registered")
        return toast.error("Already Registered")
      });
  }

  return (
    <div className="items-center mt-20">
      <div className="mx-auto md:h-1/2 py-6 max-w-[400px] border bg-gray-400 rounded-lg">
        <h3 className='mb-5 text-center border-b-2 mx-7'>Registration Now</h3>
        <form className=' m-7' onSubmit={handleRegister}>
          {/* <input className='rounded-lg mb-4 py-2 w-full  text-center ' type="text" name='text' id='text' placeholder='Enter your Full Name' required />
          <br /> */}
          <input className=' rounded-lg mb-4 py-2 w-full  text-center ' type="email" name='email' id='email' placeholder='Enter your valid Email' required />
          <br />
          {/* <input className='rounded-lg mb-4 py-2 w-full  text-center ' type="number" name='number' id='number' placeholder='Enter your Number' required />
          <br /> */}
          <div className="relative items-center">
            <input className=' rounded-lg mb-5 py-2 w-full text-center' type={showPassword ? "password" : "text"} name='password' id='password' placeholder='Create a Password' required/>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-2 right-4 text-2xl">
              {
                showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoEye></IoEye>
              }
            </span>
          </div>
          <div className="">
            <input type="checkbox" name="terms" id="terms"  />
            <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
          </div>
          <br />
          <input className=' py-2 px-4 w-full text-center btn btn-secondary' type="submit" name="submit" id="submit" />

          <div className="mt-5">
            {
              signupError && <p className="text-red-500 font-semibold">{signupError}</p>
            }
            {
              signupSuccess && <p className="text-green-800 font-semibold">{signupSuccess}</p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;