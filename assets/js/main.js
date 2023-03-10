/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo */


for(let i=1; i<=100; i++){
    

    if( Number.isInteger(i / 3) && Number.isInteger(i / 5) ){
        console.log('FizzBuzz',i);
        const squareMarkup = `        
        <div class="col">
            <div class="square square_fizzBuzz">${i}<h4>FizzBuzz</h4> </div>    
                   
        </div>   
        `
        let squareSquare=document.querySelector('.row')
        squareSquare.insertAdjacentHTML('beforeend', squareMarkup)
    }else if(Number.isInteger(i / 3)){
        console.log('Fizz',i);
        const squareMarkup = `        
        <div class="col">
            <div class="square square_fizz">${i}<h4>Fizz</h4>   </div> 
                   
        </div>   
        `
        let squareSquare=document.querySelector('.row')
        squareSquare.insertAdjacentHTML('beforeend', squareMarkup)
    } else if(Number.isInteger(i / 5)){
        console.log('Buzz',i);  
        const squareMarkup = `        
        <div class="col">
            <div class="square square_Buzz">${i}<h4>Buzz</h4> </div> 
                      
        </div>   
        `
        let squareSquare=document.querySelector('.row')
        squareSquare.insertAdjacentHTML('beforeend', squareMarkup)              
    }else {
        console.log(i);
        const squareMarkup = `        
        <div class="col">
            <div class="square square_standard">${i}<h4>buuuuuu</h4> </div>  
                     
        </div>   
        `
        let squareSquare=document.querySelector('.row')
        squareSquare.insertAdjacentHTML('beforeend', squareMarkup)
    }
    
    //console.log(i);
}








