import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';
const ContactList=(props)=>{

    const renderContacts=props.contacts.map((contact)=>{
        return(
           <ContactCard contact={contact}></ContactCard>
                );
    })
    return(
        <div className="container">
            <h2>
                Contact List
            
            </h2>
<div className="ui celled list" >{renderContacts}
</div>
<Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
</div>
    );
}
export default ContactList;