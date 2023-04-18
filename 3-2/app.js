const app = Vue.createApp({
    data(){
        return{
            name: '박용진',
            age: 29,
            imgPath: 'https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg'
        }
    },
    methods:{
        age5(){
            return this.age + 5;
        },

        randomNum(){
            return Math.random();
        }
    }


});

app.mount('body')