const cartas = iniciaCartas();
let partidasGanadas = 0;
let partidasPerdidas = 0;
let cartaSecreta; 
let cartaMostrada;

iniciaJuego();

// Shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = array[i];
        [array[i], array[j]] = [array[j], array[i]];
        array[j] = k;
    }
}

// Generate the cards
function iniciaCartas() {
    const cartas = [];
    for (let palo of 'CDHS') {
      for (let i = 1; i <= 13; i++) {
        cartas.push(`${palo}_${i.toString().padStart(2, '0')}.svg`);
      }
    }
    shuffle(cartas);
    return cartas;
}

// Higher Card
function higher() {
    if (cartas.length > 0) {
        // cartaMostrada = getCartaMostrada();
        // cartaSecreta = getCartaSecreta();

        const cartaMostradaNumero = cartaMostrada.substring(2, 4);
        const cartaSecretaNumero = cartaSecreta.substring(2, 4);

        // cartaMostrada.src = 'cards/' + cartaMostrada;
        cartaSecretaID.src = 'cards/' + cartaSecreta;

        if (cartaMostradaNumero > cartaSecretaNumero) {
            partidasGanadas++;
            partidas_ganadas.innerText = partidasGanadas;
            mayorGanador.style.display = 'block';
            pregunta.style.display = 'none';
        } else {
            partidasPerdidas++;
            partidas_perdidas.innerText = partidasPerdidas;
            mayorPerdedor.style.display = 'block';
            pregunta.style.display = 'none';
        }
        boton.style.display = 'none';
        continuar.style.display = 'block';

    } else {
        final.style.display = 'block';
        reinicio.style.display = 'block';
        pregunta.style.display = 'none';
        boton.style.display = 'none';
    }
}

// Lower Card
function lower() {
    if (cartas.length > 0) {
        // cartaMostrada = getCartaMostrada();
        // cartaSecreta = getCartaSecreta();

        const cartaMostradaNumero = cartaMostrada.substring(2, 4);
        const cartaSecretaNumero = cartaSecreta.substring(2, 4);

        // cartaMostradaID.src = 'cards/' + cartaMostrada;
        cartaSecretaID.src = 'cards/' + cartaSecreta;

        if (cartaMostradaNumero < cartaSecretaNumero) {
            partidasGanadas++;
            partidas_ganadas.innerText = partidasGanadas;
            menorGanador.style.display = 'block';
            pregunta.style.display = 'none';
        } else {
            partidasPerdidas++;
            partidas_perdidas.innerText = partidasPerdidas;
            menorPerdedor.style.display = 'block';
            pregunta.style.display = 'none';
        }
        boton.style.display = 'none';
        continuar.style.display = 'block';

    } else {
        final.style.display = 'block';
        reinicio.style.display = 'block';
        pregunta.style.display = 'none';
        boton.style.display = 'none';
    }
}

// Equal Card
function equal() {
    if (cartas.length > 0) {
        // cartaMostrada = getCartaMostrada();
        // cartaSecreta = getCartaSecreta();

        const cartaMostradaNumero = cartaMostrada.substring(2, 4);
        const cartaSecretaNumero = cartaSecreta.substring(2, 4);

        // cartaMostrada.src = 'cards/' + cartaMostrada;
        cartaSecretaID.src = 'cards/' + cartaSecreta;

        if (cartaMostradaNumero === cartaSecretaNumero) {
            partidasGanadas++;
            partidas_ganadas.innerText = partidasGanadas;
            igualGanador.style.display = 'block';
            pregunta.style.display = 'none';
        } else {
            partidasPerdidas++;
            partidas_perdidas.innerText = partidasPerdidas;
            igualPerdedor.style.display = 'block';
            pregunta.style.display = 'none';
        }
        boton.style.display = 'none';
        continuar.style.display = 'block';

    } else {
        final.style.display = 'block';
        reinicio.style.display = 'block';
        pregunta.style.display = 'none';
        boton.style.display = 'none';
    }

}

function iniciaJuego() {
    if (cartas.length > 0) {
        cartaSecreta = cartas.pop();
        cartaMostrada = cartas.pop();
        cartaSecretaID.src = 'cards/BACK.svg';
        cartaMostradaID.src = 'cards/' + cartaMostrada;
        boton.style.display = 'block';
        pregunta.style.display = 'block';
        continuar.style.display = 'none';
        mayorGanador.style.display = 'none';
        mayorPerdedor.style.display = 'none';
        menorGanador.style.display = 'none';
        menorPerdedor.style.display = 'none';
        igualGanador.style.display = 'none';
        igualPerdedor.style.display = 'none';
    }
}

