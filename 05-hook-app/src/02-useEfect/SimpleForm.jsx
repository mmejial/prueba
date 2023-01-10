import { useEffect,useState } from "react";

import { Message } from "./Message";


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
           // console.log('UseEffect');
        }, [] );

        
        useEffect(()=>{
           // console.log('formState Change');
        }, [formState] );

        useEffect(()=>{
           // console.log('email Change');
        }, [email] );

        


  return (
    <>
    <div>SimpleForm</div>
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
    {
        (username === 'marcos') &&<Message/>
    }
    
    </>

    
  )
}
