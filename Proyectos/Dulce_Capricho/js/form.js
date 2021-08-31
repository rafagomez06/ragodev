function validateAssigned() {
  valid = true;
  select = document.getElementById('productos');
  input=document.getElementById('cliente');
  input=document.getElementById('fecha');
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
//let telefono = "526671890892";
let telefono = "526673881307";
//valores de las cajas de texto
 let cliente = document.querySelector("#cliente").value;
 let celular= document.querySelector("#celular").value;
 let lista=document.querySelector("#lista").value;
 let comentarios=document.querySelector("#comentarios").value;
 
 let fecha=document.querySelector("#fecha").value;

 var salida = formato(fecha);
 console.log(salida);
 
 /**
  * Convierte un texto de la forma 2017-01-10 a la forma
  * 10/01/2017
  *
  * @param {string} texto Texto de la forma 2017-01-10
  * @return {string} texto de la forma 10/01/2017
  *
  */
 function formato(fecha){
   return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
 }

 //mensaje que va directo a whatsapp
 let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
 Hola Sarahí !!,Te habla ${cliente}, quisiera hacer el siguiente pedido Por favor 😄.
   
   %0A%0A
   *-------PEDIDO-------*%0A%0A
   *NOMBRE:*%0A
   ${cliente}%0A%0A
   *PRODUCTO:*%0A
   ${productos}%0A%0A
   *FECHA DE PEDIDO:*%0A
   ${salida}%0A%0A
   *COMENTARIOS:*%0A
   ${comentarios}%0A
   *---------------------*`; 

 window.open(url);
 
  }
}


 
  




