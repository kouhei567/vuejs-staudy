
Vue.component('user-login', {
  temlate: '#login-template',
  data: function(){
    return{
      userid: '',
      password:''
    }
  },
  methods: {
    login:function(){
      auth.login(this.userid,this.password);
    }
  }
})

// ログイン周りのダミー
var auth = {
  login: function(id, pass){
    window.alert("userid:" + id + "\n" + "password" + pass);
  }
}

new Vue({
  el: "#login-example"
});

window.vm = vm