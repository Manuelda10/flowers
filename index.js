(function () {
    var numOfFlowers = 2;
    var growGarden = function () {
        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
        var positions = [];
        function getNum() {
            var pos = getRandomArbitrary(0, 100);
            for (var x = 0; x < positions.length; x++) {
                if (pos > positions[x] - 3 && pos < positions[x] + 3) {
                    return false;
                }
            }
            positions.push(pos);
        }
        while (positions.length < numOfFlowers) {
            getNum();
        }
        var more = setInterval(function () {
            var flwr = document.createElement("div");
            var dim = getRandomArbitrary(30, 80);
            var leftPos = positions[0];
            positions.shift();
            flwr.classList.add("sunflwr");
            flwr.innerHTML = `<div class="sunflwr__leaf--left"></div>
            <div class="sunflwr__leaf--right"></div>
            <div class="sunflwr__stem"></div>
            <div class="sunflwr__center"></div>
            <div class="sunflwr__pedal--1"></div>
            <div class="sunflwr__pedal--2"></div>
            <div class="sunflwr__pedal--3"></div>
            <div class="sunflwr__pedal--4"></div>
            <div class="sunflwr__pedal--5"></div>
            <div class="sunflwr__pedal--6"></div>
            <div class="sunflwr__pedal--7"></div>
            <div class="sunflwr__pedal--8"></div>
            <div class="sunflwr__pedal--9"></div>
            <div class="sunflwr__pedal--10"></div>
            <div class="sunflwr__pedal--11"></div>
            <div class="sunflwr__pedal--12"></div>`;
            flwr.style.left = "".concat(leftPos, "vw");
            flwr.style.height = "".concat(dim, "vmin");
            flwr.style.width = "".concat(dim, "vmin");
            flwr.style.zIndex = 100 - dim;
            flwr.style.filter = "saturate(".concat(getRandomArbitrary(70, 100), "%) brightness(").concat(getRandomArbitrary(80, 150), "%)");
            document.querySelector("body").appendChild(flwr);
        }, 150);
        setTimeout(function () {
            window.clearInterval(more);
        }, numOfFlowers * 150);
    };
    document.body.addEventListener("click", function () {
        growGarden();
    });
})();