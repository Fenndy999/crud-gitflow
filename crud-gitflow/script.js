let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioEditando = null;

// =======================
// LOGIN
// =======================

// Cargar usuarios al iniciar
document.addEventListener("DOMContentLoaded", () => {

    mostrarUsuarios();

});




// Guardar o actualizar usuario
function guardarUsuario(){

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

        alert("Complete todos los campos");
        return;

    }


    // Evitar correos repetidos
    const existe = usuarios.some(

        (usuario,index)=>

        alert("Ingrese un correo válido");
        return;

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



    }else{


        usuarios.push({

            id: Date.now(),

            nombre,

            correo

        });


    }



    guardarDatos();

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

// Mostrar usuarios
function mostrarUsuarios(lista = usuarios){

    }

    mensaje.style.display = "none";


        lista.innerHTML += `

    if(!listaHTML) return;



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

}







// Editar usuario
function editarUsuario(index){


    const usuario =
    usuarios[index];



    document.getElementById("nombre").value =
    usuario.nombre;

    document.getElementById("correo").value =
    usuario.correo;



    usuarioEditando = index;



    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

}







// Eliminar usuario
function eliminarUsuario(index){


    const confirmar =
    confirm("¿Desea eliminar este usuario?");



    if(!confirmar){

        return;

    }


    usuarios.splice(indice,1);

    limpiarFormulario();


    guardarDatos();

    mostrarUsuarios();

}



function mostrarUsuarios(){

    const lista =
    document.getElementById("listaUsuarios");



// Buscar usuarios
function buscarUsuario(){


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

        ||

        usuario.correo
        .toLowerCase()
        .includes(texto)


    );




        </li>

}








// Actualizar contador
function actualizarDashboard(){


    const contador =
    document.getElementById("totalUsuarios");



    if(contador){


        contador.textContent =
        usuarios.length;


    }


}



function editarUsuario(indice){

    document.getElementById("nombre").value =
    usuarios[indice].nombre;

    document.getElementById("correo").value =
    usuarios[indice].correo;

    usuarioEditando = indice;

    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";

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
        `${index + 1},"${usuario.nombre}","${usuario.correo}"\n`;


    });




    const archivo =
    new Blob(

        [csv],

        {
            type:"text/csv;charset=utf-8;"
        }

    );



    const enlace =
    document.createElement("a");



    enlace.href =
    URL.createObjectURL(archivo);



    enlace.download =
    "usuarios_exportados.csv";



    enlace.click();

    if(confirm("¿Desea eliminar este usuario?")){

}







// Guardar en navegador
function guardarDatos(){


    localStorage.setItem(

        "usuarios",

        JSON.stringify(usuarios)

    );

    }

}








// Limpiar campos
function limpiarFormulario(){

    document.getElementById("nombre").value = "";

    document.getElementById("correo").value = "";

}