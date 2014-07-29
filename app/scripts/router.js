SgwAdmin.Router.map(function () {
  this.resource('clients');
  this.resource('orders', function(){
  	this.resource('order', { path: '/:order_id' }, function(){
      this.route('edit');
    });
  });
  this.resource('quotes', function(){
  	this.resource('quote', { path: '/:quote_id' }, function(){
      this.route('edit');
    });
  });
  this.resource('requests', function(){
  	this.resource('request', { path: '/:request_id' }, function(){
      this.route('edit');
    });
  });
});