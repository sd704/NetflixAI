import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail, validatePass } from "../utils/validate"
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    // Navigate Hook to navigate to path
    // Navigate can be used where RouterProvider is in parent component
    const navigate = useNavigate()
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
        setEmailValidity(validateEmail(email.current.value))
        setPasswordValidity(validatePass(pass.current.value))
        if (!isSignInForm) {
            setNameValidity(name.current.value.trim().length > 0)
        }

        //Submit if valid
        if (!isSignInForm && isEmailValid && isPasswordValid && isNameValid) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user
                    console.log(user)

                    // Add Name
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0RN1rfgQ3wvx01TOc_5dyRGoW8SRGWTtmg&s"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        // Navigate to /browse if login success
                        navigate("/browse")
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
        if (isSignInForm && isEmailValid && isPasswordValid) {
            // Sign In
            signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // Navigate to /browse if login success
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setError(errorCode + " - " + errorMessage)
                });
        }
    }

    return (
        <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg')] bg-center bg-cover">
            {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg"
                srcset="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_small.jpg 959w"
                alt="" aria-hidden="true" /> */}
            <div className="w-full h-full bg-black/40">
                <Header />
                <form className="w-3/12 mx-auto my-48 rounded-lg p-16 text-white bg-black/80" onSubmit={(e) => e.preventDefault()}>
                    <p className="font-bold text-4xl my-8">{isSignInForm ? "Sign In" : "Sign Up"}</p>

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

                    <button className="p-2 my-4 w-full rounded-lg bg-red-600 font-bold" onClick={handleFormSubmission}>
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