//エラーチェック
'use strict';

var vueModel = new Vue({
    el: '#app',
    data: {
      results: null,        //検索結果を格納
      keyword: '',          //検索キーワードを格納
      params: {
        q: '',              //検索文字列
        part: 'snippet',    //動画のサムネイル画像等
        type: 'video',
        maxResults: '24',   // 最大検索数
        key: ''             //APIキーを指定
      }
    },
    methods: {
      //「Search」ボタンクリック ⇒ 検索実行
      searchMovies: function() {
        this.params.q = this.keyword;
        var self = this;
        axios
          .get('https://www.googleapis.com/youtube/v3/search', {params: this.params})
          .then(function(res) {
            self.results = res.data.items;  //動画情報を格納
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
});
