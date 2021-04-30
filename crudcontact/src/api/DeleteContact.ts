import axios from 'axios';
import { ContactDetailModelType, PostPhotoModelType } from '../models/ContactModel';

export const DeleteContact = async (
id: string,
) => {

  const result: any = await axios
    .delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`,
    {
        data: {
            id: id
        }
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
