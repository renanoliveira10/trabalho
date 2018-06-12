var numeroDaImagem = 1;
var quantidadeImagens = 3;
var nomePadrao = "ondequeroir ";
var pastaImagens = "img/menu/";
var extensaoImagens = ".jpg";

setInterval(trocaImagem, 1000);

function trocaImagem(){
	if(numeroDaImagem == quantidadeImagens){
		numeroDaImagem = 1;
	}
	else{
		numeroDaImagem++;
	}
	document.querySelector("#ondequeroir").src = pastaImagens + nomePadrao + numeroDaImagem + extensaoImagens;

