import { Component } from "react";
import styles from './home.module.less'

export default class Home extends Component{
    render(){
        return(
            <div className={styles.lgContainer}>
                <div className={styles.lgTxt}>
                     home界面
                </div>
            </div>
        )
    }
}

