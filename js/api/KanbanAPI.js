export default class KanbanAPI {
  static getitems(columId) {
    const colum = read().find((colum) => colum.id === columId);
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
