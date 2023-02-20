const { useState } = require('react');

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
};
export default useInputs;
