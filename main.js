document.getElementById("buscar-btn").addEventListener("click", buscarUsuario);
async function buscarUsuario() {
    const username = document.getElementById('github-username').value
    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                alert('Usuario no encontrado')
                document.getElementById("user-info").style.display = 'none'
            }
            const data = await response.json()
            document.getElementById("user-name").innerText = `Nombre: ${data.name}`
            document.getElementById("user-repos").innerText = `Número de repositorios: ${data.public_repos}`
            document.getElementById("user-avatar").src = data.avatar_url;


            document.getElementById("user-info").style.display = 'block'

        } catch (error) {
            console.error("Error al buscar el usuario:", error)
        }
    } else {
        alert("Por favor ingrese un nombre de usuario");
        document.getElementById("user-info").style.display = 'none'
    }
}