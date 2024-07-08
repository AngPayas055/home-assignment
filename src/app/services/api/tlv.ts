import axios, { AxiosRequestConfig } from "axios";

const corsProxyMedium = 'https://proxy.cors.sh/';//cors.sh free cors proxy
const server = `${corsProxyMedium}https://www.whoisxmlapi.com/whoisserver/WhoisService`;//with cors for testing
// const server = `https://www.whoisxmlapi.com/whoisserver/WhoisService`;//without cors proxy

export const getDomainDetails = async (domainNameValue: string) => {
  console.log(process.env.NEXT_PUBLIC_X_CORS_API_KEY)
  try {
    const data = {
      domainName: domainNameValue,
      outputFormat: "JSON",
      apiKey: process.env.NEXT_PUBLIC_WHOIS_API_KEY,
    };

    const options: AxiosRequestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'x-cors-api-key': process.env.NEXT_PUBLIC_X_CORS_API_KEY
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
