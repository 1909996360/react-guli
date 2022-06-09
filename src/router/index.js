
import React, {Component} from 'react'
import {Route,HashRouter, Routes} from 'react-router-dom'
import  routers  from './router'

export default class Router extends Component{
    render(){
        return(
            <HashRouter>
                <Routes>
                    {
                       routers && routers.length ? routers.map((item,index) =>{
                                return(
                                    <Route key={item+index}
                                           exact={item.exact}
                                           path={item.path}
                                           element={<item.component />}
                                    >
                                    </Route>
                                )
                        }) 
                        : null
                    }
                </Routes>
            </HashRouter>
        )
    }
}