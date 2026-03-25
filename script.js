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

// TODOリストを保存する配列
let todos = [];

//
function addTodo() {

  const input = document.getElementById("todoInput");
  const text = input.value;

  if (text === "") return;

  // 配列に追加
  todos.push(text);

  // 表示更新
  renderTodos();

  input.value = "";

  // 保存
  saveTodos();
}

// TODOリストを画面に表示する
function renderTodos() {

  const list = document.getElementById("todoList");

  // 一旦全部消す
  list.innerHTML = "";

  // 配列の中身を1つずつ表示
  todos.forEach(function(todo, index) {

    const li = document.createElement("li");
    li.textContent = todo + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.onclick = function() {
      // 配列から削除
      todos.splice(index, 1);

      // 再描画
      renderTodos();

      // 保存
      saveTodos();
    };

    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

// localStorageに保存
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ページ読み込み時に実行
window.onload = function() {

  const saved = localStorage.getItem("todos");

  if (saved !== null) {
    todos = JSON.parse(saved);
    renderTodos();
  }
};

// 入力欄を取得
const input = document.getElementById("todoInput");

// キーボード入力を監視
input.addEventListener("keydown", function(event) {
  // Enterキーが押されたかチェック
  if (event.key === "Enter") {
    // 入力内容をリストに追加s
    addTodo();
  }
});
