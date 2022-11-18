const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.getElementById("btn"),
  title: document.querySelector(`#title`),
  contentOne: document.querySelector(`#content1`),
  contentTwo: document.querySelector(`#content2`),
  box: document.getElementById("background"),
};
console.log(DOMSelectors);

// function objectCreator() {
DOMSelectors.form.addEventListener("submit", function object(event) {
  console.log(wooh);
  let title = DOMSelectors.title.value;
  let contentOne = DOMSelectors.contentOne.value;
  let contentTwo = DOMSelectors.contentTwo.value;
  const Card = {
    title: title,
    contentOne: contentOne,
    contentTwo: contentTwo,
  };
  console.log(Card);
  //create object from values

  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `<p>${title} ${contentOne} ${contentTwo}</p>`
  );
  console.log(title);
  console.log(contentOne);
  console.log(contentTwo);
  event.preventDefault();
});
//}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}
