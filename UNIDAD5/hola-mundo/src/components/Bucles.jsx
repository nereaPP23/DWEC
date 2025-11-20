const Bucles = () => {

    const personajes = [
        {nombre: 'Juan', edad: 20},
        {nombre: 'Pedro', edad: 25},
        {nombre: 'Maria', edad: 30}
    ]


    return (
        <>
            <h1>Personajes</h1>
            <ul>
                {
                    personajes.map((p) => {
                        return (
                            <li key={p.nombre}>
                                <b>{p.nombre}</b>: {p.edad} años
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Bucles;