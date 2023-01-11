import { IItem } from "../../types/Item";

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
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
