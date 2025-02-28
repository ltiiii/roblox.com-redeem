    fetch('index.html')
    .then(response => response.text())
    .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const aboutBlock = doc.getElementById('about-block');
    const footer = doc.getElementById('footer');

    document.getElementById('about').appendChild(aboutBlock);
    document.getElementById('main').appendChild(footer);
    removeUnwantedBlock();
})
    .catch(error => console.error('Error:', error));

    function removeUnwantedBlock() {
    const unwantedBlock = document.querySelector('.left-down-arrow-about');

    if (unwantedBlock) {
    unwantedBlock.remove();
}
}
