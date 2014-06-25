SgwAdmin.Product = DS.Model.extend({
  stock: DS.attr('string'),
  width: DS.attr('string'),
  height: DS.attr('string'),
  colorChanges: DS.attr('string'),
  details: DS.attr('string'),
  leadChanneling: DS.attr('string'),
  loops: DS.attr('boolean'),
  framing: DS.attr('string'),
  tempered: DS.attr('boolean'),
  needsApproval: DS.attr('boolean')
});