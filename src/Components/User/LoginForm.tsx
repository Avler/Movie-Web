import "./form.scss"
import {useState} from "react"
import supabase from "../../supabase"
import logo from "../../assets/logo.png"

const LoginForm = ({reg , setReg}:any) => {

    const [regPanel , setRegPanel] = useState<boolean>(false)
    const [formData , setFormData]= useState({
        name:"" ,email:"",password:""
    })

    const handleChange = (event:any) => {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        }) 
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
       
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
          })
       if (error) throw error
    }

    const showRegisterForm = (item:boolean)=> {
        setRegPanel(item)
    }

    return(
        <>
        {regPanel ? 
          <form onSubmit={handleSubmit} className="cont-form">
            <img src={logo} alt="logo" className="logo"/>
            <div className="input-cont">
                <h2 className="user-panel-title">Fill All Fields</h2>
                <input name="name" placeholder="Name" className="user-panel-input" onChange={handleChange}/>
                <input name="email" placeholder="E-mail" className="user-panel-input" onChange={handleChange}/>
                <input name="password" type="password" placeholder="Password"  className="user-panel-input" onChange={handleChange}/>
            </div>
            <div className="user-panel-btn-cont">
                <button className="user-panel-btn" onClick={() => showRegisterForm(false)}>Back to Login</button>
                <button className="user-panel-btn" type="submit">Register</button>
            </div>
        </form> 
        : 
        <form onSubmit={handleSubmit} className="cont-form">
            <img src={logo} alt="logo" className="logo"/>
            <div>
                <h2 className="user-panel-title">E-mail</h2>
                <input type="e-mail" placeholder="Example@gmail.com" className="user-panel-input" onChange={handleChange} name="email"/>
                <h2 className="user-panel-title">Password</h2>
                <input type="password" placeholder="Password" className="user-panel-input" onChange={handleChange} name="password"/>
            </div>
            <div className="user-panel-btn-cont">
                <button className="user-panel-btn" type="submit">Login</button>
                <button className="user-panel-btn" onClick={() => showRegisterForm(true)}>Register</button>
            </div>
        </form>
    }
            
        </>
    )
}

export default LoginForm