/** @name Dependencies */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
/** @name External */

interface IState {

}

interface ChildComponentProps extends RouteComponentProps<any> {}

class Home extends React.PureComponent<ChildComponentProps, IState> {

    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default withRouter(Home);