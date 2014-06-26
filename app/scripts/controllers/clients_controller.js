SgwAdmin.ClientsController = Ember.ArrayController.extend({
  // Implement your controller here.
  itemController: 'client',
  activeItem: Ember.reduceComputed('@this.@each.isActive', {
    initialValue: null,

    removedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      if (item.get('isActive')) {
        var previousActiveItem = instanceMeta.activeItem;
        if (previousActiveItem) previousActiveItem.set('isActive', false);
        return instanceMeta.activeItem = item;
      }
      return instanceMeta.activeItem = null;
    },

    addedItem: function (accumulatedValue, item, changeMeta, instanceMeta) {
      return instanceMeta.activeItem;
    }
  }),
 
  // Ensures the above add/remove callbacks are called
  setActiveItem: function () {
    this.get('activeItem');
  }.observes('@each.isActive'),
  
  actions: {
    toggleActive: function (controller) {
      controller.toggleProperty('isActive');
    }
  }
});
