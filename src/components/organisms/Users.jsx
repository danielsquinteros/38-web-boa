import { useState } from "react"

const Users = () => {
    const [users, setUser] = useState(
        [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    city: "Gwenborough",
                }
            }
        ])


  return (
    <div>
        <h1>Lista de usuarios</h1>
        {/* Forma 2 - más pro */}
        {
            users.map((user) => {
                return (
                <div key={user.id} style={{ border: '1px solid black', padding: '20px'}}>
                    <h4>{user.name}</h4>
                    <p>username: {user.username}</p>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                    <ul>
                        <li>street: {user.address.street}</li>
                        <li>city: {user.address.city}</li>
                    </ul>
                </div>
                )
            })
        }

        {/* <div style={{ border: '1px solid black', padding: '20px'}}>
            <h4>Leanne Graham</h4>
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