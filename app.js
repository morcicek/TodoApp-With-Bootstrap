const button = document.querySelector(".btn");
const input = document.querySelector(".form-control");
const container = document.querySelector(".input-area");
button.addEventListener("click", () => {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  doneBtn.classList.add("btn", "btn-outline-success", "ms-auto");
  btn.classList.add("btn", "btn-outline-danger");
  div.classList.add("d-flex", "justify-content-between", "mt-3");
  div.appendChild(li);
  div.appendChild(doneBtn);
  div.appendChild(btn);
  container.appendChild(div);
  li.innerText = input.value;
  input.value = "";

  btn.addEventListener("click", () => {
    div.remove();
  });

  doneBtn.addEventListener("click", () => {
    li.classList.add("text-decoration-line-through", "list");
  });
});
