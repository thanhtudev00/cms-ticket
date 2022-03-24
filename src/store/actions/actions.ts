
import {
    SHOW_TICKET,
    GET_TICKET,
    SET_LOADING,
    SET_SUCCESS,
    SET_ERROR,
    Ticket,
} from '../contant/TicketType';

interface ShowTicketAction{
    type: typeof SHOW_TICKET;
    payload: Ticket[];
}

interface GetTicketAction {
    type: typeof GET_TICKET;
    payload: Ticket;
}
interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}
interface SetSuccessAction {
    type: typeof SET_SUCCESS;
    payload: string;
}
interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type TicketAction =
    | ShowTicketAction
    | SetLoadingAction
    | SetSuccessAction
    | SetErrorAction
    | GetTicketAction;