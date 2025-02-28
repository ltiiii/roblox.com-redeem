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

fetch('services.html')
    .then(response => response.text())
    .then(data => {

        const servicesData = [
            {title: "ТОРЖЕСТВЕННЫЕ МЕРОПРИЯТИЯ", imageSrc: "../images/services/first-img.png"},
            {title: "СПОРТИВНЫЕ МЕРОПРИЯТИЯ", imageSrc: "../images/services/second-img.png"}
        ];

        const container = document.getElementById('services-container');

        let content = '';

        for (let i = 0; i < 4; i++) {
            content += `
      <div class="our-services-blocks-one">
        <div class="our-services-left-block">
          <div class="img-block">
            <img src="${servicesData[0].imageSrc}" alt="">
            <div class="text-overlay">${servicesData[0].title}</div>
            <div class="button-overlay"><a href="./services-page.html">ПОДРОБНЕЕ→</a></div>
          </div>
        </div>
        <div class="our-services-right-block">
          <div class="img-block">
            <img src="${servicesData[1].imageSrc}" alt="">
            <div class="text-overlay">${servicesData[1].title}</div>
            <div class="button-overlay"><a href="./services-page.html">ПОДРОБНЕЕ→</a></div>
          </div>
        </div>
      </div>
    `;
        }

        container.innerHTML = content;

    })
    .catch(error => console.error('Error:', error));

