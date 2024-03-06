import axios from "axios";
import { GET_BY_CID_AND_ID_URL } from "../utils/config";

const fetchData = async (data, apiKey) => {
  try {
    const response = await axios.get(GET_BY_CID_AND_ID_URL, {
      params: {
        placeid: data.placeid,
        key: apiKey
      }
    });
    const responseData = response.data;

    const successFilePath = data.successPath + data.id + ".txt";
    const exceptionFilePath = data.exceptionPath + data.id + ".txt";
    const newData = {
      filename: { id: data.id },
      ...responseData
    };
    const mapData = JSON.stringify(newData, null, 2);

    if (responseData.status !== "OK") {
      return {
        type: "exception",
        path: exceptionFilePath,
        data: mapData
      };
    } else {
      return {
        type: "success",
        path: successFilePath,
        data: mapData
      };
    }
  } catch (error) {
    console.error(error);
    return { type: "error", error };
  }
};

module.exports = fetchData;
