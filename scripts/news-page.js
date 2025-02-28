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

