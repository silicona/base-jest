
export class Hemingway {

  // Hemingway
  getFibonnaci = (tamano: number) => {

    let primero = 0, segundo = 1, cuenta = 2, resultado = [primero, segundo];
    let siguiente 

    if (tamano < 2)
      return 'La petición se realizó pero es inválida.'

    while (cuenta++ < tamano) {

      siguiente = primero + segundo;
      primero = segundo;
      segundo = siguiente;

      resultado.push(siguiente);
    }

    return resultado;
  }

  // Shakespeare 24
  getSeriesDeFibonacci = (elTamano: number) => {
    //a CALCKULATION in two acts
    //employ'ng the humourous logick of JAVA-SCRIPTE

    //Dramatis Personae
    let elResultado: number[] //an ARRAY to contain THE NUMBERS
    let elContador: number //a NUMBER, serv'nt to the FOR LOOP

    //ACT I: in which a ZERO is added for INITIATION

    //[ENTER: theResult]

    //Upon the noble list bestow a zero
    elResultado = [0];

    //ACT II: a LOOP in which the final TWO NUMBERS are QUEREED and SUMM'D

    //[ENTER: theCo unter]

    //Commence at one and venture o'er the numbers
    for (elContador = 1; elContador < elTamano; elContador++) {
      //By divination set adjoining members
      elResultado[elContador] = (elResultado[elContador - 1] || 1) + elResultado[Math.max(0, elContador - 2)];
    }

    //'Tis done, and here's the answer
    return elResultado;

    //[Exeunt]
  }
}
