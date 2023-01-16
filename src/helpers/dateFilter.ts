//TUDO RELACIONADO A MANIPULAÇÃO DE DATAS

import { IItem } from "../types/Item";

//Função abaixo serve para pegar o mes atual
export function getCurrentMonth() {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

//Função abaixo vai formular uma lista filtrada pelo mes, e list(sem estar filtrada) e date é o que essa função de lista filtrada receber inicialmente
export function filterListByMonth(list: IItem[], date: string) {
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
}

export function formatDate(date: Date): string {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

function addZeroToDate(n: number): string {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}
