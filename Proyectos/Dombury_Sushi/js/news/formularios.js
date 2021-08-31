//FORMULARIOS
$(function(){
    $("#entrega").click(function(){
        if($(this).val()==='A Domicilio'){
            $("#direccion").removeAttr('disabled');
            //$("#direccion").focus();
        }else{
            $("#direccion").attr('disabled','disabled');
        }
    })
})

//FUNCION PARA FORMULARIO DE ORDENES//////////////
function ordenar(){
    
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "526674785544";
    //valores de las cajas de texto
     let cliente = document.querySelector("#cliente").value;
     let celular=document.querySelector("#celular").value;
     let entrega=document.querySelector("#entrega").value;
     let lista_sushi=document.querySelector("#lista").value;
     let bebida=document.querySelector("#bebida").value;
     let direccion=document.querySelector("#direccion").value;
     let comentarios=document.querySelector("#comentarios").value;             
     
   
     //ENTREGA A DOMICILIO
     if( entrega==='A Domicilio' ) {
    
      //mensaje que va directo a whatsapp
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    Buenas Noches !!, quisiera hacer el siguiente pedido Por favor 😄.%0A*-------ORDEN-------*%0A%0A*NOMBRE%3A*%0A-${cliente}%0A%0A*CELULAR%3A*%0A-${celular}%0A%0A*TIPO%20ENTREGA%3A*%0A-${entrega}%0A%0A*DIRECCION%3A*%0A-${direccion}%0A%0A*SUSHI%3A*%0A-${lista_sushi}%0A%0A*BEBIDA%3A*%0A-${bebida}%0A%0A*COMENTARIOS%3A*%0A-${comentarios}%0A%0A*---------------------*`; 
      
        window.open(url);
     }
     else if(entrega==='Recogeré mi pedido'){
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
        Buenas Noches !!, quisiera hacer el siguiente pedido Por favor 😄.%0A*-------ORDEN-------*%0A%0A*NOMBRE%3A*%0A-${cliente}%0A%0A*CELULAR%3A*%0A-${celular}%0A%0A*TIPO%20ENTREGA%3A*%0A-${entrega}%0A%0A*SUSHI%3A*%0A-${lista_sushi}%0A%0A*BEBIDA%3A*%0A-${bebida}%0A%0A*COMENTARIOS%3A*%0A-${comentarios}%0A%0A*---------------------*`; 
        window.open(url);    
     }
    }

    