SgwAdmin.ClientRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('customer', params.customer_id);
  }
});

