import PasswordValidator from "password-validator";

var schema = new PasswordValidator();

// Add properties to it
schema
    .is().min(8)                                     // Minimum length 8
    .is().max(20)                                    // Maximum length 20
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                 // Must have at least 2 digits
    .has().not().spaces()                            // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']);  // Blacklist these values

export default function formValidations(event) {
    let { name, value } = event.target;
    
    switch (name) {
        case "name":
        case "username":
        case "color":
            if (value.length === 0)
                return name + " field is mandatory";
            else if (value.length < 3 || value.length > 30)
                return name + " field length must be greater than 3 and less than 30";
            else
                return "";

        case "email":
            if (value.length === 0)
                return name + " field is mandatory";
            else if (value.length < 13 || value.length > 50)
                return name + " field length must be greater than 13 and less than 50";
            else
                return "";

        case "password":
            if (schema.validate(value))
                return "";
            else
                return "Invalid Password! Its length should be 8 or more but less than 20, should contain at least 1 digit, 1 upper case character, 1 lower case character and should not contain white spaces";
                
        case "phone":
            if (value.length === 0)
                return name + " field is mandatory";
            else if (value.length !== 10)
                return name + " field length must be 10";
            else if (value[0] >= '0' && value[0] <= '5')
                return name + " field must start with 6, 7, 8, or 9";
            else
                return "";

        case "message":
        case "subject":
            if (value.length === 0)
                return name + " field is mandatory";
            else if (value.length < 3)
                return name + " field length must be greater than 3";
            else
                return "";

        case "size":
            if (value.length === 0)
                return name + " field is mandatory";
            else if (value.length > 10)
                return name + " field length must be less than 10";
            else
                return "";

        case "baseprice":
        case "quantity":
            if (!value)
                return name + " field is mandatory";
            else if (value < 0)
                return name + " should not be less than 1";
            else
                return "";

        case "discount":
            if (!value)
                return name + " field is mandatory";
            else if (value < 0 || value > 100)
                return "Discount should be in range 1 - 100";
            else
                return "";

        default:
            return "";
    }
}
