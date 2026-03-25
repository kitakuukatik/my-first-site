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

// TODOを追加する
function addTodo() {
  // 入力欄を取得
  const input = document.getElementById("todoInput");
  // 入力内容を取得
  const text = input.value;

  // 未入力なら何もしない
  if (text === "") return;

  // 新しい要素を作る
  const li = document.createElement("li");
  li.textContent = text + " ";

  // 削除ボタン追加
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteButton);

  // リストに追加する
  document.getElementById("todoList").appendChild(li);

  // 入力欄を空にする
  input.value = "";
}

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
