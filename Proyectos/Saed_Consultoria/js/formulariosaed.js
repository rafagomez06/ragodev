function enviar() {  
    //Se Toman los valores de los inputs
  input=document.getElementById('cliente');
  select = document.getElementById('servicios');  
  textarea = document.getElementById('comentarios');

//se valida q no esten vacios
if(!input.value || input.value==="" && !select.value && !textarea.value || textarea.value.length === 0){
    window.alert("Ingresa información en los campos para continuar!!");    
}
else{
        //Numero de telefono para whatsapp:
        let telefono = "526671294872";
        //valores de las cajas de texto
        let cliente = document.querySelector("#cliente").value;
        let servicios= document.querySelector("#servicios").value; 
        let comentarios=document.querySelector("#comentarios").value; 

        //mensaje que va directo a whatsapp
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
        Hola que tal 😄 !!, te habla ${cliente} , quisiera saber más información sobre *${servicios}* por favor. ${comentarios}.`; 

        //abre link
        window.open(url); 
  }
}








 
  




