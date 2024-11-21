
let fruta = "banana";

// estrutura de decisão. 
switch (fruta) {
	
    // condicional aplicada dentro do switch.
	case "laranja":
    console.log("suco de laranja!");
    // quebra o switch se o case for executado com sucesso!
    break;
    
    // dois cases para o mesmo resultado:
    case "banana": 
    case "morango":
	console.log("vitamina de " + fruta + "!");
    break;
    
    // case único:
    case "maçã": 
    console.log("suco de " + fruta + "!");
    break;
    
    // case defaut se os cases não forem validados:
    default: 
    console.log("bebida à base de " + fruta + "!");
}
