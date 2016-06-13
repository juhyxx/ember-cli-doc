import Ember from 'ember';
import computed, { alias, on } from 'ember-computed-decorators';

export default Ember.Component.extend({
  @computed('model.classItems')
  methods(classItems) {
    return classItems.filter((item) => {

      return item.get('itemtype') === 'method';
    })
  },
  @computed('model.classItems')
  properties(classItems) {
    return classItems.filter((item) => {
      return item.get('itemtype') === 'property';
    })
  }
});
