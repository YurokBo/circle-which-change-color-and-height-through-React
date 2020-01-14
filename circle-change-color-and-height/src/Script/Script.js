const store = {
    el: '#app',
    _state: {
        color: '',
        height: ''
    },

    changeColorHeight: function() {
            return {
                'backgroundColor': this.color,
                'height': this.height
            }
    }

   /* changeHeight() {

    }*/
};

export default store;


