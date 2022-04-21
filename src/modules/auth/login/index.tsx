
/** @name Dependencies */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IState {

}

interface DataLoginProps {
    user: string,
    password: string
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_DATA_LOGIN: DataLoginProps = {
    user: null,
    password: null
}

class ClientLogin extends React.PureComponent<ChildComponentProps, IState> {
    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {...INITIAL_DATA_LOGIN}
    }

    render() {
        return (
            <div>teste</div>
        )
    }
}

export default withRouter(ClientLogin);