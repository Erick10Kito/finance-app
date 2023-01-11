import { ICategory } from "./types/Category";
import { IItem } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

export default function App() {
  const [list, setList] = useState(items); //Lista Geral, sem filtro nenhum, mostrando TUDO, independente do mes que foi adicionado
  const [filteredList, setFilteredList] = useState<IItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //Lista do mes atual

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  return (
    <div>
      <div className="bg-indigo-900 h-40 text-center">
        <h1 className="m-0 p-0 text-white pt-8">Sistema Financeiro</h1>
      </div>
      <div className="m-auto mb-12 max-w-[980px]">
        <TableArea list={filteredList} />
      </div>
    </div>
  );
}
