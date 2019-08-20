import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;

      case '@auth/SIGN_OUT':
        draft.meetups = [];
        break;

      default:
        return state;
    }
  });
}
