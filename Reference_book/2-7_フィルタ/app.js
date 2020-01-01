var items = [
    {
      name:'鉛筆',
      price: 300,
      quantity: 1
    },
    {
      name:'ノート',
      price: 400,
      quantity: 1
    },
    {
      name:'消しゴム',
      price: 500,
      quantity: 2
    },
  ]
  
  var vm = new Vue({
    el: '#app',
    data: { // dataプロパティ
    items: items
    },
    filters: { // この節で追加したフィルタの定義
      numberWithDelimiter: function (value) {
        if (!value) {
          return '0'
        }
        return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      }
    }
  })
  
  // JSFiddleでコンソールからvmにアクセスするための対応
  window.vm = vm