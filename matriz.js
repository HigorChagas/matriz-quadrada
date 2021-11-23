function exibe() {
    const matriz = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
    const matrizInvertida = matriz.slice(0).reverse();

    let diagonal1 = 0, diagonal2 = 0;

    for(let i = 0;i < matriz.length; i++) {
        diagonal1 += matriz[i][i];
    }    

    for(let i = 0;i < matrizInvertida.length; i++) {
        diagonal2 += matrizInvertida[i][i];
    }

    console.log(diagonal1 - diagonal2);   
}

exibe();