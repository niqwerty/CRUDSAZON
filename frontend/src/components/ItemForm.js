import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [extensionName, setExtensionName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [birthday, setBirthday] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [citizenShip, setCitizenShip] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [tin, setTin] = useState('');
    const [fatherFirstName, setFatherFirstName] = useState('');
    const [fatherLastName, setFatherLastName] = useState('');
    const [fatherMiddleName, setFatherMiddleName] = useState('');
    const [fatherExtensionName, setFatherExtensionName] = useState('');
    const [motherFirstName, setMotherFirstName] = useState('');
    const [motherLastName, setMotherLastName] = useState('');
    const [motherMiddleName, setMotherMiddleName] = useState('');



    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setExtensionName(item.extension_name);
            setAddress(item.address);
            setZipCode(item.zip_code);
            setEmail(item.email);
            setPhone(item.phone);
            setMobile(item.mobile);
            setBirthday(item.birthday);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setCitizenShip(item.citizen_ship);
            setBloodType(item.blood_type);
            setHeight(item.height);
            setWeight(item.weight);
            setTin(item.tin);
            setFatherFirstName(item.father_first_name);
            setFatherLastName(item.father_last_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherExtensionName(item.father_extension_name);
            setMotherFirstName(item.mother_first_name);
            setMotherLastName(item.mother_last_name);
            setMotherMiddleName(item.mother_middle_name);




        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            extension_name: extensionName,
            address,
            zip_code: zipCode,
            email,
            phone,
            mobile,
            birthday,
            place_of_birth: placeOfBirth,
            sex,
            civil_status: civilStatus, 
            citizen_ship: citizenShip,
            blood_type: bloodType,
            height,
            weight,
            tin,
            father_first_name: fatherFirstName,
            father_last_name: fatherLastName,
            father_middle_name: fatherMiddleName,
            father_extension_name: fatherExtensionName,
            mother_first_name: motherFirstName,
            mother_last_name: motherLastName,
            mother_middle_name: motherMiddleName,



        };
        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Name Extension:</label>
                <input type="text" value={extensionName} onChange={(e) => setExtensionName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Telephone No.:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Mobile No.:</label>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Citizen Ship:</label>
                <input type="text" value={citizenShip} onChange={(e) => setCitizenShip(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Tin No.:</label>
                <input type="text" value={tin} onChange={(e) => setTin(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={fatherLastName} onChange={(e) => setFatherLastName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Name Extension:</label>
                <input type="text" value={fatherExtensionName} onChange={(e) => setFatherExtensionName(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={motherFirstName} onChange={(e) => setMotherFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type="text" value={motherLastName} onChange={(e) => setMotherLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={motherMiddleName} onChange={(e) => setMotherMiddleName(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
       
};
export default ItemForm;