

   
const init = {
  contactArray:JSON.parse(localStorage.getItem('contacts') ?? '[]')
};

export default function rootReducer (state = init,action) {

 
if(action.type === 'ADD_CONTACTS'){
  const temp = [...state.contactArray,action.payload]; 
  localStorage.setItem("contacts", JSON.stringify(temp));
  return {
contactArray:temp
  };
}

if(action.type === 'CONTACTS_DELETE'){
  const temp = state.contactArray.filter((contact)=> contact.id !== action.payload ); 
  localStorage.setItem("contacts", JSON.stringify(temp));
  return {
    contactArray:temp   
 }; 

}
if(action.type === 'CONTACTS_EDIT'){
  const temp = state.contactArray
  localStorage.setItem("contacts", JSON.stringify(temp));
  return {
    contactArray:temp   
 }; 

}
return state;
}