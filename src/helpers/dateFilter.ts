//TUDO RELACIONADO A MANIPULAÇÃO DE DATAS

import { IItem } from "../types/Item";

//Função abaixo serve para pegar o mes atual
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

//Função abaixo vai formular uma lista filtrada pelo mes, e list(sem estar filtrada) e date é o que essa função de lista filtrada receber inicialmente
export const filterListByMonth = (list: IItem[], date: string) => {
  let newList: IItem[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    //Esse if confere se a o ano e o mes do item é o mesmo que o atual
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};
