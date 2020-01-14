/*
const changeColor = 'CHANGE-COLOR',
    changeHeight = 'CHANGE-HEIGHT';

let store = {
    _state: {
        color: '',
        height: ''
    },

    color() {
        document.addEventListener('input', e => {

            const circle = document.querySelector('.circle'),
                inputColor = document.querySelector('input[placeholder ="color"]');

            circle.style.backgroundColor = inputColor.value;
        });
    },
    height() {
        document.addEventListener('input', e => {

            const circle = document.querySelector('.circle'),
                inputHeight = document.querySelector('input[placeholder ="height"]');

            circle.style.height = inputHeight.value + 'px';

            if (inputHeight.value === '') {
                circle.style.height = 100 + 'px';
            }

        });
    },
};

export default store;

/!*document.addEventListener('input', e => {

    const circle = document.querySelector('.circle'),
        inputColor = document.querySelector('input[placeholder ="color"]'),
        inputHeight = document.querySelector('input[placeholder ="height"]');

    circle.style.backgroundColor = inputColor.value;
    circle.style.height = inputHeight.value + 'px';

    if (inputHeight.value === '') {
        circle.style.height = 100 + 'px';
    }

});*!/


*/
