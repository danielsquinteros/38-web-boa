import { useEffect, useState } from "react"

const Issues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const getIssues = async () => {
        try {
            setLoading(true)
            const request = await fetch('https://api.github.com/repos/facebook/react/issues');
            const data = await request.json();
            if(request.status !== 200){
                throw new Error ('Sucedio un error')
            }
            setIssues(data);
        } catch (error) {
            console.log('-->', error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getIssues()
    }, [])

    if(loading === true){
        return <p>cargando....</p>
    }

    if(error !== null){
        return <p>Ocurrio un error amigo u_U</p>
    }

    return (
        <>
        
           {
                issues.map((issue) => {
                    return (
                        <div key={issue.id} style={{border: '1px solid black'}}>
                            <p>id: {issue.id}</p>
                            <a href={issue.html_url} target="_blank">
                                <h6>{issue.title}</h6>
                            </a>
                            <p>Usuario que abrio el tema: {issue.user.login}</p>
                            {
                                issue.labels.map((label) => {
                                    return (<div key={label.id} style={{border: '1px solid black', borderRadius: '20px', 'backgroundColor': 'gray', display: 'inline-block'}}>
                                        <p>{label.name}</p>
                                    </div>)
                                })
                            }
                        </div>
                    )
                })
           } 
        </>
    )
}

export default Issues