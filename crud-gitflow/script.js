let usuarios = [];
let usuarioEditando = null;

function guardarUsuario(){

    const nombre =
    document.getElementById("nombre").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    if(nombre === "" || correo === ""){

        alert("Complete todos los campos");

        return;

    }

    const existe = usuarios.some(

        (usuario, index) =>

            usuario.correo.toLowerCase() === correo.toLowerCase() &&
            index !== usuarioEditando

    );

    if(existe){

        alert("Ya existe un usuario con ese correo.");

        return;

    }

    // Modo editar
    if(usuarioEditando !== null){

        usuarios[usuarioEditando].nombre = nombre;

        usuarios[usuarioEditando].correo = correo;

        usuarioEditando = null;

        document.getElementById("btnGuardar").textContent =
        "Guardar Usuario";

    }

    // Modo crear
    else{

        usuarios.push({

            nombre: nombre,

            correo: correo

        });

    }

    limpiarFormulario();

    mostrarUsuarios();

}

function mostrarUsuarios(){

    const lista =
    document.getElementById("listaUsuarios");

    const mensaje =
    document.getElementById("mensajeVacio");

    lista.innerHTML = "";

    if(usuarios.length === 0){

        mensaje.style.display = "block";

        return;

    }

    mensaje.style.display = "none";

    usuarios.forEach((usuario,index)=>{

        lista.innerHTML += `

        <li>

            <strong>${usuario.nombre}</strong>

            <br>

            ${usuario.correo}

            <button onclick="editarUsuario(${index})">

                Editar

            </button>

            <button onclick="eliminarUsuario(${index})">

                Eliminar

            </button>

        </li>

        `;

    });

}

function editarUsuario(indice){

    const usuario = usuarios[indice];

    document.getElementById("nombre").value =
    usuario.nombre;

    document.getElementById("correo").value =
    usuario.correo;

    usuarioEditando = indice;

    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

}

function eliminarUsuario(indice){

    usuarios.splice(indice,1);

    mostrarUsuarios();

}

function limpiarFormulario(){

    document.getElementById("nombre").value = "";

    document.getElementById("correo").value = "";

}