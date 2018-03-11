import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MyColruyt',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'MyView',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'ESS',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'My Documents',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'SDesk',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'SkillSet',
        link: '/pages/tables/skill-table',
      },
      {
        title: 'Health & Fitness',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'MyGroups',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'MyForms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Forms Raised by me',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Forms Raised for me',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Learning&Development',
    icon: 'nb-gear',
    children: [
      {
        title: 'My L&D',
        link: '/pages/components/tree',
      }, {
        title: 'Training Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'PMS',
    icon: 'nb-tables',
    children: [
      {
        title: 'My Goals',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'My Feedback',
        link: '/pages/tables/feed-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
