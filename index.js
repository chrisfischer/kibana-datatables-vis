
export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'datatables_vis',
    uiExports: {
      visTypes: [
        'plugins/datatables_vis/datatables_vis'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

  });
};
