import { useContext, useState } from "react"
import Heading from "../common/Heading"
import './authContent.scss'
import { toast } from 'react-toastify'
import { userExistsInDb } from "../../store/helpers"
import { globalContext } from "../../store"



export default function Login(props) {
    const state = useContext(globalContext)

    const [loginState, setLoginState] = useState({
        username : "",
        password: "",
    })
    const [formErrors, setFormErrors] = useState({
        username: "",
        password:"",
    })
    
    function handleChange(e) {
        const { name, value } = e.target
        validate(e.target)
        setLoginState({...loginState, [name]: value })
    }

        function validate({ name, value }) {
            //1-step create pattern
            const usernamePattern = /^[a-zA-Z0-9_]{1,10}$/
            const passwordPattern = /^[a-zA-Z0-9_$&]{5,}$/
            //2-step check if the value matches the pattern
            //3-step create an error message
            let error_msg = ''
            if(value.length > 0) {
                if(name == 'username') {
                    if(!usernamePattern.test(value)) {
                        error_msg = "Symbols are not allowed.Length 1-10"
                    }
                }else if(name == 'password') {
                    if(value.length >= 5 && !passwordPattern.test(value)) {
                        error_msg = "Symbols are not allowed except (_&$). Length 5+"
                    }
                }else{
                    throw new Error('Unknown input field')
                }
            }
            setFormErrors({...formErrors, [name]: error_msg})

        }

    async function handleSubmit(e) {
        e.preventDefault()
        const passwordPattern = /^[a-zA-Z0-9_$&]{5,}$/
        let user = {
            username : loginState.username,
            password : loginState.password
        }
        if(user.username.length == 0 || user.password.length == 0) {
            toast.error("Please, fill in all fields")
            return
        }else if (!passwordPattern.test(user.password)) {
            setFormErrors({ ...formErrors, ['password']: "Symbols are not allowed except (&$_)"})
            return
        } else{
            if(userExistsInDb(user)) {
                toast.success("You have successfully loged in", {theme: "dark"})
                state.dispatch({ type: "SET_USER", payload: user })
                props.closeModal()
            }else{
                toast.error("User not found with provided credentials")
            }

        }

        setLoginState({
            username : "",
            password : ""
        })
       
        
    }

    async function loginToAccount(e){

    }
  return (
    <div className="auth-content-wrapper">
        <Heading size={1.2}>Login</Heading>
        <form onSubmit={handleSubmit}>
            
            <div className="form-control">
                <label htmlFor="email">Username or e-mail</label>
                <input type="name" id="name" name="username" placeholder="username or e-mail" onChange={handleChange} className={formErrors.username.length > 0? 'error' : null}/>
                {
                    formErrors.username.length > 0 ?
                    <p className="error">{setFormErrors.username}</p> : null
                }
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} className={formErrors.password.length > 0 ? 'error' : null}/>
                {
                    formErrors.password.length > 0 ?
                    <p className="error">{setFormErrors.password}</p> : null
                }
            </div>
            <div className="form-control">
                <button className="warning-btn">Login</button>
            </div>
        </form>
    </div>
  )
}
