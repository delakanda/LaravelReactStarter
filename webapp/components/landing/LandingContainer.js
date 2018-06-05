import React,{Component} from 'react';

import {LandingPresentation} from './presentations/Main';

export default class LandingContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {

        return (
            <LandingPresentation />
        )
    }

    componentDidMount() {

    }
}