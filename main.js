const iMenuMobile = document.getElementById("iMenuMobile");
const menuMobile = document.getElementById("menu-mobile");
const bgMenuMobile = document.getElementById("bg-menu-mobile");
const allTodoCart = document.querySelectorAll(".cart-todo");
const allToDo = document.querySelectorAll(".todo");
// const addItemTodo = document.getElementById("add-item-todo");
const todoModalAdd = document.getElementById("todo-add-modal");
const bgModal = document.querySelector(".__bg-modal");
const formModalAdd = document.getElementById("modal-from-add");
const titleTodoAdd = document.getElementById("title-todo");
const contentTodoAdd = document.getElementById("todo-content");
const allBtnEdit = document.querySelectorAll(".fas.fa-edit");
const allCartTodoTitle = document.querySelectorAll(".cart-todo-title");
const toggleFormEdit = document.getElementById("todo-edit-modal");
const titleEdit = document.getElementById("title-todo-edit");
const contentEdit = document.getElementById("todo-content-edit");
const formEdit = document.getElementById("modal-from-edit");

// Sự kiện kéo thả
let dragStartIndex;
let dragStartItem;
let dragEndItem;


// Xử lý menu mobile
iMenuMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("show-menu-mobile");
  bgMenuMobile.classList.toggle("show-bg-menu-mobile");
});

bgMenuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("show-menu-mobile");
  bgMenuMobile.classList.remove("show-bg-menu-mobile");
});

// Xử lý phần duy chuyển
function changeLocationCartTodo(start, end) {
  try {
    const itemStart = allToDo[start];
    const itemEnd = allToDo[end];
    itemStart.removeChild(dragStartItem);
    itemEnd.appendChild(dragStartItem);
  } catch (err) {}
}

function changeLocationCartTodoItem(start, end) {
  let temp = start;
  start = end;
  end = temp;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  changeLocationCartTodo(dragStart, dragEndIndex);
  //   console.log({ dragEndIndex });
}

function dragEnter() {
  //   console.log("Enter");
}

function dragLeave() {
  //   console.log("Leave");
}

function dragStart() {
  dragStart = +this.closest("div").getAttribute("data-index");
}
function dragStartItemFuc() {
  dragStartItem = this.closest("div");
}

function dragDropItem() {
  dragEndItem = this.closest("div");
  changeLocationCartTodoItem(dragStartItem, dragEndItem);
}

function dragEnterItem() {}
function dragLeaveItem() {}

function addEventListeners() {
  allToDo.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    // item.addEventListener("dragenter", dragEnter);
    // item.addEventListener("dragleave", dragLeave);
  });
  allTodoCart.forEach(item => {
    item.addEventListener("dragstart", dragStartItemFuc);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDropItem);
    item.addEventListener("dragenter", dragEnterItem);
    item.addEventListener("dragleave", dragLeaveItem);
  });
}

addEventListeners();
// Kết thúc sự kiện kéo thả

// Thêm mới

document
  .querySelector(".title.title-add")
  .addEventListener("click", addTodoModal);

function addTodoModal(e) {
  todoModalAdd.classList.add("show");
  bgModal.classList.add("show");
}

// addItemTodo.addEventListener("click", addTodoModal);
bgModal.addEventListener("click", () => {
  todoModalAdd.classList.remove("show");
  bgModal.classList.remove("show");
  toggleFormEdit.classList.remove("show");
});
// Hết thêm mới
formModalAdd.addEventListener("submit", e => {
  e.preventDefault();
  let title = titleTodoAdd.value;
  let content = contentTodoAdd.value;

  formModalAdd.submit()
  // console.log({ title, content });

  // console.log(allTodoCart.length);
});

function handleEdit() {
  let currentParent = this.parentElement;
  let content = currentParent.getAttribute("data-content");
  let id = currentParent.getAttribute("data-id");
  let index = currentParent.getAttribute("data-cart-todo-index");
  let title = currentParent.getAttribute("data-title");
  titleEdit.value = title;
  contentEdit.value = content;
  bgModal.classList.add("show");
  toggleFormEdit.classList.add("show");
  console.log({ content, id, index });
}

allBtnEdit.forEach(item => item.addEventListener("click", handleEdit));

let arrAllTodo = Array.from(allCartTodoTitle);

arrAllTodo.forEach(item => item.addEventListener("dblclick", handleEdit));

formEdit.addEventListener("submit", e => {
  e.preventDefault();
  formEdit.submit();
});
