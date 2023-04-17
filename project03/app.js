const app = Vue.createApp({
    //객체를 리턴하는 함수(data 고정)
    data(){
        return{
            courseGoal: 'aaaa',
            vueLink: 'http://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 'Learn Vue!';
            } else{
                return 'Master Vue!'
            }
        }

    }    
});

app.mount('#user-goal');

