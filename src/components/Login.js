import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail, validatePass } from "../utils/validate"

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
    const [isEmailValid, setEmailValidity] = useState(true)
    const [isPasswordValid, setPasswordValidity] = useState(true)
    const [isNameValid, setNameValidity] = useState(true)
    const email = useRef(null)
    const pass = useRef(null)
    const name = useRef(null)

    const toggleSignUpForm = () => {
        email.current.value = null
        pass.current.value = null
        setEmailValidity(true)
        setPasswordValidity(true)
        setNameValidity(true)
        setSignInForm(!isSignInForm)
    }

    const handleFormSubmission = () => {
        // Validate form data
        setEmailValidity(validateEmail(email.current.value))
        setPasswordValidity(validatePass(pass.current.value))
        if (!isSignInForm) {
            setNameValidity(name.current.value.trim().length > 0)
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
                    {!isSignInForm && <input ref={name} type="text" placeholder="Username" className="p-4 my-4 w-full rounded-lg bg-gray-800/30 border border-gray-800" />}
                    {!isSignInForm && !isNameValid && <p className="text-red-600 text-sm mb-2">⨂ Please enter a username.</p>}
                    <input ref={email} type="text" placeholder="Email" className={`p-4 my-4 w-full rounded-lg bg-gray-800/30 border ${!isEmailValid ? 'border-red-600' : 'border-gray-800'}`} />
                    {!isEmailValid && <p className="text-red-600 text-sm mb-2">⨂ Please enter a valid email or mobile number.</p>}
                    <input ref={pass} type="password" placeholder="Password" className={`p-4 my-4 w-full rounded-lg bg-gray-800/30 border ${!isPasswordValid ? 'border-red-600' : 'border-gray-800'}`} />
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