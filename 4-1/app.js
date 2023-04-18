const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      input: '',
      name: '',
      fullname: '',
      familyname:'',
    };
  },
  // data에 선언한 속성을 이름으로 선언한 함수
  // 해당 속성에 변경이 감지되면 실행
  // 파라미터로 해당 값을 가져옴
  watch:{
    counter(value){
      if(value > 10){
        this.counter = 0
      }
    }
  },
  //메서드는 페이지의 변화가 있으면 전부 재실행 되지만
  //computed는 해당 파라미터의 변경이 감지될 때만 실행함
  //로딩 부하를 줄여준다.(보편적으로 computed를 사용)
  computed:{
    addName(){
      if(this.name === ''){
        return '';
      }
      return this.name  + this.familyname +  '님 '
    }
  },
  methods:{
    add(){
      this.counter += 1
    },
    reduce(){
      this.counter -= 1
    },
    setName(e){
      this.input = e.target.value;
    },
    submitForm(){
      alert('Submitted!')
    },
    confrim(e){
      this.name = this.input
      e.target.value = ''
    }
  }
});

app.mount('#events');
