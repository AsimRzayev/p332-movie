import { HTTPClient } from ".";

export class FilterService extends HTTPClient{
    getFilters(){
       return this.get("filters")
    }

}