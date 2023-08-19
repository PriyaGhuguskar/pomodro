
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useHistory } from "react-router-dom";
import { app } from "../firebase"
import React, { useState } from "react"


const provider = new GoogleAuthProvider()

const auth = getAuth(app)

const SignIn = () => {
    const history = useHistory();



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
    }
    const signupUser = async (e) => {
        e.preventDefault();
        try {
            let response = await createUserWithEmailAndPassword(auth, email, password)
            alert('Succesfully signIn')
            console.log(response)
            history.push('/timer');
        } catch (error) {
            console.error(error);
        }
    };

    const toLoginPage = () => {

        history.push('/');

    }
    return (
        <>
            <div className=" w-96 h-fit flex flex-col items-center justify-center gap-4
             pt-11 pr-8 pb-5 pl-8 bg-slate-200 rounded-xl ">
                <div className=" flex flex-col items-center justify-center gap-3">
                    <p className=" m-0 font-bold text-xl text-gray-800"> Sign in </p>
                    <span className=" text-base max-w-full text-center leading-4 text-slate-900"> Get started with app,
                        create an account
                        <br />and enjoy the experience</span>
                </div>
                <br />

                <div className=" w-full h-fit relative flex flex-col gap-2">
                    <label className=" text-sm text-slate-500 font-semibold">Email</label>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="34" viewBox="0 0 512 512" className=" w-5 absolute z-50 left-3 bottom-1">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <input
                        className=" w-auto h-10 py-0 pl-10 rounded-lg outline-none border-x-cyan-950 border-solid border-2"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@mail.com"
                        value={email}
                        type="email"
                        required
                    />
                </div>


                <div className=" w-full h-fit relative flex flex-col gap-2">
                    <label className=" text-sm text-slate-500 font-semibold">Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="34" viewBox="0 0 448 512" className=" w-5 absolute z-50 left-3 bottom-1">
                        <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                    </svg>
                    <input
                        className=" w-auto h-10 py-0 pl-10 rounded-lg outline-none border-x-cyan-950 border-solid border-2"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                        type="password"
                        required
                    />
                </div>


                <button onClick={signupUser} type="button" className=" w-full h-10 border-none bg-blue-600 rounded-md outline-none text-white cursor-pointer">
                    <span>Sign In</span>
                </button>
                <div>OR</div>
                <button onClick={signWithGoogle} type="button" className=" w-full h-10 flex items-center justify-center gap-3 bg-slate-200 rounded-md outline-none text-slate-900 border-solid border-slate-300 border-2">
                    <span>Sign In with Google</span>
                </button>

                <button type="button"
                    onClick={toLoginPage}
                    className=" w-full h-10 flex items-center justify-center bg-slate-200 rounded-md outline-none text-slate-900 ">
                    <span>Login here</span>
                </button>
            </div>
            {/* <button onClick={signupUser}>Create User</button>
        <button onClick={signWithGoogle}>Sign In with Google</button> */}
        </>
    )
}

export default SignIn