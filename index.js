const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  contentOne: document.getElementById("content1"),
  contentTwo: document.getElementById("content2"),
  box: document.getElementById("background"),
};
console.log(DOMSelectors);

DOMSelectors.button.addEventListener("click", function () {
  let title = DOMSelectors.title.value;
  let contentOne = DOMSelectors.contentOne.value;
  let contentTwo = DOMSelectors.contentTwo.value;
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<p>${title} ${contentOne} ${contentTwo}</p>`
  );
  console.log(title);
  console.log(content1);
  console.log(content2);
  event.preventDefault();
});
