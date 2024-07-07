"use client";
import React from "react";
import { useTlvHook } from "../hooks/useTlv";

export default function Tlv() {
  const { domainDetails } = useTlvHook();

  return (
    <div className="p-2">
      <div className=" ps-4 border border-gray-200 rounded dark:border-gray-700 pt-3 mb-3">        
        <h3 className="text-xl mb-2">Domain Information</h3>
        <div className="flex items-center flex-wrap mb-5">
          <div className="flex items-center me-2">
            <input id="domainName" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Domain Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="registrar" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registrar</label>
          </div>
          <div className="flex items-center me-2">
            <input id="registrationDate" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registration Date</label>
          </div>
          <div className="flex items-center me-2">
            <input id="expirationDate" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiration Date</label>
          </div>
          <div className="flex items-center me-2">
            <input id="estimatedDomainAge" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estimated Domain Age</label>
          </div>
          <div className="flex items-center me-2">
            <input id="hostnames" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hostnames</label>
          </div>
        </div>
      </div>
      
      <div className=" ps-4 border border-gray-200 rounded dark:border-gray-700 pt-3 mb-3">        
        <h3 className="text-xl mb-2">Contact Information</h3>
        <div className="flex items-center flex-wrap mb-5">
          <div className="flex items-center me-2">
            <input id="registrantName" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registrant Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="technicalContactName" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Technical Contact Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="administrativeContactName" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrative Contact Name</label>
          </div>
          <div className="flex items-center me-2">
            <input id="contactEmail" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact Email</label>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Domain..." required />
          <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>
      {domainDetails ? (
        <pre>{JSON.stringify(domainDetails, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}