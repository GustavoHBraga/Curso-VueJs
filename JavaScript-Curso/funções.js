// declaração padrão
function dizerOla(nome){
	console.log('Olá ' + nome);
}
dizerOla('Gustavo');

// declaração anomina via variavel
var dizerSejaBemVindo = function(nome){
	console.log('Seja muito bem-vindo ' + nome);
}
dizerSejaBemVindo('Gustavo')


// declaração por construtor de funções
var dizerTchau = new Function("nome","console.log('Tchau '+ nome);");
dizerTchau('Gustavo');


//auto invocada 
(function () {
	var a = 1;
	console.log(a);
})();