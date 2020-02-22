const iMenuMobile = document.getElementById("iMenuMobile");
const menuMobile = document.getElementById("menu-mobile");
const bgMenuMobile = document.getElementById("bg-menu-mobile");
const allTodoCart = document.querySelectorAll(".cart-todo");
const allToDo = document.querySelectorAll(".todo");
const addItemTodo = document.getElementById("add-item-todo");
const todoModalAdd = document.getElementById("todo-add-modal");
const bgModal = document.querySelector(".__bg-modal");

// Sự kiện kéo thả
let dragStartIndex;
let dragStartItem;
let dragEndItem;

iMenuMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("show-menu-mobile");
  bgMenuMobile.classList.toggle("show-bg-menu-mobile");
});

bgMenuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("show-menu-mobile");
  bgMenuMobile.classList.remove("show-bg-menu-mobile");
});

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

function addTodoModal(e) {
  todoModalAdd.classList.add("show");
  bgModal.classList.add("show");
}

addItemTodo.addEventListener("click", addTodoModal);
bgModal.addEventListener("click", () => {
  todoModalAdd.classList.remove("show");
  bgModal.classList.remove("show");
});
// Hết thêm mới
