import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  meetup: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;
      case '@meetup/SET_MEETUP_SUCCESS':
        console.log('works');
        draft.meetup = action.payload.meetup;
        break;
      case '@meetup/SET_MEETUP_FAILURE':
        console.log('not works');
        draft.meetup = null;
        break;
      case '@auth/SIGN_OUT':
        draft.meetups = [];
        break;

      default:
        return state;
    }
  });
}
