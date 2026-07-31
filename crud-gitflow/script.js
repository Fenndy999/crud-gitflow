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

    mostrarUsuarios();

}



function mostrarUsuarios(){

    const lista =
    document.getElementById("listaUsuarios");

    lista.innerHTML = "";


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

    document.getElementById("nombre").value =
    usuarios[indice].nombre;

    document.getElementById("correo").value =
    usuarios[indice].correo;

    usuarioEditando = indice;

    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

}



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