export default class KanbanAPI {
  static getItems(columId) {
    const colum = read().find((colum) => colum.id === columId);

    if (!colum) {
      return [];
    }

    return colum.itemns;
  }

  static insertItem(columId, content) {
    const data = read();
    const colum = data.find(colum => colum.id == columId);
    const item = {
      id: Math.floor(Math.random() * 100000),
      content
    };

    if (!colum) {
      throw new Error("Coluna nao encontrada");
    }
    colum.itemns.push(item);
    save(data);

    return item;
  }

  static updateitem(itemId, newProps) {
    const data = read();
    const [item, correntColum] = (() => {
      return [1, 2] //MINUTO 26:48 DO VIDEO
    })();
  }
}

function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    return [
      {
        id: 1,
        itemns: [],
      },
      {
        id: 2,
        itemns: [],
      },
      {
        id: 3,
        itemns: [],
      },
    ];
  }

  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}
