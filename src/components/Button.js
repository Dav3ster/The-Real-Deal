import React from "react";
  
const Button = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('David_Stewart_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'David_Stewart_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h3>For more information check out my resume</h3>
                <button onClick={onButtonClick}>
                    Download Resume
                </button>
            </center>
        </>
    );
};
  
export default Button;