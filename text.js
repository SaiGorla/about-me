var PakaApp = new Vue({
    el: '#PakaApp',
    data: {
      maxLength: 160,
      RemainCountTotal: 160,
      CourseName: '',
      displayError: false
    },
    methods: {
      displayLiveCDown: function() {
        this.RemainCountTotal = this.maxLength - this.CourseName.length;
        this.displayError = this.RemainCountTotal < 0;
      }
    }
  })