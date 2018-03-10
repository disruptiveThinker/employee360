import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    kpi: 'Learning',
    kpiDesc: 'Learning curve torwards Angular',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kpi: 'Utilization',
    kpiDesc: '1665 hrs',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kpi: 'Solve Critical problems',
    kpiDesc: 'Solve 70% of critical problems independently',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kpi: 'Number of Pluralsight Learnings',
    kpiDesc: 'To complete 3 relevant courses in pluralsight ',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }];
  mgrData = [{
    kra: 'Training follow up and Deliverables',
    kraDesc: 'Training follow up and Deliverables',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kra: 'Stabilize build and deployment environment',
    kraDesc: 'Solve VPROS',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kra: 'Solve Critical problems',
    kraDesc: 'Solve 70% of critical problems independently',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }, {
    kra: 'Number of Pluralsight Learnings',
    kraDesc: 'To complete 3 relevant courses in pluralsight ',
    empRemarks: '',
    empRatings: '',
    mgrRemarks: '',
    mgrRatings: '',
  }];

  getData() {
    return this.data;
  }

  getMgrData() {
    return this.mgrData;
  }
}
