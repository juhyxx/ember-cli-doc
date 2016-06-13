import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return this.store.findAll('class').then((data) => {
      return data.filter((item) => {
        return !item.get('parentCls');
      });
    });
  }
});
