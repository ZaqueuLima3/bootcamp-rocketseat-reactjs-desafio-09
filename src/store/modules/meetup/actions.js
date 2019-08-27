export function meetupsRequest() {
  return {
    type: '@meetup/LOAD_MEETUPS_REQUEST',
  };
}

export function meetupsSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function newMeetupRequest(data) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function setMeetupRequest(id) {
  return {
    type: '@meetup/SET_MEETUP_REQUEST',
    payload: { id },
  };
}

export function setMeetupSuccess(meetup) {
  return {
    type: '@meetup/SET_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function setMeetupClearRequest() {
  return {
    type: '@meetup/SET_MEETUP_CLEAR_REQUEST',
  };
}

export function setMeetupClearSuccess() {
  return {
    type: '@meetup/SET_MEETUP_CLEAR_SUCCESS',
  };
}
