/******************************************* 
 ******************************************
 ****************NOTICIAS******************
 ******************************************
 ******************************************/
 document.addEventListener('DOMContentLoaded',()=>{  //Evento que se ejecuta si existe el elemento noticas (solo se ejecturara en el html noticias)
    const noticias = document.getElementById('noticias')

    if(noticias){
 fetch('./noticiasJSON/noticias.json') //Carga de archivo JSON
    .then(response => response.json())
    .then(data =>{
        data.forEach(noticia => {
            noticias.innerHTML += `<h3 class = "titulonoticia">${noticia.titulo}</h3>
            <div class = noticiaflex>
            <img src = "${noticia.imagennoticia}">
            <p class = "descripcionnoticia">${noticia.descripcion}</p>
            </div>
            <p class = "fuentesnoticia">Fuente: <a href="${noticia.url}">Google</a></p>
            `

        })

    })
}
});



/******************************************* 
 ******************************************
 ****************FORMULARIO******************
 ******************************************
 ******************************************/
document.addEventListener('DOMContentLoaded',()=>{ //Evento que se ejecuta si existe el elemento formulario (solo se ejecturara en el html presupuesto)
    const formulario = document.getElementById('formulario');

if(formulario){
 const nombre = document.getElementById('nombre');
 const alertanombre = document.getElementById('alertanombre');
 const apellido = document.getElementById('apellido');
 const alertaapellido = document.getElementById('alertaapellido');
 const telefono = document.getElementById('telefono');
 const alertatelefono = document.getElementById('alertatelefono');
 const correo = document.getElementById('correo');
 const alertacorreo = document.getElementById('alertacorreo');
 const enviar = document.getElementById('enviar');
 const reset = document.getElementById('resetear');
 let validacion = {vnombre: false, vapellido: false, vtelefono:false,vcorreo:false}

 /******************************************
 ****************DATOS PERSONALES**********
 ******************************************/

 //Validacion Nombre
    nombre.addEventListener('blur',()=>{ //Verificacion del campo nombre vacio
    if(nombre.value == null || nombre.value == ''){
        alertanombre.innerHTML = 'El campo nombre no puede estar vacio';
        alertanombre.hidden = false;
        nombre.classList = 'alertai';
        alertanombre.style.padding = '5px'
        validacion.vnombre = false;

    }
})
    nombre.addEventListener('change', ()=>{ //Verificacion del campo nombre con caracteres invalidos
    let nombre_re = /^[a-zA-Z ]{2,15}$/;
    if(!nombre_re.test(nombre.value)){
        alertanombre.innerHTML = 'Has introducido un caracter invalido'
        alertanombre.hidden = false;
        nombre.classList = 'alertai';
        alertanombre.style.padding = '5px'
        validacion.vnombre = false;
    
    }else{
        nombre.classList = 'alertav'; //Verificacion del campo nombre correcto
        alertanombre.innerHTML = '';
        alertanombre.style.padding = '0px'
        validacion.vnombre = true;
    }
})

//Validacion Apellido
apellido.addEventListener('blur',()=>{ //Verificacion del campo apellido vacio
    if(apellido.value == null || apellido.value == ''){
        alertaapellido.innerHTML = 'El campo apellido no puede estar vacio';
        alertaapellido.hidden = false;
        apellido.classList = 'alertai';
        alertaapellido.style.padding = '5px'
        validacion.vapellido = false;
    }
})
    apellido.addEventListener('change', ()=>{ //Verificacion del campo apellido con caracteres invalidos
    let apellido_re = /^[a-zA-Z ]{2,40}$/;
    if(!apellido_re.test(apellido.value)){
        alertaapellido.innerHTML = 'Has introducido un caracter invalido'
        alertaapellido.hidden = false;
        apellido.classList = 'alertai';
        alertaapellido.style.padding = '5px'
        validacion.vapellido = false;
    
    }else{
        apellido.classList = 'alertav'; //Verificacion del campo apellido correcto
        alertaapellido.innerHTML = '';
        alertaapellido.style.padding = '0px'
        validacion.vapellido = true;
    }
})

//Validacion Telefono
telefono.addEventListener('blur',()=>{ //Verificacion del campo telefono vacio
    if(telefono.value == null || telefono.value == ''){
        alertatelefono.innerHTML = 'El campo telefono no puede estar vacio';
        alertatelefono.hidden = false;
        telefono.classList = 'alertai';
        alertatelefono.style.padding = '5px';
        validacion.vtelefono= false;

    }
})
    telefono.addEventListener('change', ()=>{ //Verificacion del campo telefono con caracteres invalidos
    let telefono_re = /^[0-9]{9}$/;
    if(!telefono_re.test(telefono.value)){
        alertatelefono.innerHTML = 'Porfavor introduce un numero de telefono valido'
        alertatelefono.hidden = false;
        telefono.classList = 'alertai';
        alertatelefono.style.padding = '5px'
        validacion.vtelefono= false;

    
    }else{
        telefono.classList = 'alertav'; //Verificacion del campo telefono correcto
        alertatelefono.innerHTML = '';
        alertatelefono.style.padding = '0px'
        validacion.vtelefono= true;
    }
})

//Validacion Correo
correo.addEventListener('blur',()=>{ //Verificacion del campo correo vacio
    if(correo.value == null || correo.value == ''){
        alertacorreo.innerHTML = 'El campo correo no puede estar vacio';
        alertacorreo.hidden = false;
        correo.classList = 'alertai';
        alertacorreo.style.padding = '5px'
        validacion.vcorreo= false;

    }
})
    correo.addEventListener('change', ()=>{ //Verificacion del campo correo con caracteres invalidos
    let correo_re = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!correo_re.test(correo.value)){
        alertacorreo.innerHTML = 'Porfavor introduce un correo valido'
        alertacorreo.hidden = false;
        correo.classList = 'alertai';
        alertacorreo.style.padding = '5px';
        validacion.vcorreo= false;
    
    }else{
        correo.classList = 'alertav'; //Verificacion del campo correo correcto
        alertacorreo.innerHTML = '';
        alertacorreo.style.padding = '0px'
        validacion.vcorreo= true;
    }

})




/******************************************
 ****************Presupuesto***************
 ******************************************/
const presupuesto = document.getElementById('presupuesto');
 const producto = document.getElementById('producto');
 const preciopresupuesto = document.getElementById('preciopresupuesto');
const dias = document.getElementById('dias');
const descuento = document.getElementById('descuento');
const presupuestofinal = document.getElementById('presupuestofinal');
const precioextra = document.getElementById('precioextra');
let descuentopor =1;
let extrapor = 0;

const extras = document.getElementById('extras');
const garantia = document.getElementById('garantia');
const protector = document.getElementById('protector');
const funda = document.getElementById('funda');
const auriculares = document.getElementById('auriculares');

//Seleccion del producto
    producto.addEventListener('change',function(){ //Selecciona un producto y activa los demas elementos del presupuesto
        let valor = this.value;
        preciopresupuesto.value = '$' + valor; 
        dias.value = 1;
        dias.disabled = false; 
        let cajas = document.querySelectorAll('input');
        cajas.forEach((caja) => {
            caja.disabled = false;
        })
        precioextra.value = "$" + 0;
        descuento.value = "0%";
    })

//Seleccion de los dias y descuento
    dias.addEventListener('change', function(){
        if(dias.value<1){ //Evita dia 0 y negativos
            dias.value =1;
            descuentopor = 1;
        }

        if(dias.value<3){ //Aplica descuento del 0% al producto si los dias son menores a 3
            descuento.value= '0%'
            descuentopor = 1;
        }

        if(dias.value>=3){ //Aplica descuento del 10% al producto si los dias son mayores a 3
            descuento.value = '10%'
            descuentopor= 0.9;

            
        }

        if(dias.value >=5){ //Aplica descuento del 25% al producto si los dias son mayores a 5
            descuento.value = '25%';
            descuentopor= 0.75;
        }

    })

    //Seleccion de los extras

    garantia.addEventListener('change',function(){ //Aplica un cargo extra por garantia
        if(this.checked){
            extrapor +=50;
        }else{extrapor -=50};
    })

    protector.addEventListener('change',function(){ //Aplica un cargo extra por protector de pantalla
        if(this.checked){
            extrapor +=10;
        }else{extrapor -=10};
    })

    funda.addEventListener('change',function(){ //Aplica un cargo extra por funda
        if(this.checked){
            extrapor +=5;
        }else{extrapor -=5};
    })

    auriculares.addEventListener('change',function(){ //Aplica un cargo extra por auriculares
        if(this.checked){
            extrapor +=30;
        }else{extrapor -=30};
    })

    extras.addEventListener('change', function(){
        precioextra.value = "$"+extrapor;
    })


     

    presupuesto.addEventListener('change',function(){ //Muestra el presupuesto final, cambia con las eleccion del usuario
           presupuestofinal.value = (parseInt(preciopresupuesto.value.replace('$',''))*descuentopor) + extrapor;
            presupuestofinal.value = '$' + presupuestofinal.value;
    })

/******************************************
 ****************ENVIO / RESET ***************
 ******************************************/

 //Función para verificar si todas las validaciones son correctas
function verificarValidacion() {
  return validacion.vnombre && validacion.vapellido && validacion.vtelefono && validacion.vcorreo;
}

// Evento 'submit' en el formulario
formulario.addEventListener('submit', function(event) {
  // Verificar si todas las validaciones son correctas
  if (!verificarValidacion()) {
    event.preventDefault();  // Evita el envío del formulario
    alert('Por favor, asegúrate de que todos los campos son válidos.');
  } else {
    // Si todo es válido, el formulario se enviará
    console.log('Formulario enviado correctamente.');
  }
});


//Boton De Reset
reset.addEventListener('click',()=>{
    //Reinicio de Estilos Y Ocultar Mensajes
    alertanombre.hidden= true;
    nombre.classList = '';
    alertaapellido.hidden= true;
    apellido.classList = '';
    alertatelefono.hidden= true;
    telefono.classList = '';
    alertacorreo.hidden= true;
    correo.classList = '';
    //Deshabilita dias y extras para evitar errores
    dias.disabled = true;
    let cajas = document.querySelectorAll('.extra');
        cajas.forEach((caja) => {
            caja.disabled = true;
        })

})

    
}



});



/******************************************* 
 ******************************************
 ****************GALERIA******************
 ******************************************
 ******************************************/

   
$(document).ready(function () {
    //Evento que se ejecuta si existe el elemento galeriain (solo se ejecturara en el html galeria)
  // Verifica si slick y el elemento existen antes de ejecutar
  if ($('.galeriain').length && $.fn.slick) {
    $('.galeriain').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 3,
    });
  }

  // Verifica si lightbox está disponible
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': false,
      'albumLabel': 'Precio: $%10',
    });
  }
});


/******************************************
 ****************MAPA ***************
 ******************************************/

 document.addEventListener('DOMContentLoaded',()=>{  //Evento que se ejecuta si existe el elemento noticas (solo se ejecturara en el html noticias)
    const cajamapa = document.getElementById('cajamapa')

    if(cajamapa){
 //Cargar Mapa
        var mapa = L.map('cajamapa').setView([40.422620446056165, -3.7076597153725985], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        //Agregar Marcador
        var marker = L.marker([40.422620446056165, -3.7076597153725985]).addTo(mapa);
        marker.bindPopup('Tech Master').openPopup();


         // Add routing from user's location to Madrid
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);
      var madridLatLng = L.latLng(40.422620446056165, -3.7076597153725985);

      L.Routing.control({
        waypoints: [
          userLatLng,
          madridLatLng
        ],
        routeWhileDragging: false
      }).addTo(mapa);
    }, function (err) {
      alert("Could not get your location for routing: " + err.message);
    });
  } else {
    alert("Geolocation not supported.");
  }
}
});