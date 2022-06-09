import Home from '../views/home/home'
import Login from '../views/login/login'

const routers = [
    {
        path:'/',
        component:Login,
        exact:true
    },
    {
        path:'/Home',
        component:Home,
    }
]


export default routers