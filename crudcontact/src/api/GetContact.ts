import axios from 'axios';
// import { ContactDetailModelType } from '../models/ContactModel';

export const GetContact = async () => {
 
  const result: any = await axios
    .get(`https://simple-contact-crud.herokuapp.com/contact`)
    .then(({ data }) => {
      return data.data;
    })
    .catch((error) =>{
      
    });
  return result;
};
