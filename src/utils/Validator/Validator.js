const validate = (value, rules, curent = "") => {
  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case "isImage":
        isValid = isValid && requiredImageValidator(value);
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

      case "maxLength":
        isValid = isValid && maxLengthValidator(value, rules[rule]);
        break;

      case "isRequired":
        isValid = isValid && requiredValidator(value);
        break;

      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;
      case "isPhone":
        isValid = isValid && phoneValidator(value);
        break;
      case "isName":
        isValid = isValid && nameValidator(value);
        break;
      case "curent":
        isValid = isValid && checkktrue(validate, curent);

      default:
        isValid = true;
    }
  }

  return isValid;
};

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

const maxLengthValidator = (value, maxLength) => {
  return value.length == maxLength;
};

const requiredValidator = (value) => {
  return value !== null && value.trim() !== "";
};

const requiredImageValidator = (value) => {
  return value !== null;
};

const emailValidator = (value) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const nameValidator = (value) => {
  var re = /^[a-zA-Z]+((['. ][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(String(value).toLowerCase());
};

const phoneValidator = (value) => {
  var re = /^[0-9]*$/;
  return re.test(String(value).toLowerCase());
};
const checkktrue = (value, curent) => {
  if (value == curent) return true;
  return false;
};

export default validate;
