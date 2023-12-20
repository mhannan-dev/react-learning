import React, { useState } from 'react';
import styles from './Form.module.css';

const CollectFormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Input User Information</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formLabel}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formLabel}>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>

        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CollectFormData;
