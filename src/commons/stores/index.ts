import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { IPayment } from "../types/generated/types";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: ""
});
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  }
});

export const ModalCancelState = atom({
  key: "ModalCancel",
  default: false
});

export const refetchAtom = atom<{ login: () => void; payment: () => void }>({
  key: "refetchAtom",
  default: { login: () => {}, payment: () => {} }
});

export const userPhoneState = atom({
  key: "userPhoneState",
  default: ""
});

export const userEmailState = atom({
  key: "userEmailState",
  default: ""
});
