import axios, { AxiosRequestConfig } from "axios";

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const server = `${corsProxy}https://www.whoisxmlapi.com/whoisserver/WhoisService`;//with cors for testing
// const server = `https://www.whoisxmlapi.com/whoisserver/WhoisService`;//with cors for testing
const whoisKey = 'at_62Han0z5ayCSyQlmMVWUiO6agSCpw';

export const getDomainDetails = async (domainNameValue: string) => {
  try {
    const data = {
      domainName: domainNameValue,
      outputFormat: "JSON",
      apiKey: whoisKey,
    };

    const options: AxiosRequestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(server, options);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch domain details");
  }
};
