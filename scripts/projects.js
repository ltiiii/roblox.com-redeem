const loadAndInsert = (url, id, method) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const block = new DOMParser().parseFromString(data, 'text/html').getElementById(id);
            if (block) document.body[method](block);
            removeUnwantedBlock();
        })
        .catch(error => console.error('Error:', error));
};

loadAndInsert('about.html', 'header', 'prepend');
loadAndInsert('index.html', 'footer', 'append');


function removeUnwantedBlock() {
    const unwantedBlock = document.querySelector('.left-down-arrow-about');

    if (unwantedBlock) {
        unwantedBlock.remove();
    }
}

const projectData = [
    {
        title: "Международный саммит франкофонии в ереване",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: false
    },
    {
        title: "Международный саммит франкофонии в ереване",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: true
    },
    {
        title: "Международный саммит франкофонии в ереване",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: false
    },
    {
        title: "Международный саммит франкофонии в ереване",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... ",
        reverse: true
    }
];



fetch('services.html')
    .then(response => response.text())
    .then(data => {
function generateProjectHTML({ title, descriptionFirst, descriptionSecond, reverse }) {
    return `
      <div class="our-project-div ${reverse ? 'flex-row-reverse' : ''}">
        <div class="project-div-text">
          <h2 class="project-title">${title}</h2>
          <p>${descriptionFirst}</p>
          <p>${descriptionSecond}</p>
          <div class="button-overlay">
            <a href="./projects-page.html">ПОДРОБНЕЕ→</a>
          </div>
        </div>
        <div class="project-div-img">
          <img src="./images/projects/project-img.png" alt="Проект">
        </div>
      </div>
    `;
}

const projectContainer = document.getElementById("project-blocks");
projectData.forEach(project => {
    projectContainer.innerHTML += generateProjectHTML(project);
});
    })
    .catch(error => console.error('Error:', error));