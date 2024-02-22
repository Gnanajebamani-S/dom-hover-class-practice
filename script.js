function foo() {
  var b = prompt("Enter Your Name");
  var res = document.createElement("span");
  res.innerHTML = `Your Name:${b}`;
  document.body.append(res);
}

var a = document.createElement("div");
a.innerHTML = "This is div";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("onclick", "foo()");
button.innerHTML = "submit";

document.body.append(a, button);
