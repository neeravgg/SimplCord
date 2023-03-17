import axios from "axios";

const ServerUrl = process.env.SERVER_URL

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${ServerUrl}/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API ", error);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${ServerUrl}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${ServerUrl}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error);
  }
};

export const getConversation = async (users) => {
  try {
    let response = await axios.post(`${ServerUrl}/conversation/get`, users);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${ServerUrl}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessages API ", error);
  }
};

export const newMessages = async (data) => {
  try {
    return await axios.post(`${ServerUrl}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${ServerUrl}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};
