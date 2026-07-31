let usuarios = [];
let usuarioEditando = null;


function guardarUsuario(){

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;


    if(nombre === "" || correo === ""){

        alert("Complete todos los campos");
        return;

    }


    // Modo editar
    if(usuarioEditando !== null){

        usuarios[usuarioEditando].nombre = nombre;
        usuarios[usuarioEditando].correo = correo;

        usuarioEditando = null;

        document.getElementById("btnGuardar").textContent = "Guardar Usuario";


    } 
    // Modo crear
    else {

        usuarios.push({

            nombre: nombre,
            correo: correo

        });

    }


    mostrarUsuarios();


    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";

}




function mostrarUsuarios(){

    const lista = document.getElementById("listaUsuarios");

    lista.innerHTML = "";


    usuarios.forEach((usuario,index)=>{


        lista.innerHTML += `

        <li>

            <strong>${usuario.nombre}</strong>
            -
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


    document.getElementById("nombre").value = usuario.nombre;

    document.getElementById("correo").value = usuario.correo;


    usuarioEditando = indice;


    document.getElementById("btnGuardar").textContent = 
    "Actualizar Usuario";


}




function eliminarUsuario(indice){


    usuarios.splice(indice,1);


    mostrarUsuarios();


}