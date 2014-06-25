SgwAdmin.CustomerController = Ember.ObjectController.extend({
  needs: ['customers'],
  // Implement your controller here.
  toggle: false,
  actions: {
    toggle: function() {
      this.get('controllers.customers.content').forEach(function(item){
        Ember.Logger.log(item.get('toggle'));
        item.set('toggle', false);
      });
      this.set('toggle', true);
    }
  }
});