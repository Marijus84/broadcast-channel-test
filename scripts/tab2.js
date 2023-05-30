const bc = new BroadcastChannel("name-change");
const title = document.getElementById("title");

bc.onmessage = (messageEvent) => {
  if (messageEvent.data === "update-title") {
    console.log("Updating title");
    const val = localStorage.getItem("title");
    title.textContent = "Hello " + val;
    document.title = val;
  }
};
