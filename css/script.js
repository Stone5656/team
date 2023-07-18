new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
    message: ''
  },
  methods: {
    submitForm() {
      // フォーム送信時の処理を記述する
      console.log('フォームが送信されました');
      console.log('名前:', this.name);
      console.log('メールアドレス:', this.email);
      console.log('メッセージ:', this.message);
    }
  }
});