const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementsByClassName("title"),
  content1: document.getElementsByClassName("content1"),
  content2: document.getElementsByClassName("content2"),
  box: document.getElementById("background"),
};
console.log(DOMSelectors);

DOMSelectors.button.addEventListener("click", function () {
  let title = DOMSelectors.title.value;
  let content1 = DOMSelectors.content1.value;
  let content2 = DOMSelectors.content2.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `${title} ${content1} ${content2}`
  );
  console.log(title);
  console.log(content1);
  console.log(content2);
  event.preventDefault();
});
