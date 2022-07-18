import { Component } from "react";

export default class PageComponent extends Component{
    increate = () =>{
        console.log('父类的increate方法');
    }
}

export {PageComponent}