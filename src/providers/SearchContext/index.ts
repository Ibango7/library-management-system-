import React, { useState } from 'react';
import axios from 'axios';
import { httpClient } from '../httpClients/httpClients';

export const makeLLMRequestRetrieval = (prompt: string): Promise<any> => new Promise((resolve, reject) => {

  axios.get(`http://localhost:3002/llm/retrieval?prompt=${prompt}`)
    .then((response) => {
      resolve(response)
      // console.log("testing data:", response)
    })
    .catch(error => {
      reject(error)
    })
});



//Book/SearchBooks?title=marriage
export const searchBook = (query:string):Promise<any> => new Promise((resolve, reject) =>{

  httpClient.get(`/Book/SearchBooks?title=${query}`)
  .then(response => {
    resolve(response.data);

  }).catch(error =>{
    reject(error);
    console.log("something went wrong with the search",error)
  })

})
