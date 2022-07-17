export class UserModel {
    companyName: string = '';
    name: string = '';
    email: string = '';
    mobile: string = '';
    empCode: string = '';
    isAdmin: boolean = false;
    employeeGuid!: string;
    companyGuid!: string;
    roleGuid!: string;
    constructor() {
        this.companyName = '';
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.empCode = '';
        this.isAdmin = false;
    }    
}