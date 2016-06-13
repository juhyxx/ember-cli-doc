import Ember from 'ember';


export default Ember.Route.extend({

  beforeModel() {
    return this.store.findAll('class');
  },

  model() {
    return {
      classes: this.store.peekAll('class').filter((item) => {
        return !item.get('parentCls');
      }),
      modules: this.store.peekAll('module')
    }

  }
});
