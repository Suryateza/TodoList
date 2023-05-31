let btnEl = document.querySelector(".btn");
let inputEl = document.querySelector("#input");
let myListView = document.querySelector("ul");
let resetEl = document.querySelector(".btn2");
let myList = "";
btnEl.addEventListener("click", function () {
  myList = myList + "<li>" + inputEl.value + "</li>" + "<hr>";
  inputEl.value = "";
  myListView.innerHTML = myList;
  console.log(myList);
});
resetEl.addEventListener("click", function () {
  myListView.innerHTML = "";
});
