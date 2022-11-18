const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.getElementById("btn"),
  title: document.querySelector(`#title`),
  contentOne: document.querySelector(`#content1`),
  contentTwo: document.querySelector(`#content2`),
  box: document.getElementById("background"),
  removeButton: document.getElementById("removeBtn"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function object(event) {
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    contentTwo: DOMSelectors.contentTwo.value,
  };
  console.log(Card);
  //create object from values

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `<h2>${Card.title}</h2>`
  );
  clearInput();
  event.preventDefault();
});

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}

DOMSelectors.removeButton.addEventListener("click", function removeCard(event) {
  event.preventDefault();
});
