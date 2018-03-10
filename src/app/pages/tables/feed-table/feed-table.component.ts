import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { FeedTableService } from '../../../@core/data/feed-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './feed-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class FeedTableComponent {

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
      posiPoints: {
        title: 'Positive Points',
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
      focusAreas: {
        title: 'Focus Areas',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  mgrSource: LocalDataSource = new LocalDataSource();

  constructor(private service: FeedTableService) {
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
