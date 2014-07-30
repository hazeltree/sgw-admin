SgwAdmin.QuoteEditController = Ember.ObjectController.extend({
  actions: {
    deleteQuote: function() {
      var controller = this, quote = this.get('model');
      quote.deleteRecord();
      quote.save().then(function(){
        controller.transitionTo('quotes');
      });
    }
  }
});