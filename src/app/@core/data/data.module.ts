import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';
import { SkillTableService } from './skill-table.service';
import {HttpModule} from '@angular/http';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SkillTableService,
  SmartTableService,
  PlayerService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
