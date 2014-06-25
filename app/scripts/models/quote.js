SgwAdmin.Quote = DS.Model.extend({
  sender: DS.belongsTo('employee'),
  date: DS.attr('string'),
  firstName: DS.attr('string'),
  email: DS.attr('string'),
  pattern: DS.attr('string'),
  size: DS.attr('string'),
  squareFeet: DS.attr('string'),
  squareFootPrice: DS.attr('number'),
  totalCost: DS.attr('number'),
  temperedGass: DS.attr('string'),
  framing: DS.attr('string'),
  misc: DS.attr('string'),
});