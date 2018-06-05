import React, { Component } from 'react';

import {hideNotification} from './../../actions/Redux';

export default class NotificationBar extends Component  {

    constructor (props) {
        super(props);
        this.timer = 0;
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.notification.display) clearTimeout(this.timer);
    }

    componentDidUpdate () {
        const { display } = this.props.notification;

        if (display) this.timer = setTimeout(() => this.props.dispatch(hideNotification()), 5000);
    }

    render () {
        const { type, content,context, display } = this.props.notification;
        const styles = {
            display: display ? 'block' : 'none', margin: "10px 0px", textAlign: "center"
        }
        const contextCss = context;
        return (

            <div style={styles} className={"alert alert-"+contextCss} role="alert">
                {content}
            </div>
            
        );
    }
}