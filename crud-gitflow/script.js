let usuarios = [];

let usuarioEditando = null;

// =======================
// LOGIN
// =======================

function iniciarSesion(){

    const usuario =
    document.getElementById("usuario").value.trim();

    const clave =
    document.getElementById("clave").value.trim();


    if(usuario === "admin" && clave === "1234"){

        document.getElementById("login").style.display = "none";

        document.getElementById("crud").style.display = "block";

        alert("Bienvenido al sistema.");

    }

    else{

        alert("Usuario o contraseña incorrectos.");

    }

}


function cerrarSesion(){

    document.getElementById("usuario").value = "";

    document.getElementById("clave").value = "";

    document.getElementById("login").style.display = "block";

    document.getElementById("crud").style.display = "none";

}



// =======================
// CRUD
// =======================

function guardarUsuario(){

    const nombre =
    document.getElementById("nombre").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    const correo =
    document.getElementById("correo").value.trim();

    if(nombre === "" || correo === ""){

        alert("Complete todos los campos.");

        return;

    }


    // Evitar correos repetidos
    const existe = usuarios.some(

        (usuario,index)=>

        usuario.correo.toLowerCase() === correo.toLowerCase()

        && index !== usuarioEditando

    );

    if(existe){

        alert("Ese correo ya está registrado.");

        return;

    }


    if(usuarioEditando !== null){


        usuarios[usuarioEditando].nombre = nombre;

        usuarios[usuarioEditando].correo = correo;


        usuarioEditando = null;

        document.getElementById("btnGuardar").textContent =
        "Guardar Usuario";

    }

    else{

        usuarios.push({

            nombre,

            correo

        });


    }

    limpiarFormulario();


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


        lista.innerHTML += `

    listaHTML.innerHTML = "";


    ul.innerHTML = "";

    lista.forEach((usuario,index)=>{


        listaHTML.innerHTML += `


            <strong>${usuario.nombre}</strong>

            <br>

            ${usuario.correo}

        ul.innerHTML += `

        <li>

        <strong>${usuario.nombre}</strong>
        <br>
        ${usuario.correo}

            <button onclick="eliminarUsuario(${index})">


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


    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

}

function eliminarUsuario(indice){

    usuarios.splice(indice,1);

    limpiarFormulario();

    mostrarUsuarios();

}



function mostrarUsuarios(){

    const lista =
    document.getElementById("listaUsuarios");



// Buscar usuarios

        lista.innerHTML += `

    const texto =
    document
    .getElementById("buscar")
    .value
    .toLowerCase();

            <strong>${usuario.nombre}</strong>

            <br>

            ${usuario.correo}

    const resultados =
    usuarios.filter(usuario =>


        usuario.nombre
        .toLowerCase()
        .includes(texto)

            <button onclick="eliminarUsuario(${index})">



        </li>

}


    });

}



function editarUsuario(indice){

    document.getElementById("nombre").value =
    usuarios[indice].nombre;

    document.getElementById("correo").value =
    usuarios[indice].correo;

    usuarioEditando = indice;

    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

}


        alert("No hay usuarios para exportar");

function eliminarUsuario(indice){

    if(confirm("¿Desea eliminar este usuario?")){

        usuarios.splice(indice,1);

        mostrarUsuarios();

    }

}



function limpiarFormulario(){

    document.getElementById("nombre").value = "";

    document.getElementById("correo").value = "";

}