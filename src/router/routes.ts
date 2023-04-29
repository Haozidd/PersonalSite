export const constantRoutes = [
    {
        path: "/nav",
        name: 'nav',
        component: () => import('@/pages/Nav/index.vue'),
    },
    {
        path:'/resume',
        name:'resume',
        component:()=>import('@/pages/resume/index.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: '/nav'
    }
]