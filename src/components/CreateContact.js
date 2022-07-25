import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from 'form-serialize'


function CreatContact({onCreateContact}) {
    function handleSubmit(e) {
        e.preventDefault()
        let values = serializeForm(e.target, {hash :true})
        onCreateContact(values)
    }


  return (
    <div>
      <Link to="/" className="close-create-contact">
        Close
      </Link>

      <form className="create-contact-form" onSubmit={handleSubmit}>
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
            <input type='text' name='name' placeholder="Name"></input>
            <input type='text' name='handle' placeholder="Handle"></input>
            <button>Add contact</button>
        </div>
      </form>
    </div>
  );
}

export default CreatContact;
