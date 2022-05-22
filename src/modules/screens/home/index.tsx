/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import {reducer} from "./reducer/useReducer";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_STATE = {
}

const ClientLogin = memo((props: ChildComponentProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div></div>
    )
});

export default withRouter(ClientLogin);