const verificarAlistamento = (anoDeNascimento) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const idade = anoAtual - anoDeNascimento;
  const idadeParaAlistamento = 18;
  
  if (idade < idadeParaAlistamento) {
    const anosFaltantes = idadeParaAlistamento - idade;
    console.log(`Faltam ${anosFaltantes} anos para o alistamento.`);
  } else {
    const anosPassados = idade - idadeParaAlistamento;
    console.log(`Já se passaram ${anosPassados} anos desde o alistamento.`);
  }
};

verificarAlistamento(2010); 

