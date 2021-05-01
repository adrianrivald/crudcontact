import axios from 'axios';
import { ContactDetailModelType, PostPhotoModelType } from '../models/ContactModel';

export const PostAddContact = async (
  editContactForm: ContactDetailModelType,
  file: PostPhotoModelType,
  id: string
) => {
  
  const result: any = await axios
    .post(`https://simple-contact-crud.herokuapp.com/contact`, 
      {
        firstName : editContactForm.firstName,
        lastName: editContactForm.lastName,
        age: editContactForm.age,
        photo: file.preview
      }
    )
    .then(({ data }) => {
      console.log('hasil', data);
      return data;
    })
    .catch((error) =>{
      
    });
  return result;
};
