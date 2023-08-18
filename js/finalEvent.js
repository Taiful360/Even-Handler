// option-1
function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handle by function";
}
// option-2
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Text update";
  });
// input field update
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const p = document.getElementById("input-text-display");
  p.innerHTML = inputText;
  inputField.value = "";
});
// textarea
document.getElementById("btn-post").addEventListener("click", function () {
  const commentBox = document.getElementById("new-comment");
  const newComment = commentBox.value;
  console.log(newComment);
  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;
  commentContainer.appendChild(p);
  commentBox.value = "";
});
