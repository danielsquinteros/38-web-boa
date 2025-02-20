import { useState } from "react"
import User from "../molecules/User"
import { useEffect } from "react";

const Users = () => {
    const [loading, setLoading] = useState(false); // mientras espero 
    const [users, setUser] = useState([]) // si todo sale chido
    const [error, setError] = useState(null) // si todo sale mal


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const responseApi = await fetch('https://jsonplaceholder.typicode.com/users');
                if(responseApi.status !== 200){
                    throw new Error('Error al obtener los datos')
                    //{message:'Error al obtener los datos' }
                }
                const data = await responseApi.json();
                setUser(data);           
            } catch (error) {
                setError(`message: ${error.message}`)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if(loading === true) return <p>Cargando....</p>
    if(error !== null) return <p>Ocurrio un error: {error}</p>

  return (
    <div>
        <h1>Lista de usuarios</h1>
        {/* Forma 2 - más pro */}
        {
            users.map((user) => {
                return (
                    <User
                        key={user.id} 
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        street={user.address.street}
                        city={user.address.city}
                    />
                )
            })
        }

        {/* Forma 1 - Forma manual */}
        {/* <div style={{ border: '1px solid black', padding: '20px'}}>
            <h4>Leanne Grahamm</h4>
            <p>username: Bret</p>
            <a href="mailto:Sincere@april.biz">Sincere@april.biz</a>
            <ul>
                <li>street: Kulas Light</li>
                <li>city: Gwenborough</li>
            </ul>
        </div> */}
    </div>
  )
}

export default Users