//Variaveis global podem acessar a função 
var cont = 0;

function tick() {
	cont = cont + 1;
}

tick();
tick();
tick();
tick();
console.log(cont);

// closure função que tem acesso ao escopo pai mesmo se for destruido
var increment = (function(){
	var contador = 0;

	return function() {
		contador = contador + 1;
		console.log(contador);
	}
})();

increment();
increment();
increment();
increment();
increment();
