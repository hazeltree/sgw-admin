SgwAdmin.Router.map(function () {
  this.resource('clients');
  this.resource('orders', function(){
  	this.resource('order', { path: '/:order_id' });
  });
  this.resource('quotes', function(){
  	this.resource('quote', { path: '/:quote_id' });
  });
  this.resource('requests', function(){
  	this.resource('request', { path: '/:request_id' });
  });
});
