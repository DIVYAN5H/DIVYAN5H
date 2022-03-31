let bigData = []
fetch("assets/js/projects.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        bigData = data
        myFunc(data)
    })
    .catch(function (err) {
        console.log("error: " + err);
    });

let cardContainer = document.getElementById('projectCards')
function myFunc(data) {
    data.forEach(data => {
        let card = document.createElement('div')
        card.className = 'project-card'
        card.innerHTML = `
    <div class="card-title">
    ${data.title}
    </div>
    <div class="card-description">
    ${data.desc}
    </div>
      <div class="card-button button">
        <a href="${data.url}" target="_blank">
            Live <img src="./assets/images/right.svg" alt="" class="button-logo card-button-logo">
        </a>
      </div>
      `
      cardContainer.append(card)
    });

}