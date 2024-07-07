import { useEffect, useState } from "react";
import { getDomainDetails } from "../services/api/tlv";

export function useTlvHook() {
  const [domainDetails, setDomainDetails] = useState<any>();

  useEffect(() => {
    const fetchDomainDetails = async () => {
      try {
        const details = await getDomainDetails("google.com");
        setDomainDetails(details);
      } catch (error) {
        console.error("Failed to fetch domain details:", error);
      }
    };

    fetchDomainDetails();
  }, []);

  return { domainDetails };
}
