import axios from "axios";

export const sendReq = async (data) => {
  let start = Date.now();

  try {
    let res = await axios({
      url: data.url,
      method: data.method,
      data: data.body ? JSON.parse(data.body) : {},
    });

    return {
      status: res.status,
      time: Date.now() - start,
      data: res.data,
    };
  } catch (err) {
    return { error: "error" };
  }
};