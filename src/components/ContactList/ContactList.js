import ContactItem from "./ContactItem/ContactItem";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.list}>
    {contacts.map((contact) => (
      <ContactItem contact={contact} handleClick={onDelete} key={contact.id} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
