SgwAdmin.OrderEditController = Ember.ObjectController.extend({
  actions: {
    deleteOrder: function() {
      var controller = this, order = this.get('model');
      order.deleteRecord();
      order.save().then(function(){
        controller.transitionTo('orders');
      });
    }
  }
});
