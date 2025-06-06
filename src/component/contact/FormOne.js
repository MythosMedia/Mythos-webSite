import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Your Message has been successfully sent.
        </Alert>
    )
}

const FormOne = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control"  aria-labelledby='form name input' name="contact-name" placeholder="John Smith" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control"  aria-labelledby='form email input' name="contact-email" placeholder="example@mail.com" required />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control"  aria-labelledby='form Phone input' name="contact-phone" placeholder="+1 665-000-000" required />
        </div>
        
        <div className="form-group">
            <button type="submit" style={{width:'300px',border:"none",outline:"none"}} className="axil-btn btn-fill-primary btn-fluid btn-primary" aria-label='submit button' name="submit-btn">Submit</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormOne;