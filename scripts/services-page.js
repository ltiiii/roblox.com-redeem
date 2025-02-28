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
        { title: "ПРОЕКТ НОМЕР ПЯТЬ", imageSrc: "./images/services/successful-block-img.png"},
        { title: "ПРОЕКТ НОМЕР ШЕСТЬ", imageSrc: "./images/services/successful-block-img.png"},
        { title: "ПРОЕКТ НОМЕР СЕМЬ", imageSrc: "./images/services/successful-block-img.png" }
    ];

    const container = document.getElementById("projects-container");
    let content = '';

    // Перебираем проекты и создаем блоки
    projects.forEach(project => {
        content += `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.imageSrc}" alt="Project Image">
                </div>
                <div class="project-content">
                    <h2>${project.title}</h2>
                    <p>ПОДРОБНЕЕ→</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = content;
});
