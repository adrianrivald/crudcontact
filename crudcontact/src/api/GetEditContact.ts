import axios from 'axios';

export const GetEditContact = async (id: string) => {
 
  const result: any = await axios
    .get(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
    .then(({ data }) => {
      return data.data;
    })
    .catch((error) =>{
      
    });
  return result;
};
