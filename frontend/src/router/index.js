import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue'),
    props: {
      recentServices: [
        {
          _id: 1,
          name: 'Service 1',
          status: 'active',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          _id: 2,
          name: 'Service 2',
          status: 'inactive',
          description:
            'Sed do eiusmod tempor incididunt ut labore'
        },
        {
          _id: 3,
          name: 'Service 3',
          status: 'active',
          description:
            'Ut enim ad minim veniam, quis nostrud'
        },
        {
          _id: 4,
          name: 'Service 4',
          status: 'inactive',
          description:
            'Duis aute irure dolor in reprehenderit in'
        },
        {
          _id: 5,
          name: 'Service 5',
          status: 'active',
          description:
            'Excepteur sint occaecat cupidatat non proident'
        }
      ]
    }
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/manageservices',
    name: 'manageservices',
    component: () => import('../components/manageServices.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
