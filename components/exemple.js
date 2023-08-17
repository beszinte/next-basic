export const Exemple = () => {
    /* ici je vais récupérer notre clé jwt-token*/
    const token = localStorage.getItem("jwt-token");
    console.log('token', token)

    // return <div>{JSON.stringify(token)}</div>
    return <div>{token}</div>
}
