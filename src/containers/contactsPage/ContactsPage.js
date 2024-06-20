import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [duplicate, setDuplicate] = useState(false);

    useEffect(() => {
        const checkForDuplicate = () => {
            const existingContact = contacts.find((contact) => contact.name === name);
            if(existingContact !== undefined){
                return true;
            }
            return false;
        };

        if(checkForDuplicate()){
            setDuplicate(true);
        }else{
            setDuplicate(false);
        }
    }, [name,contacts,duplicate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( duplicate === false){
            addContact(name,phone,email);
            setName("");
            setPhone("");
            setEmail("");
        }
    };
    
    return(
        <div>
            <section>
                <h2>Add Contact</h2>
                {duplicate ? " - Name Already Exists" : ""}
                <ContactForm 
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr/>
            <section>
                <h2>Contacts</h2>
                <TileList 
                    tiles={contacts}
                />
            </section>
        </div>
    );

};