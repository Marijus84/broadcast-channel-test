const bc = new BroadcastChannel("name-change");
const title = document.getElementById("title");
const input = document.getElementById("input");

input.onkeyup = (e) => {
  const val = e.target.value;
  title.textContent = "Hello " + val;
  localStorage.setItem("title", val);
  bc.postMessage("update-title");
};
