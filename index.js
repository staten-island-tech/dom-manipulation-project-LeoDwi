const DOMSelectors = {
  form: document.getElementsByClassName("text"),
  button: document.getElementById("btn"),
  title: document.querySelector(`#title`),
  contentOne: document.querySelector(`#content1`),
  contentTwo: document.querySelector(`#content2`),
  box: document.getElementById("background"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function () {
  console.log(wooh);
  let title = DOMSelectors.title.value;
  let contentOne = DOMSelectors.contentOne.value;
  let contentTwo = DOMSelectors.contentTwo.value;
  const Card = {
    title: title,
    contentOne: contentOne,
    contentTwo: contentTwo,
  };
  //create object from values
  event.preventDefault();

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `<p>${title} ${contentOne} ${contentTwo}</p>`
  );
  console.log(title);
  console.log(contentOne);
  console.log(contentTwo);
});

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}
