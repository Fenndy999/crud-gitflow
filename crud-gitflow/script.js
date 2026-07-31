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



    if(!correo.includes("@")){

        alert("Ingrese un correo válido");

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


    // Crear usuario

    else {


        usuarios.push({

            nombre: nombre,

            correo: correo

        });


    }



    limpiarFormulario();

    mostrarUsuarios();


}







function mostrarUsuarios(lista = usuarios){


    const listaHTML =
    document.getElementById("listaUsuarios");


    listaHTML.innerHTML = "";



    lista.forEach((usuario,index)=>{


        listaHTML.innerHTML += `

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



    actualizarDashboard();


}








function editarUsuario(indice){


    const usuario =
    usuarios[indice];



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