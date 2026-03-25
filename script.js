// TODOリストを管理する配列
let todos = [];

// ページ読み込み時に実行
window.onload = function() {

  // 保存されてるデータを取得
  const saved = localStorage.getItem("todos");

  if (saved !== null) {
    // JSON文字列 → 配列に変換
    todos = JSON.parse(saved);

    // 画面に表示
    renderTodos();
  }
};

// TODOを追加
function addTodo() {

  const input = document.getElementById("todoInput");
  const text = input.value;

  // 空なら何もしない
  if (text === "") return;

  // 配列に追加
  todos.push(text);

  // 表示更新
  renderTodos();

  // 保存
  saveTodos();

  // 入力欄リセット
  input.value = "";
}

// TODOを描画
function renderTodos() {

  const list = document.getElementById("todoList");

  // 一旦全部消す
  list.innerHTML = "";

  // 配列を1つずつ処理
  todos.forEach(function(todo, index) {

    const li = document.createElement("li");
    li.textContent = todo + " ";

    // 削除ボタン
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

// Enterキー対応
const input = document.getElementById("todoInput");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
