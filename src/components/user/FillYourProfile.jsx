import React from 'react';

import FormComponent from '../reUsableComponents/FormComponent';

const getApiEndpoint = async (formData) => {


    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Form Data:', formData);
        return { success: true, data: formData };

    } catch (error) {
        console.error('Error handling form data:', error);
        return { success: false, error: error.message };
    }

};
const headingtext = "Fill Your Profile"
const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "100%",  // Dynamic button width
    btnHeight: "50px",  // Dynamic button height
};

const inputConfig = {
    inputWidth: "100%",  // Dynamic input width
    inputHeight: "48px",  // Dynamic input height
};

const fieldConfigs = [
    { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true },
    { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
    { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true },
    { name: 'mobile', label: 'Mobile', placeholder: 'Enter your mobile number', type: 'tel', required: true },
    { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
    { name: 'housename', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
    { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
    { name: 'pincode', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
    { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
    { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true },
];

const FillYourProfile = () => {
    return (
        <div>

            <FormComponent
                fieldConfigs={fieldConfigs}
                buttonConfig={buttonConfig}
                inputConfig={inputConfig}
                apiEndpoint={getApiEndpoint}
                heading={headingtext}
            />

        </div>
    );
};

export default FillYourProfile;
