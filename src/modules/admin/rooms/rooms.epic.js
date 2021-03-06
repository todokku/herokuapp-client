import {
  SAVE_ROOM_ATTEMPT,
  saveRoomSuccess,
  ROOMLIST_REQUEST,
  roomListReceived,
  REMOVE_ROOM_ATTEMPT,
  removeRoomSuccess,
  GET_ROOM_ATTEMPT,
  getRoomSuccess,
} from './rooms.actions';
import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { httpPost } from '../../../common/httpCall';

const epicSaveRoomEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SAVE_ROOM_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'add_room',
        data: payload,
      }).pipe(map(result => saveRoomSuccess(result.response))),
    ),
  );
};

const epicGetRoomList = (action$, state$) => {
  return action$.pipe(
    ofType(ROOMLIST_REQUEST),
    switchMap(({ payload }) =>
      httpPost({
        call: 'list_room',
        data: { payload },
      }).pipe(map(result => roomListReceived(result.response))),
    ),
  );
};

const epicRemoveRoom = (action$, state$) => {
  return action$.pipe(
    ofType(REMOVE_ROOM_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'remove_room',
        data: payload,
      }).pipe(map(result => removeRoomSuccess(result.response))),
    ),
  );
};

const epicGetRoomAttempt = (actions$, status$) => {
  return actions$.pipe(
    ofType(GET_ROOM_ATTEMPT),
    switchMap(({ payload }) => 
      httpPost({
        call: 'get_room',
        data: payload,
      }).pipe(map(result => getRoomSuccess(result.response))),
    ),
  );
};

const roomEpic = combineEpics(
  epicSaveRoomEpic,
  epicGetRoomList,
  epicRemoveRoom,
  epicGetRoomAttempt,
);

export default roomEpic;
