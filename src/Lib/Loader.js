import axios from "axios";
import apiRequest from "./apiRequest"

export const singlePageLoader = async({request,params})=>{
    const res =  await apiRequest.get(`./posts/${params.id}`)
    return res.data;
}

export const listloader = async({request,params})=>{
    
    const req = request.url.split('?')[1];
    const res = await apiRequest.get(`./posts/?${req}`)
    return res.data;
}