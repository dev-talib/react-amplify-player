import React from 'react';
import { Form } from 'react-bootstrap';

const CategorySelect = ({ selectedCategory, onCategoryChange, disabled }) => {
  return (
    <Form.Group controlId="songCategory">
      <Form.Label>Category</Form.Label>
      <Form.Control
        as="select"
        value={selectedCategory}
        onChange={onCategoryChange}
        disabled={disabled}
      >
        <option value="">Select Category</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="hiphop">Hip-Hop</option>
        <option value="jazz">Jazz</option>
        <option value="classical">Classical</option>
        {/* Add more categories as needed */}
      </Form.Control>
    </Form.Group>
  );
};

export default CategorySelect;
