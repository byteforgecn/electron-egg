/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  // {
  //   path: '/',
  //   name: 'Example',
  //   redirect: { name: 'ExampleHelloIndex' },
  //   children: [
  //     {
  //       path: '/example',
  //       name: 'ExampleHelloIndex',
  //       component: () => import('@/views/example/hello/Index.vue')
  //     },
  //   ]
  // },
  {
    path: '/',
    name: 'Home',
    component: import('@/views/main/Home.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: import('@/views/main/Setting.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: import('@/views/main/About.vue'),
  },
  {
    path: '/language',
    name: 'Language',
    component: import('@/views/main/Language.vue'),
  },
]

export default constantRouterMap
