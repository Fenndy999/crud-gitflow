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


    // Editar usuario

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

    mostrarUsuarios();

}

function limpiarFormulario(){

    document.getElementById("nombre").value = "";

    document.getElementById("correo").value = "";

}








// Buscar usuarios

function buscarUsuario(){


    const texto =
    document
    .getElementById("buscar")
    .value
    .toLowerCase();



    const resultados =
    usuarios.filter(usuario =>


        usuario.nombre
        .toLowerCase()
        .includes(texto)


    );



    mostrarUsuarios(resultados);


}








// Dashboard

function actualizarDashboard(){


    const contador =
    document.getElementById("totalUsuarios");


    if(contador){

        contador.textContent =
        usuarios.length;

    }


}








// Exportar CSV

function exportarUsuarios(){


    if(usuarios.length === 0){


        alert("No hay usuarios para exportar");

        return;

    }



    let csv =
    "ID,Nombre,Correo\n";



    usuarios.forEach((usuario,index)=>{


        csv +=
        `${index + 1},${usuario.nombre},${usuario.correo}\n`;


    });



    const archivo =
    new Blob(
        [csv],
        {
            type:"text/csv"
        }
    );



    const enlace =
    document.createElement("a");



    enlace.href =
    URL.createObjectURL(archivo);



    enlace.download =
    "usuarios_exportados.csv";



    enlace.click();



    alert("Usuarios exportados correctamente");


}








function limpiarFormulario(){


    document.getElementById("nombre").value = "";


    document.getElementById("correo").value = "";


}