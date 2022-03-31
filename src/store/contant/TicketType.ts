
export const SHOW_TICKET = "SHOW_TICKET";
export const GET_TICKET = "GET_TICKET";
export const SET_LOADING = "SET_LOADING";
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_ERROR = "SET_ERROR";

export interface Ticket {
    // id: string,
    code: string,
    ticketNumber: number,
    event: string,
    status: string,
    inDate: string,
    outDate: string,
    port: string,
    isChecking: boolean,
    type: string
}

export interface ComboTicket {
    codeCB: string,
    inDateCB: string,
    outDateCB: string,
    nameCB: string,
    priceCB: string,
    priceTicket: string,
    statusCB: string,
}

export interface TicketState {
    ticket: Ticket | null,
    tickets: Array<Ticket>,
    loading: boolean,
    error: string,
}
