export class HTTPClient{
   
    #baseUrl="http://localhost:4000";
     async get(url){
       let resp=await fetch(`${this.#baseUrl}/${url}`);
       let data=await resp.json();
       return data;
    }

}