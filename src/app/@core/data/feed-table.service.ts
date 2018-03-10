import { Injectable } from '@angular/core';

@Injectable()
export class FeedTableService {

  data = [{
    posiPoints: 'Assertive',
  }, {
    posiPoints: 'Honest',
  }, {
    posiPoints: 'Optimistic',
  }, {
    posiPoints: 'Creative',
  }];
  mgrData = [{
    focusAreas: 'Training follow up and Deliverables',
  }, {
    focusAreas: 'Stabilize build and deployment environment',
  }, {
    focusAreas: 'Solve Critical problems',
  }, {
    focusAreas: 'Number of Pluralsight Learnings',
  }];

  getData() {
    return this.data;
  }

  getMgrData() {
    return this.mgrData;
  }
}
