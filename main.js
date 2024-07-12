let box = document.querySelector(".box");
let container = document.querySelector(".container");
const saveState = (key, data) => {
  const value = JSON.stringify(data);
  localStorage.setItem(key, value);
};
const getState = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};
const removeState = (key) => {
  localStorage.removeItem(key);
};
const render = async () => {
  const data = await getData();
  box.innerHTML = data.map(
    (item) => `
    <div>
      <img width="400" src="${item.url}" alt="img" />
      <h2>${item.title}</h2>
      <button data-id="${item.id}">Add</button>
      <button data-remove-id="${item.id}">Remove</button>
    </div>
  `
  ).join('');
};
box.addEventListener("click", async (e) => {
  if (e.target.dataset.id) {
    const data = await getSingleData(e.target.dataset.id);
    const oldData = getState("product");
    const el = oldData.find((item) => item.id == e.target.dataset.id);
    if (!el) {
      saveState("product", [...oldData, data]);
      renderLocalData();
    }
  } else if (e.target.dataset.removeId) {
    const id = e.target.dataset.removeId;
    const oldData = getState("product");
    const newData = oldData.filter(item => item.id != id);
    saveState("product", newData);
    renderLocalData();
  }
});
const renderLocalData = () => {
  const data = getState("product");
  container.innerHTML = data.map(
    (item) => `<div>
    <img src="${item.url}" alt="" />
  </div>`
  ).join('');
};
  