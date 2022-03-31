/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/local_storage.js */ \"./src/modules/local_storage.js\");\n\n\nconst addTodoButton = document.querySelector('.add-todo-button');\nconst todoList = document.querySelector('.todo-list');\n\ndocument.addEventListener('DOMContentLoaded', _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.getTodoFromLocalStorage);\naddTodoButton.addEventListener('click', _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.addTodo);\ntodoList.addEventListener('click', _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.checkOrDelete);\n\n\n//# sourceURL=webpack://JS_ToDo/./src/index.js?");

/***/ }),

/***/ "./src/modules/local_storage.js":
/*!**************************************!*\
  !*** ./src/modules/local_storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"checkOrDelete\": () => (/* binding */ checkOrDelete),\n/* harmony export */   \"existOrNot\": () => (/* binding */ existOrNot),\n/* harmony export */   \"getTodoFromLocalStorage\": () => (/* binding */ getTodoFromLocalStorage),\n/* harmony export */   \"removeTodoFromLocalStorage\": () => (/* binding */ removeTodoFromLocalStorage),\n/* harmony export */   \"saveTodoInLocalStorage\": () => (/* binding */ saveTodoInLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _new_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_todo.js */ \"./src/modules/new_todo.js\");\n\n\nconst todoInput = document.querySelector('.todo-input');\nconst todoList = document.querySelector('.todo-list');\n\nconst existOrNot = () => {\n  let items;\n  if (localStorage.getItem('items') === null) {\n    items = [];\n  } else {\n    items = JSON.parse(localStorage.getItem('items'));\n  }\n  return items;\n};\n\nconst saveTodoInLocalStorage = (item) => {\n  const items = existOrNot();\n\n  items.push(item);\n\n  localStorage.setItem('items', JSON.stringify(items));\n};\n\nfunction addTodo(e) {\n  // prevent form to submitting\n  e.preventDefault();\n\n  (0,_new_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoInput.value);\n\n  // add item todo list to localstorage\n  saveTodoInLocalStorage(todoInput.value);\n\n  // clear Input todo after add todo item\n  todoInput.value = '';\n}\n\nconst getTodoFromLocalStorage = () => {\n  const items = existOrNot();\n\n  items.forEach((item) => {\n    (0,_new_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n  });\n};\n\nconst removeTodoFromLocalStorage = (item) => {\n  const items = existOrNot();\n\n  //  set index item want to delete\n  const itemIndex = item.children[0].innerText;\n\n  // delete element from array with method splice, 1 is number how many element / item we delete\n  items.splice(items.indexOf(itemIndex), 1);\n\n  // refresh data in local storage\n  localStorage.setItem('items', JSON.stringify(items));\n};\n\nconst checkOrDelete = (e) => {\n  const item = e.target;\n  // console.log(e.target)\n\n  // chech item todo list\n  if (item.classList[2] === 'check-btn') {\n    const todo = item.parentElement;\n    todo.classList.toggle('check');\n  }\n\n  // delete item todo list\n  if (item.classList[2] === 'delete-btn') {\n    const todo = item.parentElement;\n    removeTodoFromLocalStorage(todo);\n    todo.remove();\n  }\n};\ntodoList.addEventListener('click', checkOrDelete);\n\n\n//# sourceURL=webpack://JS_ToDo/./src/modules/local_storage.js?");

/***/ }),

/***/ "./src/modules/new_todo.js":
/*!*********************************!*\
  !*** ./src/modules/new_todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoList = document.querySelector('.todo-list');\n\nconst createElements = (value) => {\n  // create div container\n  const todoDiv = document.createElement('div');\n  todoDiv.classList.add('todo');\n\n  // create element li\n  const newTodo = document.createElement('li');\n  newTodo.innerText = value;\n  newTodo.classList.add('todo-item');\n\n  // make newTodo child from todoDiv\n  todoDiv.appendChild(newTodo);\n\n  // create button check\n  const checkButton = document.createElement('button');\n  checkButton.classList.add('fas', 'fa-check', 'check-btn'); // error if use space, so split class with '',\n\n  todoDiv.appendChild(checkButton);\n\n  // create button delete\n  const deleteButton = document.createElement('button');\n  deleteButton.classList.add('fas', 'fa-trash', 'delete-btn');\n  todoDiv.appendChild(deleteButton);\n\n  // make todoDiv child from todoList\n  todoList.appendChild(todoDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createElements });\n\n//# sourceURL=webpack://JS_ToDo/./src/modules/new_todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;