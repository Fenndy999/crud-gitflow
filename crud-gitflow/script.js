
let datos=JSON.parse(localStorage.getItem('usuarios')||'[]');
function render(){
 const ul=document.getElementById('lista'); ul.innerHTML='';
 datos.forEach((u,i)=>{
  const li=document.createElement('li');
  li.innerHTML=`${u.nombre} - ${u.correo}
  <button onclick="eliminar(${i})">Eliminar</button>`;
  ul.appendChild(li);
 });
 localStorage.setItem('usuarios',JSON.stringify(datos));
}
function agregar(){
 const n=document.getElementById('nombre').value;
 const c=document.getElementById('correo').value;
 if(!n||!c)return alert('Complete los campos');
 datos.push({nombre:n,correo:c});
 document.getElementById('nombre').value='';
 document.getElementById('correo').value='';
 render();
}
function eliminar(i){datos.splice(i,1);render();}
render();
