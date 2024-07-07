import axios, { AxiosRequestConfig } from "axios";

const corsProxyMedium = 'https://proxy.cors.sh/';//cors.sh free cors proxy
const xCorsApiKey = 'temp_8aeed4412a20e06790e3d4b3fa91baf0'//generated from https://cors.sh/
const server = `${corsProxyMedium}https://www.whoisxmlapi.com/whoisserver/WhoisService`;//with cors for testing
// const server = `https://www.whoisxmlapi.com/whoisserver/WhoisService`;//without cors proxy
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
        'x-cors-api-key': xCorsApiKey
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
