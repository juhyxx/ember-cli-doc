import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //return this.store.findRecord('cls', params.id);
    return this.store.peekAll('class').toArray().findBy('id', params.id);
  }
});
