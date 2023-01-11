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
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    url: DOMSelectors.contentTwo.value,
  };
  cardCreator();
  insertHTML(Card);
  clearInput();
  event.preventDefault();
});

function cardCreator() {
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    url: DOMSelectors.contentTwo.value,
  };
  return Card;
}

function insertHTML(x) {
  DOMSelectors.output.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `
    <div class="display-card" id="display-card">
    <img class="display-img" src="${x.url}">
    <h2 class="display-artist">${x.title}</h2>
    <h3 class="display-album">${x.contentOne}</h3>
     <button class="remove" id="removeBtn" type="button" "on click">Remove</button>
</div>
`
  );
  let button = document.querySelectorAll(".remove");
  let div = document.querySelectorAll(".display-card");
  button.addEventListener("click", function removeCard(event) {
    button.closest("div").remove();
    event.preventDefault();
  });
}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}
