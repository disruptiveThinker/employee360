import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TablesComponent} from './tables.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {SkillTableComponent} from './skill-table/skill-table.component';
import {FeedTableComponent} from './feed-table/feed-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
    },
    {
      path: 'skill-table',
      component: SkillTableComponent,
    },
    {
      path: 'feed-table',
      component: FeedTableComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {
}

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  SkillTableComponent,
  FeedTableComponent,
];
