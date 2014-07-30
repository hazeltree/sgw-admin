SgwAdmin.RequestEditController = Ember.ObjectController.extend({
  actions: {
    deleteRequest: function() {
      var controller = this, request = this.get('model');
      request.deleteRecord();
      request.save().then(function(){
        controller.transitionTo('requests');
      });
    }
  }
});