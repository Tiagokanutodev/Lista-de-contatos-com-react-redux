import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addContact, editContact, removeContact } from './redux/actions';
import Contact from './Contact';
import ContactForm from './ContactForm';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const App = () => {
  const [editContactId, setEditContactId] = useState(null);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    if (editContactId) {
      dispatch(editContact(editContactId, contact));
      setEditContactId(null);  // Limpa o estado após editar
    } else {
      dispatch(addContact({ ...contact, id: Date.now() }));
    }
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setEditContactId(id);  // Apenas atualiza o id do contato para editar
    return contactToEdit;
  };

  const handleRemove = (id) => {
    dispatch(removeContact(id));
  };

  // Verifica se está no modo de edição
  const contactToEdit = editContactId ? contacts.find((contact) => contact.id === editContactId) : null;

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm 
        onSubmit={handleAddContact} 
        initialData={contactToEdit}  // Passa os dados do contato a ser editado, se existir
      />
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      ))}
    </Container>
  );
};

export default App;
