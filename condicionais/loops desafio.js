
// entrada de dados em array:
let dados = gets().split(", ");
// armazenamento dos resultados em outro array:
let resultado = []; 

// loop de validação dos dados:
dados.forEach(item => {
  // divide os dados do array "dados" em "nome" e "quantidade":
  let [nome, quantidade] = item.split(":")
  // convertendo "quantidade" de string para número inteiro:
  quantidade = parseInt(quantidade); 

  // verifica a condição dos valores:
  if (quantidade < 5) {
      resultado.push(`${nome}: Baixo`); 
  } else {
      resultado.push(`${nome}: Adequado`); 
  }
});

// exibindo os resultados: 
print(resultado.join(", "));
