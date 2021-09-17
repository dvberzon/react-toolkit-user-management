import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGroupAction, updateGroupAction } from 'groups/redux/groupsActions';

function GroupForm ({
  group,
  closeModal,
}) {
  const [name, setName] = useState(group ? group.name : '');
  const [description, setDescription] = useState(group ? group.description : '');
  const dispatch = useDispatch();

  const submitForm = () => {
    const updatedGroup = {
      id: group ? group.id : null,
      name,
      description,
    };
    // action is edit or update depending on whether an existing group was passed in
    const action = group ? updateGroupAction : addGroupAction;
    dispatch(action(updatedGroup)).then(closeModal);
  }

  return (
    <div className="group-form">
      <p>
        <label htmlFor="firstName">Name:</label>
        <input
          id="name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="description">Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </p>
      <p>
        <button type="button" onClick={closeModal}>Cancel</button>
        <button type="button" onClick={submitForm}>Submit</button>
      </p>
    </div>
  )
}

export default GroupForm;
