const app = Vue.createApp({
    data() {
        return {
            text: 'xx',
            text2: ''
        }
    },
    methods: {
        setAlret() {
            alert('aa')
        },
        input(e) {
            this.text = e.target.value
        },
        keyup(e){
            this.text2 = e.target.value
        }
    },
});

app.mount('body')