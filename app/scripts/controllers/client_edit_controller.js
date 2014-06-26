SgwAdmin.ClientEditController = Ember.ObjectController.extend({
  needs: 'customer',
  actions: {
    save: function(){
      var self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.client.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('client',this.get('model'));
    }
  }
});

