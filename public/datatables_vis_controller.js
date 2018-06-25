require('datatables.net');
require('datatables.net-dt/css/jquery.datatables.css');

class VisController {
  constructor(el, vis) {
    this.vis = vis;
    this.el = el;

    this.container = document.createElement('div');
    this.container.className = 'myvis-container-div';
    this.el.appendChild(this.container);
  }

  destroy() {
    this.el.innerHTML = '';
  }

  render(visData, status) {
    this.container.innerHTML = '';

    const table = visData.tables[0];
    const metrics = [];
    let bucketAgg;

    if (table) {

      const datatable = document.createElement(`table`);
      datatable.setAttribute("id", "datatable");
      datatable.setAttribute("class", "display")

      console.log(datatable)
      this.container.appendChild(datatable)
      
      $(document).ready(function () {
        $('#datatable').DataTable({
          autoWidth: false,
          scrollX: true,
          data: table.rows,
          columns : table.columns,
        });
      });
    }

    return new Promise(resolve => {
      resolve('when done rendering');
    });
  }
};

export { VisController };
