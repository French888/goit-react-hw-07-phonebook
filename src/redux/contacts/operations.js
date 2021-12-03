import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// let axiosConfig = {
//   headers: {
//     method: "POST",
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Access-Control-Allow-Origin": "*",
//   },
// };
axios.defaults.baseURL = "https://61a9f5a7bfb110001773efdd.mockapi.io";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const operations = { addContacts, deleteContacts, fetchContacts };

export default operations;
