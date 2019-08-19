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

export function newMeetupSuccess(meetup) {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
    payload: { meetup },
  };
}
