export function signReqeust(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    password: { email, password },
  };
}

export function signSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    password: { token, user },
  };
}
