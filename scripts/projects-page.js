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



document.addEventListener('DOMContentLoaded', () => {
    // Массив с данными проектов
    const projects = [
        {imageSrc: "./images/projects/project-img-second-div.png"},
    ];

    const container = document.getElementById("project-down-carusel");
    let content = '';

    // Перебираем проекты и создаем блоки
    for (let i = 0; i < 4; i++) {
        projects.forEach(project => {
            content += `
           <div class="service-page-div-third-img d-flex">
                <img src="${project.imageSrc}" alt="Проект">
           </div>
        `;

        });
    }

    container.innerHTML = content;
});
