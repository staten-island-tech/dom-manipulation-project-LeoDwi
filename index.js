const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.getElementById("btn"),
  title: document.querySelector(`#title`),
  contentOne: document.querySelector(`#content1`),
  contentTwo: document.querySelector(`#content2`),
  outputTitle: document.getElementById("card title"),
  outputContent1: document.getElementById("card content1"),
  outputContent2: document.getElementById("card content2"),
  box: document.getElementById("background"),
  removeButton: document.getElementById("removeBtn"),
};

DOMSelectors.form.addEventListener("submit", function Card(event) {
  insertHTML();
  clearInput();
  let remove = document.getElementById("removeBtn");
  event.preventDefault();
});

function insertHTML() {
  const Card = {
    title: DOMSelectors.title.value,
    contentOne: DOMSelectors.contentOne.value,
    contentTwo: DOMSelectors.contentTwo.value,
  };
  console.log(Card);
  //create object from values

  /*   let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "display-card");
  DOMSelectors.insertAdjacentElement("afterend", cardDiv); */

  DOMSelectors.outputContent1.insertAdjacentHTML(
    "afterend",
    //make card less poopy
    `
    <div class="display-card">
    <img class="display-img" src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"/>
    <h2 class="display-artist">${Card.title}</h2>
    <h3 class="display-album">${Card.contentOne}</h3>
    <h3 class="display-album">${Card.contentTwo}</h3>
     <button class="remove btn">Remove</button>
</div>
`
  );
}

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.contentOne.value = "";
  DOMSelectors.contentTwo.value = "";
}

/* DOMSelectors.removeButton.addEventListener("click", function removeCard(event) {
  outputTitle.remove();
  outputContent1.remove();
  outputContent2.remove();
  event.preventDefault();
});
 */
