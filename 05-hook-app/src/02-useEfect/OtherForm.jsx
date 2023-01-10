import { useEffect } from "react";
import { useForm } from "../hooks/useForm";




export const OtherForm = () => {

    const {formState, onInputChange,username, email,password,onResetForm}=useForm(
        {
            username:'',
            email: '',
            password:''
            
        }
    )
    
        
/* const {username, email,password}=formState */

  return (
    <>
    <div>Formulario con Curstom Hook</div>
    <hr />

    <input
    type="text"
    className="form-control"
    placeholder="UserName"
    name="username"
    value={username}
    onChange={
        onInputChange
    }
    
    />
    <hr />
    <input
    type="email"
    className="form-control mt-2"
    placeholder="User@email.com"
    name="email"
    value={email}
    onChange={
        onInputChange
    }
    />
    <input
    type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={
        onInputChange
    }
    />
    <button onClick={onResetForm} className="btn btn-primary mt-2 p-2">Reset</button>
    </>

    
  )
}
