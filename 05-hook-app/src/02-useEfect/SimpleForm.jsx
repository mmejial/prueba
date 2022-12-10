import { useEffect } from "react";
import { useState } from "react"


export const SimpleForm = () => {

    const [formState, setFormState]=useState(
        {
            username:'marco',
            email: 'marco@correo.com'
        }
    )

        const {username,email} = formState;

        const onInputChange = ({target})=>{
            const {name, value}=target;
            setFormState({
                ...formState,
                [name]:value
            })
        }

        useEffect(()=>{
            console.log('UseEffect');
        })



  return (
    <>
    <div>SImpleForm</div>
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

    </>


  )
}
