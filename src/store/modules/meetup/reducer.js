import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  meetup: null,
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_REQUEST':
        draft.loading = true;
        break;
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        draft.loading = false;
        break;

      case '@meetup/SET_MEETUP_REQUEST':
        draft.loading = true;
        break;
      case '@meetup/SET_MEETUP_SUCCESS':
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;

      case '@meetup/SET_MEETUP_CLEAR_REQUEST':
        draft.loading = true;
        break;
      case '@meetup/SET_MEETUP_CLEAR_SUCCESS':
        draft.meetup = null;
        draft.loading = false;
        break;

      case '@auth/SIGN_OUT':
        draft.meetups = [];
        draft.meetup = null;
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
}
