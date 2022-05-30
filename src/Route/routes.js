import BigScreen from '../Pages/BigScreen/index'

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        element: <BigScreen />,
        meta: {
            title: 'Home',
            needLogin: false
        }
    }
]

export default routes