


const Signin = () => {

  const handleSignin = e  =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log( email, password, accepted);
  }

  return (
    <div className="items-center mt-20">
      <div className="mx-auto md:h-1/2 py-6 max-w-[400px] border bg-gray-400 rounded-lg">
        <h3 className='mb-5 text-center border-b-2 mx-7'>Registration Now</h3>
        <form className=' m-7' onSubmit={handleSignin}>
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
          <br />
          <input className=' py-2 px-4 w-full text-center btn btn-secondary' type="submit" name="submit" id="submit" />

          {/* <div className="mt-5">
            {
              signinError && <p className="text-red-500 font-semibold">{signinError}</p>
            }
            {
              signinSuccess && <p className="text-green-800 font-semibold">{signinSuccess}</p>
            }
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Signin;