const { useState } = require('react');

/*
custom hook
    hook 함수를 사용하여 정의한 함수
    중요한건, 어디서나 재사용될 수 있어야함
*/

const useInput = (initialValues) => {
  const [value, setValue] = useState(initialValues);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue];
};

export default useInput;
