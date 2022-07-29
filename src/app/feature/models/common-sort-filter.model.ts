import { CommonFilterModel } from "./common-filter.model";

export class CommonSortFilterModel {
    listOfFilter : Array<CommonFilterModel> = new Array<CommonFilterModel>();
    sortBy:string = '';
    sortOrder :string='ASC';
    pageIndex :number=1;        
    documentGuid: string | null = null;        
    searchValue: string = '';
}