//INFO
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var checkIngredients = document.getElementsByClassName('ingredient-checkbox');
var stamp = document.getElementById('price');

//FUNZIONI
btn.addEventListener('click', function(){
    var name = burgerName.value.trim();
    
    //OBBLIGO NOME BURGER
    if(name.length === 0){
        alert('Nome burger errato, riprova!');
    }else{
        console.log("Procedi con il pagamento");
    }

    //CALCOLO PREZZO
    var prezzo = 50;

    for( var i = 0; i < checkIngredients.length; i++){
        var productChoise = checkIngredients[i];

        if(productChoise.checked === true){
            price += parseInt (productChoise.value);  //IL VALUE DA COME VALORE IL NUMERO SETTATO NELL'HTML

        }

        //STAMPA PREZZO
        stamp.innerHTML = price.toFixed(2);

        
    }
});