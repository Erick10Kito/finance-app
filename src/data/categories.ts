import { ICategory } from "../types/Category";

export const categories: ICategory = {
  food: {
    title: "Alimentação",
    color: "blue",
    expense: true,
  },
  rent: {
    title: "Aluguel",
    color: "brown",
    expense: true,
  },
  salary: {
    title: "Salario",
    color: "green",
    expense: false,
  },
  freelance: {
    title: "Freelance",
    color: "yellow",
    expense: false,
  },
  card: {
    title: "Cartão",
    color: "purple",
    expense: true,
  },
  house: {
    title: "Casa",
    color: "#FF4500",
    expense: true,
  },
  animal: {
    title: "Animal",
    color: "gray",
    expense: true,
  },
  payment: {
    title: "Pagamento",
    color: "red",
    expense: true,
  },
};
