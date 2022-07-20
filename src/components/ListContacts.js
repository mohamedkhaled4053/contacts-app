import PropTypes from "prop-types";
import { useState } from "react";

function ListContacts({ contacts, removeContact }) {
  let [query, setQuery] = useState("");

  function updateQuery(value) {
    setQuery(value.trim());
  }

  let showing =
    query === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          type="text"
          className="search-contacts"
          placeholder="Search Contacts"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        ></input>
      </div>

      {showing.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showing.length} of {contacts.length}
          </span>
          <button onClick={() => setQuery("")}>Show all</button>
        </div>
      )}

      <ol className="contact-list">
        {showing.map((contact) => (
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

            <button
              className="contact-remove"
              onClick={() => removeContact(contact)}
            >
              remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ListContacts;
