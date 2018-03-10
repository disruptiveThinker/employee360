import { Injectable } from '@angular/core';

@Injectable()
export class SkillTableService {

  data = [{
    skill: 'Java',
    description: 'Learning curve towards Java',
    domain: 'Java',
    rating: '4',
    certification: 'No',
  }, {
    skill: 'JEE',
    description: 'Learning curve towards JEE',
    domain: 'Java',
    rating: '3',
    certification: 'No',
  }, {
    skill: 'Angular',
    description: 'Learning curve towards Angular',
    domain: 'Ajax',
    rating: '2',
    certification: 'No',
  }];

  /*restUrl: string = 'http://10.184.179.123:8080/employee360/skills/all';

  getSkills() {
    return this.http.get(this.restUrl);
  }*/

  getData() {
    return this.data;
  }
}
