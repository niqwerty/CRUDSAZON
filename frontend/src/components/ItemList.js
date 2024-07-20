import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
 const [items, setItems] = useState([]);
 useEffect(() => {
 fetchItems();
 }, []);
 
 const fetchItems = async () => {
 try {

 const response = await
axios.get(`http://localhost:8000/api/items/`);
 setItems(response.data);
 } catch (error) {
 console.error('There was an error fetching the items!', error);
 }
 };

 return (
    <div>
        <h1>Items</h1>
    <ul>
     {items.map(item => (
    <li key={item.id}>
      <b>Name:</b> {item.first_name} {item.middle_name} {item.last_name} {item.extension_name} <br></br>
      <b>Address:</b> {item.address} - {item.zip_code} <br></br>
      <b>Email:</b> {item.email} <br></br>
      <b>Telephone:</b> {item.phone} <br></br>
      <b>Mobule No.</b> {item.mobile} <br></br>
      <b>Birthday:</b> {item.birthday} <br></br>
      <b>Place of Birth:</b> {item.place_of_birth} <br></br>
      <b>Sex:</b> {item.sex} <br></br>
      <b>Civil Status:</b> {item.civil_status} <br></br>
      <b>Citizen Ship:</b> {item.citizen_ship} <br></br>
      <b>Blood Type:</b> {item.blood_type} <br></br>
      <b>Height:</b> {item.height} <br></br>
      <b>Weight:</b> {item.weight} <br></br>
      <b>Tin No.:</b> {item.tin} <br></br>
      <b>Father's Name:</b> {item.father_first_name} - {item.father_last_name} - {item.father_middle_name} - {item.father_extension_name} <br></br>
      <b>Mother's Name:</b> {item.mother_first_name} - {item.mother_last_name} - {item.mother_middle_name} <br></br>
        
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
 )
 )}
    </ul>
 </div>
 
 );

};
export default ItemList;