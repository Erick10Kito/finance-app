import { categories } from "../../data/categories";
import { items } from "../../data/items";
import { formatDate } from "../../helpers/dateFilter";
import { IItem } from "../../types/Item";

interface IPropsItem {
  item: IItem;
}

export function TableItem({ item }: IPropsItem) {
  return (
    <tr>
      <td className="p-2">{formatDate(item.date)}</td>
      <td className="`p-2 bg-`">{categories[item.category].title}</td>
      <td className="p-2">{item.title}</td>
      {categories[item.category].expense == true ? (
        <td className="p-2 text-red-700">R$ {item.value}</td>
      ) : (
        <td className="p-2 text-green-900">R$ {item.value}</td>
      )}
    </tr>
  );
}
