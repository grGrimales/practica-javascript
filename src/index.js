import './styles.css';

// Referencias del HTML
const btnSaludo       = document.querySelector('#btnSaludo');
const inputNombre     = document.querySelector('#nombre');
const inputApellido   = document.querySelector('#apellido');
const inputFecha      = document.querySelector('#fecha');
const divDatos        = document.querySelector('#datos');


btnSaludo.addEventListener('click', () => {

    const nombre   = inputNombre.value;
    const apellido = inputApellido.value;
    if( nombre ==='' || apellido === ''){
        alert('Debes rellenar ambos campos');
    }
    const  fecha     = inputFecha.value;
    if( fecha < 18  ||  fecha === '' ){
        alert('Debes tener la mayoria de edad');
    } else if(fecha === ''){
        alert('Introduce una edad');
    }

    const fechaDate = new Date(fecha);
    const hoy = new Date();
    let edad= hoy.getFullYear() - fechaDate.getFullYear();
    const  m = hoy.getMonth() - fechaDate.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaDate.getDate())) {
        edad--;
    }
    console.log(edad);
    
        

    

    // console.log( edad );

    const htmlCard =   `<h3 class="card-title">Datos registrados</h3>
    <p  class="card-text">Nombre: ${nombre} </p>
    
    <p class="card-text">Apellido: ${apellido} </p>
        <p class="card-text datos">edad: ${ edad} </p>`

        divDatos.innerHTML = htmlCard;
});