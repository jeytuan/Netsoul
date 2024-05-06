import React, { useState } from 'react';
import styles from './AvatarCreationStudio.module.css';

const AvatarCreationStudio = () => {
  const [avatarName, setAvatarName] = useState<string>('');
  const [avatarDescription, setAvatarDescription] = useState<string>('');
  const [creationAlignment, setCreationAlignment] = useState<string>('Light');
  const [classicElement, setClassicElement] = useState<string>('Fire');

  // Type the event parameter and the setter function
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Avatar Created:', { avatarName, avatarDescription, creationAlignment, classicElement });
    // Call to Azure AI or ComfyUI to generate avatar based on the specifications
  };

  return (
    <div className={styles['avatar-creation-studio']}>
      <h2>Create Your Avatar</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Avatar Name:</label>
          <input type="text" value={avatarName} onChange={handleInputChange(setAvatarName)} required />
        </div>
        <div>
          <label>Avatar Description:</label>
          <textarea value={avatarDescription} onChange={handleInputChange(setAvatarDescription)} required />
        </div>
        <div>
          <label>Creation Alignment:</label>
          <select value={creationAlignment} onChange={handleInputChange(setCreationAlignment)}>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
            <option value="Matter">Matter</option>
          </select>
        </div>
        <div>
          <label>Classic Element:</label>
          <select value={classicElement} onChange={handleInputChange(setClassicElement)}>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Nature">Nature</option>
            <option value="Psy">Psy</option>
            <option value="Electricity">Electricity</option>
          </select>
        </div>
        <button type="submit">Create Avatar</button>
      </form>
    </div>
  );
};

export default AvatarCreationStudio;
