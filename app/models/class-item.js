import Model from 'ember-data/model';
import { attr, belongsTo, hasMany } from 'ember-computed-decorators/ember-data';

export default Model.extend({
  @attr('string')
  name,

  @attr('string')
  description,

  @attr('string')
  itemtype,

  @belongsTo('class', {
      async: false,
      inverse: 'classItems'
    })
  cls
});
