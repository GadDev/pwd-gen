export const genPwd = (pwd_length) => {
  const CHARS =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()#_";
  const PWD_LENGTH = pwd_length;
  let result = "";

  for (let i = 0; i < PWD_LENGTH; i++) {
    let randomChar = Math.floor(Math.random() * CHARS.length);
    result += CHARS.substring(randomChar, randomChar + 1);
  }

  return result;
};
