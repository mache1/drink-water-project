const smallBottles = document.querySelectorAll('.small-bottle');
const remaining = document.querySelector('.remaining-num');
const percent = document.querySelector('.percent');
const reset = document.querySelector('.reset');

smallBottles.forEach((smallBottle, index) => {
    smallBottle.addEventListener('click', () => {
        for (let counter = 0; counter <= index; counter++) {
            smallBottles[counter].classList.add('active');

            const percents = (counter + 1) * 12.5;
            const Lremaining = ((200 - percents * 2) / 100);

            percent.style.zIndex = "1";
            percent.style.height = `${percents}%`;
            percent.innerHTML = `${percents}%`;

            remaining.innerHTML = `${Lremaining}L`;
        }

        for (let counter = index + 1; counter < 8; counter++) {
            smallBottles[counter].classList.remove('active');
        }
    })
})

reset.addEventListener('click', () => {
    smallBottles.forEach((smallBottle, index) => {
        smallBottle.classList.remove('active')
    })

    percent.style.zIndex = "-1";
    percent.style.height = 0;
    percent.innerHTML = 0;

    remaining.innerHTML = '2L';
})