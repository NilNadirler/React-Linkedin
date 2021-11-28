import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


export default function Sidebar() {

    const user= useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you </p>
                    <p className="sidebar__statNumber">2,543</p>

                </div>
                <div className="sidebar__stat">
                    <p> Views on Post </p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('devel')}
            </div>

        </div>
    )
}
