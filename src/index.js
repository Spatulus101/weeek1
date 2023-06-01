import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const printButton = document.getElementById("my-button");

const addData = document.getElementById("add-data");

printButton.addEventListener("click", function () {
  console.log("hello world");
  const hi = document.getElementById("hello");
  hi.innerHTML = "My notebook";
});

addData.addEventListener("click", function () {
  const list = document.getElementById("demo");
  const message = document.getElementById("message").value;
  const item = document.createElement("li");

  item.appendChild(document.createTextNode(message));
  list.appendChild(item);
});
