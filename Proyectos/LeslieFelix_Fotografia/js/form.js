function validateAssigned() {
  valid = true;
  select = document.getElementById('paquetes');
  input=document.getElementById('cliente');
  textarea = document.getElementById('comentarios');

  if(!input.value || input.value==="" ){
    input.classList.add('invalid');
    document.getElementById('validation-message1').className="invalid-message";

  }else {
      input.classList.remove('invalid');
      document.getElementById('validation-message1').className="hide";
  }    
 
  if (!select.value) {
    select.classList.add('invalid');
    document.getElementById('validation-message2').className="invalid-message";
} else {
    select.classList.remove('invalid');
    document.getElementById('validation-message2').className="hide";
}
   
  if (!textarea.value || textarea.value.length === 0) {
    textarea.classList.add('invalid');
    document.getElementById('validation-message1').className="invalid-message";
  } else {
    textarea.classList.remove('invalid');
    document.getElementById('validation-message1').className="hide";



    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "526674163182";
//valores de las cajas de texto
 let cliente = document.querySelector("#cliente").value;
 let paquetes=document.querySelector("#paquetes").value;
 let comentarios=document.querySelector("#comentarios").value;
 
 //mensaje que va directo a whatsapp
 let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
   Hola Leslie !! , Mi Nombre es ${cliente} , Me interesa saber el precio de la sesión: *${paquetes}* y ¿Cuales son las fechas disponibles? ${comentarios}.`;

 window.open(url);
  }


}


 
  




