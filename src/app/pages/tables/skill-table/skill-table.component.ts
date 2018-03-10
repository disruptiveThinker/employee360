import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SkillTableService } from '../../../@core/data/skill-table.service';

@Component({
  selector: 'ngx-skill-table',
  templateUrl: './skill-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SkillTableComponent {

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
      skill: {
        title: 'Skill',
        type: 'string',
      },
      description: {
        title: 'Detailed Description',
        type: 'string',
      },
      domain: {
        title: 'Domain',
        type: 'string',
      },
      rating: {
        title: 'Rating',
        type: 'string',
      },
      certification: {
        title: 'Certification',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SkillTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
