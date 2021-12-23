import { add, sub } from "./calc";
import("./index.css");

// const img = require("./download.png").default;
console.log(add(4, 5));
console.log(sub(4, 5));

let h1 = document.createElement("h1");
h1.innerText = "Webpack - Note Taking ";
h1.classList.add("redcolor");

let logo = document.createElement("img");
logo.src = require("./download.png").default;
console.log(logo);

let inp = document.createElement("textarea");
inp.id = "note";
// inp.type = "text";
inp.classList.add("ip");
inp.placeholder = "type note here..";

let btn = document.createElement("button");
btn.addEventListener("click", addnote);
btn.innerText = "Add";
btn.classList.add("addbtn");

var notes_div = document.createElement("div");
notes_div.classList.add("list");
notes_div.id = "notes_list";

document.getElementById("root").append(logo, h1, inp, btn, notes_div);

function addnote() {
  let note = document.getElementById("note").value;
  let p = document.createElement("h5");
  p.innerText = note;
  console.log(p);
  let list = document.getElementById("notes_list");
  list.appendChild(p);
}
