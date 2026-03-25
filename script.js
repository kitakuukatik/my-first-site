function changeMessage() {
  document.getElementById("message").textContent = "よくできました！";
}

function showName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").textContent = name + " さん、こんにちは！";
}

let count = 0;

function countUp() {
  count++;
  document.getElementById("count").textContent = count;
}

function resetCount() {
  count = 0;
  document.getElementById("count").textContent = count;
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value;

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text + " ";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  deleteButton.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteButton);

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
