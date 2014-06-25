SgwAdmin.CustomerEditController = Ember.ObjectController.extend({
  needs: 'customer',
  actions: {
    save: function(){
      var self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.customer.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('customer',this.get('model'));
    }
  }
});

