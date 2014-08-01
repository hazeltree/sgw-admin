SgwAdmin.ClientNewController = Ember.Controller.extend({
  actions: {
    saveClient: function(){
      var self = this;

      var client = this.store.createRecord('client', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email')
      });
      client.save().then(function(){
        self.send('closeModal');
      });
    }
  }
});

