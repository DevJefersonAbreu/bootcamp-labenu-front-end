function imprimirComidasFavoritas() {

    const nomeDoUsuario = prompt("Qual é o seu nome?");
    
    const comida1 = prompt("Qual é a sua primeira comida favorita?");
    const comida2 = prompt("Qual é a sua segunda comida favorita?");
    const comida3 = prompt("Qual é a sua terceira comida favorita?");
    
    console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}:\n- ${comida1}\n- ${comida2}\n- ${comida3}`);
}

imprimirComidasFavoritas();