interface IState {
    user: string | null,
        password: string | null
}

interface IAction {
    value: any,
    type: string,
    obj?: string | undefined,
    attr: string | undefined,
    payload?: any | undefined
}

export const reducer = (state: IState, action: IAction) => {
    return state;
}