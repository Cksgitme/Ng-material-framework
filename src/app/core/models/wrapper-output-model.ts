export class WrapperOutputModel<T> {
    userGuid:string | null;
    companyGuid:string | null;
    accessToken:string;
    statusCode: string;
    statusMessage: string;
    data: T;
    constructor(data: T) {
        this.userGuid = null;
        this.companyGuid= null;
        this.accessToken = '';
        this.statusCode = '';
        this.statusMessage = '';
        this.data = data;
    }
}