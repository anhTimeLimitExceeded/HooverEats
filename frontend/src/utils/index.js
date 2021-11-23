import axios from "axios";
import { getIdToken } from "../firebase";

export const postAuthInfo = async () => {
  try {
    await axios.post(
      "https://twiki.csc.depauw.edu/api/auth",
      {},
      {
        headers: {
          authorization: await getIdToken(),
        },
      }
    );
  } catch (e) {
    console.warn(e);
  }
};

export const getAllConversations = async () => {
  try {
    return (
      await axios.get(`https://twiki.csc.depauw.edu/api/conversations`, {
        headers: {
          authorization: await getIdToken(),
        },
      })
    ).data;
  } catch (e) {
    console.warn(e);
  }
};

export const getAllMessagesByConversationId = async (id) => {
  try {
    return (
      await axios.get(`https://twiki.csc.depauw.edu/api/conversations/${id}`, {
        headers: {
          authorization: await getIdToken(),
        },
      })
    ).data;
  } catch (e) {
    console.warn(e);
  }
};

export const getProfile = async () => {
  try {
    return (
      await axios.get("https://twiki.csc.depauw.edu/api/profile", {
        headers: {
          authorization: await getIdToken(),
        },
      })
    ).data;
  } catch (e) {
    console.warn(e);
  }
};

export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(e);
  }
};

export const getLocalStorage = (key) => {
  try {
    const value = JSON.parse(window.localStorage.getItem(key));

    return value;
  } catch (e) {
    console.warn(e);
  }
};