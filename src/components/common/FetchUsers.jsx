import { useContext,useEffect } from "react"
import { globalContext } from "../../store"
import { useNavigate } from "react-router-dom"

export default function FetchUsers(Component) {
  return function AuthenticatedUser(props) {
    const state = useContext(globalContext)
    const navigate = useNavigate()

        useEffect(() => {
            // if (localStorage.getItem("loged-in-user") == null) {
            //     sendToAuth()
            //     console.clear()
            //     return
            // }

            let user = localStorage.getItem("loged-in-user")
            if(user != null) {
                state.dispatch({ type:"SET_USER", payload:JSON.parse(user) })
            }
        },[navigate])
        return <Component { ...props }/>
  }
}
