import './datatables_vis.less';
// import './dataTables.css';

import optionsTemplate from './datatables_vis_options.html';
import { VisController } from './datatables_vis_controller';

import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

function DataTablesVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createBaseVisualization({
    name: 'datatables_vis',
    title: 'DataTables',
    icon: 'fa fa-gear',
    description: 'Expandable table',
    category: CATEGORY.OTHER,
    visualization: VisController,
    visConfig: {
      defaults: {
      },
    },
    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 1,
          aggFilter: ['!derivative', '!geo_centroid'],
          defaults: [
            { type: 'count', schema: 'metric' }
          ]
        }, {
          group: 'buckets',
          name: 'segment',
          title: 'Bucket Split',
          min: 0,
          aggFilter: ['!geohash_grid', '!filter']
        }
      ]),
    }
  });
}

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(DataTablesVisProvider);

// export the provider so that the visType can be required with Private()
//export default DataTablesVisProvider;
