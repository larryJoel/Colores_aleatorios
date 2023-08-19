//seleccionar los métodos del dom
const boton = document.getElementById('boton-color');
const color = document.getElementById('color');
console.log(color.textContent);

function genColor(){
    let digitos = '0123456789ABCDEF';
    let colorhex ='#';

    for (let i = 0; i < 6; i++) {
        let a = Math.floor(Math.random()*16); //busca un valor aleatorio entre 0 y 15
        colorhex += digitos[a];
    }
    console.log(colorhex);
    return colorhex;
}

boton.addEventListener('click', function(){
    console.log('funciona');
    let aleatorio = genColor();
    color.textContent = aleatorio; //actualizar el texto
    document.body.style.backgroundColor = aleatorio;//actualizar el color de fondo
});