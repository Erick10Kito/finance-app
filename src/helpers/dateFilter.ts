//TUDO RELACIONADO A MANIPULAÇÃO DE DATAS

//Função abaixo serve para pegar o mes atual
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};
