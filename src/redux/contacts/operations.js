import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://61a1bf426c3b400017e69d7d.mockapi.io/contacts/";
const config = { headers: { "Access-Control-Allow-Origin": "*" } };

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts", config);
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
