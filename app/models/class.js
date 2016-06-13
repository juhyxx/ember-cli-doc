import Model from 'ember-data/model';
import { attr, belongsTo, hasMany } from 'ember-computed-decorators/ember-data';


export default Model.extend({

  @attr('string')
  name,
  @attr('string')
  description,

  @belongsTo('module', {
      async: false,
      inverse: 'classes'
    })
  module,

  @belongsTo('class', {
      async: false,
      inverse: 'children'
    })
  parentCls,

  @hasMany('class', {
      async: false
    })
  children,

  @hasMany('class-items', {
      async: false
    })
  classItems
});
