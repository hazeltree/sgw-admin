SgwAdmin.QuoteNewController = Ember.Controller.extend({
  needs: 'request',
  requested: Ember.computed.alias('controllers.request'),
  glassSquareFootage: function() {
    return ( (parseInt(this.get('requested.width'))*parseInt(this.get('requested.height'))) / 12 ); 
  }.property('requested.width','requested.height'),
  actions: {
    saveQuote: function(){
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

