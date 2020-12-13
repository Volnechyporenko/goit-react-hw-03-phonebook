import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

const ContactItem = ({ contact, handleClick }) => (
  <li className={s.item}>
    <div>
      {contact.name}: {contact.number}
    </div>
    <button className={s.btn} onClick={() => handleClick(contact.id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactItem;
