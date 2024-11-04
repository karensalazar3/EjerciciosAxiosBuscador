async function buscarUsuario() {
    const username = document.getElementById('github-username').value

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                console.error('Usuario no encontrado')
                return;
            }
            const data = await response.json()
            console.log("Nombre:", data.name)
            console.log("Número de repositorios:", data.public_repos)
            console.log("Avatar:")
            console.log("%c ", `font-size: 100px; background: url(${data.avatar_url}) no-repeat; background-size: contain;`)

        } catch (error) {
            console.error("Error al buscar el usuario:", error)
        }
    } else {
        console.error("Por favor ingrese un nombre de usuario")
    }
}
