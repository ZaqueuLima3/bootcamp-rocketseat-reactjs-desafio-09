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

export function updateMeetupRequest() {}

export function getMeetupRequest(id) {
  return {
    type: '@meetup/SET_MEETUP_REQUEST',
    payload: { id },
  };
}

export function getMeetupSuccess(meetup) {
  return {
    type: '@meetup/SET_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function getMeetupFailure() {
  return {
    type: '@meetup/SET_MEETUP_FAILURE',
  };
}
