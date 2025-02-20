/* eslint-disable react/prop-types */

const User = (props) => {
    const { id, name, username, email, city, street } = props
  return (
    <div key={id} style={{ border: '1px solid black', padding: '20px'}}>
        <h4>{name}</h4>
        <p>username: {username}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <ul>
            <li>street: {street}</li>
            <li>city: {city}</li>
        </ul>
    </div>
  )
}

export default User