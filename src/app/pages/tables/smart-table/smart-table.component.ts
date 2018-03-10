import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      kpi: {
        title: 'KPI',
        type: 'string',
      },
      kpiDesc: {
        title: 'Detailed Description',
        type: 'string',
      },
      empRemarks: {
        title: 'Employee Remarks',
        type: 'string',
      },
      empRating: {
        title: 'Employee Rating',
        type: 'string',
      },
      mgrRemarks: {
        title: 'Manager Remarks',
        type: 'string',
      },
      mgrRating: {
        title: 'Manager Rating',
        type: 'string',
      },
    },
  };

  mgrSettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      kra: {
        title: 'KRA',
        type: 'string',
      },
      kraDesc: {
        title: 'Detailed Description',
        type: 'string',
      },
      empRemarks: {
        title: 'Employee Remarks',
        type: 'string',
      },
      empRating: {
        title: 'Employee Rating',
        type: 'string',
      },
      mgrRemarks: {
        title: 'Manager Remarks',
        type: 'string',
      },
      mgrRating: {
        title: 'Manager Rating',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  mgrSource: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    const mgrData = this.service.getMgrData();
    this.source.load(data);
    this.mgrSource.load(mgrData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
