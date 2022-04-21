/** @name Dependencies */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IState {

}

interface DataRegisterProps {
    user: string,
    password: string
}

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_DATA_REGISTER: DataRegisterProps = {
    user: null,
    password: null
}

class ClientRegister extends React.PureComponent<ChildComponentProps, IState> {
    constructor(props: ChildComponentProps) {
        super(props);
        this.state = {...INITIAL_DATA_REGISTER}
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default withRouter(ClientRegister);