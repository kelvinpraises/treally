import * as cryptico from "cryptico-js/dist/cryptico.browser.js";

export function checkPasswordMatch(passPhrase: string, mEK: string[]) {
  const bits = 1024; //2048;
  const rsaKey = cryptico.generateRSAKey(passPhrase, bits);
  const rsaPublicKey = cryptico.publicKeyString(rsaKey);

  const passwordMatch = mEK.some((mek) => mek === rsaPublicKey);

  if (passwordMatch) {
    return { passwordMatch, rsaKey, rsaPublicKey };
  } else {
    return { passwordMatch };
  }
}

export function getPublicKey(passPhrase: string) {
  const bits = 1024; //2048;
  const rsaKey = cryptico.generateRSAKey(passPhrase, bits);
  const rsaPublicKey = cryptico.publicKeyString(rsaKey);

  return rsaPublicKey;
}

export function rsaEncrypt(message: string, rsaPublicKey: string) {
  const result = cryptico.encrypt(message, rsaPublicKey);
  const encryptedMessage = result.cipher;
  return encryptedMessage;
}

export function rsaDecrypt(message: string, rsaKey: any) {
  const result = cryptico.decrypt(message, rsaKey);
  const decryptedMessage = result.plaintext;

  return decryptedMessage;
}
