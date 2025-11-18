import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail, validatePass } from "../utils/validate"
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { DP, BACKDROP } from "../utils/constants"

const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setSignInForm] = useState(true)
    const [isEmailValid, setEmailValidity] = useState(true)
    const [isPasswordValid, setPasswordValidity] = useState(true)
    const [isNameValid, setNameValidity] = useState(true)
    const [signingError, setError] = useState(null)

    const email = useRef(null)
    const pass = useRef(null)
    const name = useRef(null)

    const toggleSignUpForm = () => {
        // Function to toggle between Sign In state and Sign Up state
        // Clear form data
        email.current.value = null
        pass.current.value = null
        setEmailValidity(true)
        setPasswordValidity(true)
        setNameValidity(true)
        setError(null)
        setSignInForm(!isSignInForm)
    }

    const handleFormSubmission = () => {
        // Validate form data
        const emailValid = validateEmail(email.current.value)
        const passwordValid = validatePass(pass.current.value)
        const nameValid = !isSignInForm && name.current.value.trim().length > 0
        setEmailValidity(emailValid)
        setPasswordValidity(passwordValid)
        if (!isSignInForm) {
            setNameValidity(nameValid)
        }

        //Submit if valid
        if (!isSignInForm && emailValid && passwordValid && nameValid) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    // Signed up 
                    // const user = userCredential.user

                    // Add Name
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: DP
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        // Navigate to /browse if login success
                    }).catch((error) => {
                        setError(error)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setError(errorCode + " - " + errorMessage)
                });
        }
        if (isSignInForm && emailValid && passwordValid) {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    // Navigate to /browse if login success
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setError(errorCode + " - " + errorMessage)
                });
        }
    }

    return (
        <div style={{ backgroundImage: `url(${BACKDROP})` }} className="w-screen h-screen bg-center bg-cover">
            <div className="w-full h-full bg-black/40 md:pt-64 lg:pt-80">
                <Header />
                <form className="w-11/12 md:w-6/12 lg:w-3/12 mx-auto rounded-lg p-5 md:p-8 lg:p-16 mt-32 md:mt-0 text-white bg-black/80 text-sm md:text-base" onSubmit={(e) => e.preventDefault()}>
                    <p className="font-bold text-2xl md:text-4xl my-8">{isSignInForm ? "Sign In" : "Sign Up"}</p>

                    {/* Show Sign In Error if any */}
                    {signingError !== null && <p className="text-red-600 text-sm mb-2">{signingError}</p>}

                    {/* Show Username Input Box if its Sign Up form */}
                    {!isSignInForm && <input ref={name} type="text" placeholder="Username" className="p-4 my-4 w-full rounded-lg bg-gray-800/30 border border-gray-800" />}

                    {/* Show error if Username field empty */}
                    {!isSignInForm && !isNameValid && <p className="text-red-600 text-sm mb-2">⨂ Please enter a username.</p>}

                    <input ref={email} type="text" placeholder="Email" className={`p-4 my-4 w-full rounded-lg bg-gray-800/30 border ${!isEmailValid ? 'border-red-600' : 'border-gray-800'}`} />

                    {/* Email Error */}
                    {!isEmailValid && <p className="text-red-600 text-sm mb-2">⨂ Please enter a valid email.</p>}

                    <input ref={pass} type="password" placeholder="Password" className={`p-4 my-4 w-full rounded-lg bg-gray-800/30 border ${!isPasswordValid ? 'border-red-600' : 'border-gray-800'}`} />

                    {/* Password Error */}
                    {!isPasswordValid && <p className="text-red-600 text-sm mb-2">⨂ Your password must be 8-60 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.</p>}

                    <button className="p-2 my-4 w-full rounded-lg bg-red-600 active:bg-red-800 font-bold" onClick={handleFormSubmission}>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="my-4 cursor-pointer" onClick={toggleSignUpForm}>
                        {isSignInForm ? "New to Netflix? " : "Already registered? "}
                        <span className="font-bold text-red-600">
                            {isSignInForm ? "Sign up now." : "Sign in now."}
                        </span>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Login