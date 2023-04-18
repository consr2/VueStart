const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      input: '',
      name: ''
    };
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
