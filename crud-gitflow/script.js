let usuarios = [];

let usuarioEditando = null;



function guardarUsuario(){


    const nombre =
    document.getElementById("nombre").value;


    const correo =
    document.getElementById("correo").value;



    if(nombre === "" || correo === ""){

        alert("Complete todos los campos");
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

            nombre,
            correo

        });


    }



    limpiarFormulario();

    mostrarUsuarios();

}





function mostrarUsuarios(lista = usuarios){


    const ul =
    document.getElementById("listaUsuarios");


    ul.innerHTML = "";



    lista.forEach((usuario,index)=>{


        ul.innerHTML += `

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






function editarUsuario(index){


    document.getElementById("nombre").value =
    usuarios[index].nombre;


    document.getElementById("correo").value =
    usuarios[index].correo;



    usuarioEditando = index;


    document.getElementById("btnGuardar").textContent =
    "Actualizar Usuario";


}





function eliminarUsuario(index){


    usuarios.splice(index,1);


    mostrarUsuarios();


}






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






function actualizarDashboard(){


    document.getElementById("totalUsuarios").textContent =
    usuarios.length;


}






function exportarUsuarios(){


    let contenido =
    "Nombre,Correo\n";



    usuarios.forEach(usuario=>{


        contenido +=
        `${usuario.nombre},${usuario.correo}\n`;


    });



    const archivo =
    new Blob([contenido],
    {
        type:"text/csv"
    });



    const enlace =
    document.createElement("a");



    enlace.href =
    URL.createObjectURL(archivo);



    enlace.download =
    "usuarios.csv";



    enlace.click();


}






function limpiarFormulario(){


    document.getElementById("nombre").value="";

    document.getElementById("correo").value="";


}