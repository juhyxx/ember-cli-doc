import Model from 'ember-data/model';
import { attr, belongsTo, hasMany } from 'ember-computed-decorators/ember-data';

export default Model.extend({
  @attr('string')
  name,

  @hasMany('class', {
      async: false,
    })
  classes,

});
