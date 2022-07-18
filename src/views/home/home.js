import { Component } from "react";
import styles from './home.module.less'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { Button, Menu, Avatar } from 'antd';

export default class Home extends Component {
    // 继承组件
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            meunItems: [
                this.getItem('Navigation One', 'sub2', null, [
                    this.getItem('Option 5', '5',null),
                    this.getItem('Option 6', '6'),
                    this.getItem('Option 7', '7'),
                    this.getItem('Option 8', '8'),
                ], false),
            ],
            tabList: [
                {
                    name: '测试tab1',
                    router: '/'
                },
                {
                    name: '测试tab2',
                    router: '/'
                },
                {
                    name: '测试tab3',
                    router: '/'
                },
            ],
            selectIndex: 0
        }
    }
    // 生命周期
    componentDidMount() {
        console.log('home界面初始化');
    }
    // 点击折叠左侧面板
    toggleCollapsed() {
        const { collapsed } = this.state
        this.setState({
            collapsed: !collapsed
        })
    }
    // 删除某一项tab栏
    deleteTab(index) {
        const list = this.state.tabList
        list.splice(index, 1)
        if(index !== 0 && index === list.length && list.length){
            this.setState({
                selectIndex:index -- 
            })
        }
        this.setState({
            tabList: list
        })
    }
    // 点击某一项tab栏
    changeTab(index){
        this.setState({
            selectIndex:index
        })
    }
    // 格式化menu菜单的方法
    getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    // 点击菜单事件
    clickMenu(val){
        console.log('val',val);
    }

    

    render() {
        const { collapsed, meunItems, tabList, selectIndex } = this.state

        const meunList = (
            <div className={styles.meun}>
                <div className={styles.meunContainer}>
                    <Button
                        type="info"
                        onClick={() => this.toggleCollapsed()}
                        style={{ margin: '10px 0 -20px 20px' }}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        items={meunItems}
                        inlineCollapsed={collapsed}
                        onClick={(val)=> this.clickMenu(val)}
                    />
                </div>
            </div>

        )
        return (
            <div className={styles.container}>
                {/* 左侧 */}
                <div className={collapsed ? styles.leftNone : styles.left}>
                    {meunList}
                </div>
                {/* 右侧 */}
                <div className={styles.right}>
                    {/* 右侧顶部条 */}
                    <div className={styles.top}>
                        <div className={styles.topTitle}>
                            {'xx管理系统'}
                        </div>
                        <div className={styles.avatar}>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                            <div className={styles.name}>{'用户名'}</div>
                        </div>
                    </div>
                    {/* 右侧多栏tab */}
                    {
                        tabList && tabList.length ?
                            <div className={styles.tabs}>
                                {tabList && tabList.length ?
                                    tabList.map((item, index) => {
                                        return (
                                            <div className={selectIndex === index ? (styles.tabItem && styles.tabActive) : styles.tabItem} key={item.name + index} onClick={this.changeTab.bind(this,index)}>
                                                <div>{item.name}</div>
                                                <div className={styles.iconClose}><CloseOutlined onClick={() => this.deleteTab(index)} /></div>
                                            </div>
                                        )
                                    })
                                    : null}
                            </div>
                         : null
                    }
                </div>
            </div>
        )
    }
}

