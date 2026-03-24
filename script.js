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
