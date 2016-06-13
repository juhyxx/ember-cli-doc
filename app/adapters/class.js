import DS from 'ember-data';

export default DS.Adapter.extend({

  findAll() {
    return Ember.$.getJSON("data.json");
  }
});
