import { LOAD_ASYNC, INIT_SIDEBAR_ASYNC, PICK_CHANNEL_ASYNC } from '../types/chatroom-types';

export const loadAsync = (payload: any) => ({ type: LOAD_ASYNC, payload });
export const initSidebarAsync = () => ({ type: INIT_SIDEBAR_ASYNC });
export const pickChannel = (payload: any) => ({ type: PICK_CHANNEL_ASYNC, payload });