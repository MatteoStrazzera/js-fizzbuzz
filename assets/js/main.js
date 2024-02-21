// console.log('connect'); 

// creo un ciclo che arrivi fino a 100
// stampo il risultato del ciclo in console

for (let i = 1; i < 101; i++) {

    // console.log(i);
    
    // creo le condizioni 
    // - SE un numero è multiplo sia di 3 che di 5:stamperà la stringa “FizzBuzz”
    
    if (i % 3 === 0 && i % 5 === 0) {

        console.log('FizzBuzz');

    } // - SE un numero è multiplo di 3:stamperà la stringa “Fizz”
    else if (i % 3 === 0) {

        console.log('Fizz');

    } // - SE un numero è multiplo di 5:stamperà la stringa “Buzz”
    else if (i % 5 === 0) {

        console.log('Buzz');

    }
    else {
        console.log(i);
    }


}
