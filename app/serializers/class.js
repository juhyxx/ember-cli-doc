import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let data = payload;

    let parents = Object.keys(data.classes).reduce((result, clsName) => {
      let cls = data.classes[clsName];

      result[cls.extends] = {
        name: cls.extends
      };
      return result;
    }, {});

    var classes = Ember.merge(parents, data.classes);

    let arr = Object.keys(classes).reduce((result, clsName) => {
      let cls = {
        id: clsName,
        type: 'class',
        attributes: classes[clsName]
      };

      if (cls.attributes.extends) {
        cls.parentCls = cls.attributes.extends;
        cls.module = cls.attributes.module;
        cls.relationships = {
          parentCls: {
            data: {
              id: cls.parentCls,
              type: 'class'
            }
          },
          module: {
            data: {
              id: cls.module,
              type: 'module'
            }
          }
        }
      }

      result.push(cls);

      return result;
    }, []);


    let modules = Object.keys(data.modules).reduce((result, moduleName) => {
      result.push(data.modules[moduleName]);
      return result;
    }, []).map((module) => {
      return {
        type: 'module',
        id: module.name,
        attributes: module,
      }
    });

    let classItems = data.classitems.map((item) => {
      item.cls = item.class;
      return {
        type: 'class-item',
        id: `${item.cls}:${item.name}`,
        attributes: item,
        relationships: {
          cls: {
            data: {
              id: item.cls,
              type: 'class'
            }
          }
        }
      }
    });


    let out = {
      data: arr,
      included: [].concat(modules, classItems)
    };

    return out;
  }
});
