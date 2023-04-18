const app = Vue.createApp({
    //객체를 리턴하는 함수(data 고정)
    data(){
        return{
            courseGoalA: 'aaaa',
            courseGoalB: '<p>bbbbb</p>',
            vueLink: 'http://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;    
                //원래 자바스크립트 this는 data를 가리키는 것이 아니지만
                //vue 에서는 createVue라는 객체가 data의 객체를 컨테이너로 등록해 놓기 때문에 접근 가능하게 된다
                //vue의 특수한 문법이라고 이해
            } else{
                return this.courseGoalB;
            }
        }

    }    
});

app.mount('#user-goal');

