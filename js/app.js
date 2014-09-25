$(function() {
  var View = {
    $normal: $('#normal'),
    $reverse: $('#reverse'),
    focusInput: function() {
      this.$normal.focus();
    },
    updateReverse: function() {
      this.$reverse.text(this.$normal.val().reverse());
    }
  };

  var Controller = {
    init: function() {
      View.focusInput();
      View.$normal.on('keyup', View.updateReverse.bind(View));
    }
  };

  Controller.init();
})