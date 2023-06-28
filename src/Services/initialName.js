export function initialName(username) {
  if (!username) {
    return;
  }
  const nameSeparetor = username.split(" ");
  const initials = nameSeparetor.map((letter) => letter.substr(0, 1));
  return initials[0].concat(initials[1]);
}
