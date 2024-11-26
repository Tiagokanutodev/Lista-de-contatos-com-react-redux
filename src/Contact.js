import React from 'react';
import styled from 'styled-components';

const ContactCard = styled.div`
  background: #f8f8f8;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #ff5c5c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ff2a2a;
  }
`;

const Contact = ({ contact, onRemove, onEdit }) => {
  return (
    <ContactCard>
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <Button onClick={() => onEdit(contact.id)}>Editar</Button>
        <Button onClick={() => onRemove(contact.id)}>Remover</Button>
      </div>
    </ContactCard>
  );
};

export default Contact;