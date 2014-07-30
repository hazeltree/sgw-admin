SgwAdmin.OrderEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('order');
  },
  setupController: function(controller, model){
    controller.set('content', model);
    var shippingCompanies = this.store.findAll('shippingCompany');
    controller.set('shippingCompanies', shippingCompanies);
  }
});

