$(function() {
  var View = {
    $normal: $('#normal'),
    $reverse: $('#reverse'),
    updateReverse: function() {
      this.$reverse.text(this.$normal.val().reverse());
    }
  };

  var Controller = {
    init: function() {
      View.$normal.focus();
      View.$normal.on('keyup', View.updateReverse.bind(View));
    }
  };

  Controller.init();
})