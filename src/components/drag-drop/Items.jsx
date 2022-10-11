import { Info, Add, Delete, Edit } from "../card/Buttons";
import { v4 as uuid } from "uuid";

const itemsFromBackend = [
  { id: uuid(), content: <Info /> },
  { id: uuid(), content: <Add /> },
  { id: uuid(), content: <Delete /> },
  { id: uuid(), content: <Edit /> },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "work",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "card",
    items: [],
  },
};

export { itemsFromBackend, columnsFromBackend };
