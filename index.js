const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.getElementById("btn"),
  title: document.querySelector(`#title`),
  contentOne: document.querySelector(`#content1`),
  contentTwo: document.querySelector(`#content2`),
  output: document.getElementById("display"),
  box: document.getElementById("background"),
  removeButton: document.getElementById("removeBtn"),
};

DOMSelectors.form.addEventListener("submit", function card(event) {
  //cardCreator();
  insertHTML();
  clearInput();
  event.preventDefault();
});

function cardCreator() {
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    url: DOMSelectors.contentTwo.value,
  };
}

function insertHTML() {
  DOMSelectors.output.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `
    <div class="display-card" id="display-card">
    <img class="display-img" src= ${url}>
    <h2 class="display-artist">${Card.title}</h2>
    <h3 class="display-album">${Card.contentOne}</h3>
     <button class="remove" id="removeBtn" type="button" "on click">Remove</button>
</div>
`
  );
  let button = document.querySelectorAll(".removeBtn");
  button.forEach((button) => {
    addEventListener("click", function removeCard(event) {
      console.log(button.target);
      event.target.parentElement.remove();
      event.preventDefault();
    });
  });
}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}
