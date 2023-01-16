import { IItem } from "../../types/Item";
import { TableItem } from "../TableItem";

interface IProps {
  list: IItem[];
}

export function TableArea({ list }: IProps) {
  return (
    <div className="shadow-3xl rounded-[10px] p-[20px]">
      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-2 w-24">Data</th>
            <th className="text-left py-2 w-32">Categoria</th>
            <th className="text-left py-2">Título</th>
            <th className="text-left py-2 w-40">Valor</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
