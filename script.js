
//Programar una función IIFE para ser invocada al cargar nuestra página. (5 Puntos)
(async function() {
    const api = 'https://randomuser.me/api/?results=3'; 

    //Programar la petición a la API usando async - await y mostrar el resultado en html utilizando etiquetas del tipo párrafo una bajo la otra.(5 Puntos)

    try {
        const response = await fetch(api);
        const data = await response.json();
        mostrarUsuarios(data.results);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }

    function mostrarUsuarios(usuarios) {
        const contenedor = document.getElementById('usuarios');
        contenedor.innerHTML = ''; 

        usuarios.forEach(usuario => {
            const nombreCompleto = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
            contenedor.innerHTML += `
                <div>
                    <img src="${usuario.picture.large}" alt="${nombreCompleto}">
                    <p><strong>Nombre:</strong> ${nombreCompleto}</p>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Teléfono:</strong> ${usuario.phone}</p>
                </div>
            `;
        });
    }
})();
