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
  cardCreator();
  insertHTML();
  clearInput();
  event.preventDefault();
});

function cardCreator() {
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    contentTwo: DOMSelectors.contentTwo.value,
  };
}

function insertHTML() {
  DOMSelectors.output.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `
    <div class="display-card" id="display-card">
    <img class="display-img" src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"/>
    <h2 class="display-artist">${Card.title}</h2>
    <h3 class="display-album">${Card.contentOne}</h3>
    <h3 class="display-album">${Card.contentTwo}</h3>
     <button class="remove" id="removeBtn" type="button">Remove</button>
</div>
`
  );
  let button = document.querySelectorAll(".remove");
  button.forEach((button) => {
    addEventListener("click", function removeCard() {
      console.log(button.target);
    });
  });
}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}
