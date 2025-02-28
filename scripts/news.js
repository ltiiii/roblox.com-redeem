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



const newsData = [
    {
        title: "МЕЖДУНАРОДНЫЙ САММИТ ФРАНКОФОНИИ В ЕРЕВАНЕ",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: false
    },
    {
        title: "МЕЖДУНАРОДНЫЙ САММИТ ФРАНКОФОНИИ В ЕРЕВАНЕ",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: true
    },
    {
        title: "МЕЖДУНАРОДНЫЙ САММИТ ФРАНКОФОНИИ В ЕРЕВАНЕ",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ...  ",
        reverse: false
    },
    {
        title: "МЕЖДУНАРОДНЫЙ САММИТ ФРАНКОФОНИИ В ЕРЕВАНЕ",
        descriptionFirst: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотности созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствовать как трейдер.",
        descriptionSecond: "Мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... Так вы не собьетесь с пути, и будете постоянно совершенствоваться как трейдер. мы можем помочь выполнить эти цели. А как же богатство, спросите вы? При ясности ума и грамотно созданной ... ",
        reverse: true
    }
];



fetch('services.html')
    .then(response => response.text())
    .then(data => {
        function generateNewsHTML({ title, descriptionFirst, descriptionSecond, reverse }) {
            const additionalStyles = reverse ? 'style="margin: 20px 350px 150px 0;"' : '';

            return `
      <div class="our-new-div ${reverse ? 'flex-row-reverse' : ''}"  ${additionalStyles}>
        <div class="new-div-text">
          <h2 class="new-title">${title}</h2>
          <p>${descriptionFirst}</p>
          <p>${descriptionSecond}</p>
          <div class="button-overlay">
            <a href="./news-page.html">ПОДРОБНЕЕ→</a>
          </div>
        </div>
        <div class="new-div-img">
          <img src="../images/news/news-img.png" alt="Проект">
        </div>
      </div>
    `;
        }

        const newsContainer = document.getElementById("news-blocks");
        newsData.forEach(news => {
            newsContainer.innerHTML += generateNewsHTML(news);
        });
    })
    .catch(error => console.error('Error:', error));