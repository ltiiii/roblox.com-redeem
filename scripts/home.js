document.addEventListener("DOMContentLoaded", function() {
    const logos = [
        "./images/home/image 1.png",
        "./images/home/image 2.png",
        "./images/home/image 3.png",
        "./images/home/image 4.png",
        "./images/home/image 5.png",
        "./images/home/image 6.png",
        "./images/home/image 7.png",
        "./images/home/image 8.png",
        "./images/home/image 9.png",
        "./images/home/image 10.png",
        "./images/home/image 11.png",
        "./images/home/image 12.png",
        "./images/home/image 13.png",
        "./images/home/image 14.png",
        "./images/home/image 15.png",
        "./images/home/image 16.png",
        "./images/home/image 17.png"
    ];

    const container = document.getElementById("logos-container");

    logos.forEach((logo, index) => {
        const colClass = "col-6 col-sm-4 col-md-3 col-lg-2 mb-4";
        const logoElement = `
            <div class="${colClass}" style="${index === 13 ? 'width: 400px;' : ''}">
                <img src="${logo}" alt="Клиент ${index + 1}">
            </div>
        `;
        container.innerHTML += logoElement;
    });
});
