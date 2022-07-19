import PropTypes from 'prop-types'

function ListContacts({ contacts, removeContact }) {
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`,
            }}
          ></div>

          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>

          <button className="contact-remove" onClick={()=> removeContact(contact)}>remove</button>
        </li>
      ))}
    </ol>
  );
}

ListContacts.propTypes = {
  contacts : PropTypes.array.isRequired,
  removeContact : PropTypes.func.isRequired
}

export default ListContacts;
