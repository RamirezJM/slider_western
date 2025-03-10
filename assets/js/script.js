(function () {
    "use strict"
    let imgActual = 0;
    const misImg = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"];

    const container = document.getElementById("content");
    const nextBtn = document.getElementById("proxima");
    const prevBtn = document.getElementById("anterior");

    nextBtn.addEventListener("click", function (event) {
        event.preventDefault();

        imgActual++;
        if (imgActual > misImg.length - 1) { imgActual = 0; }

        pasarImg();
    });

    prevBtn.addEventListener("click", function (event) {
        event.preventDefault();

        imgActual--;
        if (imgActual < 0) { imgActual = misImg.length - 1; }

        pasarImg();
    });

    function pasarImg() {
        const nuevaImg = document.createElement("img");
        nuevaImg.src = `assets/img/${misImg[imgActual]}`;
        nuevaImg.className = "fadeinimg";
        container.appendChild(nuevaImg);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }

    }

})();

