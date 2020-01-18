const state = {
    el: '#app',
    _circle: {
        backgroundColor: 'blue',
        height: ''
    },

    changeHeight() {
        return {
            'height': this.height
        }
    },

    changeBackgroundColor() {
        return {
            'backgroundColor': this.backgroundColor
        }
    },
};

export default state;


