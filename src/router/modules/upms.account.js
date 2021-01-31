import EmptyLayout from '@/layout/empty'

export default  {
    path: 'user',
    redirect: 'user/list',
    component: EmptyLayout,
    meta: {
        title: '账户配置'
    },
    children: [
        {
            path: '',
            name: 'UpmsUserList',
            component: () => import('@/views/umps/user/list'),
            meta: {
                sidebar: false,
                breadcrumb: false

            }
        },
        {
            path: 'detail',
            name: 'UpmsUserDetail',
            component: () => import('@/views/umps/user/detail'),
            meta: {
                sidebar: false,
                breadcrumb: false
            }
        }
    ]
}
