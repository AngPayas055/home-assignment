import { useEffect, useState } from "react";
import { getDomainDetails } from "../services/api/tlv";

export function useTlvHook() {

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchLabel, setSearchLabel] = useState<string>("Search");
  const [searchErrorLabel, setSearchErrorLabel] = useState<string>("sd");
  const [isSearchError, setisSearchError] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [domainDetails, setDomainDetails] = useState<any>();
  const [showDomainName, setShowDomainName] = useState(true);
  const [showRegistrar, setShowRegistrar] = useState(true);
  const [showRegistrationDate, setShowRegistrationDate] = useState(true);
  const [showExpirationDate, setShowExpirationDate] = useState(true);
  const [showEstimatedDomainAge, setShowEstimatedDomainAge] = useState(true);
  const [showHostnames, setShowHostnames] = useState(true);
  const [showRegistrantName, setShowRegistrantName] = useState(true);
  const [showTechnicalContactName, setShowTechnicalContactName] = useState(true);
  const [showAdministrativeContactName, setShowAdministrativeContactName] = useState(true);
  const [showContactEmail, setshowContactEmail] = useState(true);

  const handleSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = async () => {
    setSearchLabel("Searching...")
    setIsDisabled(true)
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;
    if (domainPattern.test(searchValue)) {
      try {
        const details = await getDomainDetails(searchValue);
        if(!details.WhoisRecord.dataError){
          setDomainDetails(details);
          setSearchLabel("Search")
          setIsDisabled(false)
        }else{
          setSearchErrorLabel(details.WhoisRecord.dataError)
          setisSearchError(true)
          setTimeout(() => {
            setisSearchError(false);
          }, 2000);
          setSearchLabel("Search")
          setIsDisabled(false)
        }
      } catch (error) {
        console.error("Failed to fetch domain details:", error);
        setSearchErrorLabel("Failed to fetch domain details")
        setisSearchError(true)
        setTimeout(() => {
          setisSearchError(false);
        }, 2000);
        setSearchLabel("Search")
        setIsDisabled(false)
      }
    } else {
      console.error("Invalid domain");
      setSearchLabel("Search")
      setIsDisabled(false)
      setSearchErrorLabel("Invalid domain")
      setisSearchError(true)
      setTimeout(() => {
        setisSearchError(false);
      }, 2000);
    }
  };

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return {
    domainDetails,
    showDomainName,
    setShowDomainName,
    showRegistrar,
    setShowRegistrar,
    showRegistrationDate,
    setShowRegistrationDate,
    showExpirationDate,
    setShowExpirationDate,
    showEstimatedDomainAge,
    setShowEstimatedDomainAge,
    showHostnames,
    setShowHostnames,
    truncateString,
    showRegistrantName,
    setShowRegistrantName,
    showTechnicalContactName,
    setShowTechnicalContactName,
    showAdministrativeContactName,
    setShowAdministrativeContactName,
    showContactEmail,
    setshowContactEmail,
    handleSearchChange,
    handleSearchClick,
    searchValue,
    searchLabel,
    isDisabled,
    searchErrorLabel,
    isSearchError
  };
}
