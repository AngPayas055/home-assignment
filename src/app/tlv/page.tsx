"use client";
import React from "react";
import { useTlvHook } from "../hooks/useTlv";
import styles from './Tlv.module.css'

export default function Tlv() {
  const {
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
  } = useTlvHook();

  return (
    <div className={styles.tlvCont}>
      <span className="m-5">        
        <h2 className="text-2xl">TLV300- Home Assignment for Frontend Developer</h2>
        <h5>-A frontend interface to interact with the Whois API.</h5>
        <h5>-This app allows users to retrieve essential details about a given domain.</h5>
        <p className="mt-5">Crafted with care by: Jmendiola</p>
      </span>
      <div className=" ps-4 border border-gray-200 rounded dark:border-gray-700 pt-3 mb-3">
        <h3 className="text-xl mb-2">Domain Information filter</h3>
        <div className="flex items-center flex-wrap mb-5">
          <div className="flex items-center me-2">
            <input
              id="domainName" checked={showDomainName} onChange={(e) => setShowDomainName(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Domain Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="registrar" checked={showRegistrar} onChange={(e) => setShowRegistrar(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Registrar</label>
          </div>
          <div className="flex items-center me-2">
            <input id="registrationDate" checked={showRegistrationDate} onChange={(e) => setShowRegistrationDate(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Registration Date</label>
          </div>
          <div className="flex items-center me-2">
            <input id="expirationDate" checked={showExpirationDate} onChange={(e) => setShowExpirationDate(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Expiration Date</label>
          </div>
          <div className="flex items-center me-2">
            <input id="estimatedDomainAge" checked={showEstimatedDomainAge} onChange={(e) => setShowEstimatedDomainAge(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Estimated Domain Age</label>
          </div>
          <div className="flex items-center me-2">
            <input id="hostnames" checked={showHostnames} onChange={(e) => setShowHostnames(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium">Hostnames</label>
          </div>
        </div>
      </div>

      <div className=" ps-4 border border-gray-200 rounded dark:border-gray-700 pt-3 mb-3">
        <h3 className="text-xl mb-2">Contact Information filter</h3>
        <div className="flex items-center flex-wrap mb-5">
          <div className="flex items-center me-2">
            <input id="registrantName" checked={showRegistrantName} onChange={(e) => setShowRegistrantName(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registrant Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="technicalContactName" checked={showTechnicalContactName} onChange={(e) => setShowTechnicalContactName(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Technical Contact Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="administrativeContactName" checked={showAdministrativeContactName} onChange={(e) => setShowAdministrativeContactName(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrative Contact Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="contactEmail" checked={showContactEmail} onChange={(e) => setshowContactEmail(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact Email</label>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">        
        <div className="max-w-md w-full me-3 mb-3">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{searchLabel}</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input value={searchValue} onChange={handleSearchChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Domain..." required />
            <button onClick={handleSearchClick} disabled={isDisabled} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {searchLabel}
            </button>
          </div>
        </div>
        {isSearchError &&         
        <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{searchErrorLabel}</div>
        </div>
        }
      </div>
      {domainDetails ? (
        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {showDomainName && <th scope="col" className="px-6 py-3">Domain Name</th>}
                {showRegistrar && <th scope="col" className="px-6 py-3">Registrar Name</th>}
                {showRegistrationDate && <th scope="col" className="px-6 py-3">Registration Date</th>}
                {showExpirationDate && <th scope="col" className="px-6 py-3">Expiration Date</th>}
                {showEstimatedDomainAge && <th scope="col" className="px-6 py-3">Estimated Domain Age</th>}
                {showHostnames && <th scope="col" className="px-6 py-3">Hostnames</th>}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {showDomainName && <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{domainDetails.WhoisRecord.domainName}</td>}
                {showRegistrar && <td className="px-6 py-4">{domainDetails.WhoisRecord.registrarName}</td>}
                {showRegistrationDate && <td className="px-6 py-4">{domainDetails.WhoisRecord.createdDate}</td>}
                {showExpirationDate && <td className="px-6 py-4">{domainDetails.WhoisRecord.expiresDate}</td>}
                {showEstimatedDomainAge && <td className="px-6 py-4">{domainDetails.WhoisRecord.estimatedDomainAge}</td>}
                {showHostnames && <td className="px-6 py-4">{truncateString(domainDetails?.WhoisRecord?.nameServers?.hostNames?.join(', ') || '-', 25)}</td>}
              </tr>
            </tbody>
          </table>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {showRegistrantName && <th scope="col" className="px-6 py-3">Registrant Name</th>}
                {showTechnicalContactName && <th scope="col" className="px-6 py-3">Technical Contact Name</th>}
                {showAdministrativeContactName && <th scope="col" className="px-6 py-3">Administrative Contact Name</th>}
                {showContactEmail && <th scope="col" className="px-6 py-3">Contact Email</th>}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {showRegistrantName && <td className="px-6 py-4">{domainDetails.WhoisRecord.registrarName}</td>}
                {showTechnicalContactName && <td className="px-6 py-4">{domainDetails.WhoisRecord.technicalContact.organization}</td>}
                {showAdministrativeContactName && <td className="px-6 py-4">{domainDetails.WhoisRecord.administrativeContact.organization}</td>}
                {showContactEmail && <td className="px-6 py-4">{domainDetails.WhoisRecord.contactEmail}</td>}
              </tr>
            </tbody>
          </table>
        </div>


      ) : (
        <p></p>
      )}
    </div>
  );
}