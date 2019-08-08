import { produce } from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;

      default:
        return state;
    }
  });
}
