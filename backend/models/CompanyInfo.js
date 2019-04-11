import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let CompanyInfo = new Schema({
    UserName: {
        type: String
    },
    Email: {
        type: String
    },
    FirstName: {
        type: String
    },
    LastName:{
        type: String
    },
    Adress: {
        type: String
    },
    City: {
        type: String
    },
    Country: {
        type: String
    },
    PostalCode: {
        type: Number
    }
});
export default mongoose.model('CompanyInfo', CompanyInfo);