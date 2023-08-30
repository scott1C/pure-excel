import { ExcelComponent } from '@core/ExcelComponent';
import { haveToResize } from '@/components/table/table.functions';
import { resizeHandler } from '@/components/table/table.resize';
import { createTable } from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick(e) {
    // console.log(this)
  }

  onMousedown(event) {
    if (haveToResize(event)) {
      resizeHandler(event, this.$root);
    }
  }

  onMousemove() {
    // console.log('moving')
  }
}
