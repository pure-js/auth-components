export function getUserData(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponseData(res));
}

function authorize() {
  if (localStorage.jwt) {
    getUserData(localStorage.jwt)
      .then((res) => {
        console.log('response: ', res);
        setUserEmail(res.email);
        setIsLoggedIn(true);
        setIsCheckToken(false);
        navigate('/');
      })
      .catch((err) => console.error(`Ошибка авторизации при входе ${err}`));
  } else {
    setIsLoggedIn(false);
    setIsCheckToken(false);
  }
}
