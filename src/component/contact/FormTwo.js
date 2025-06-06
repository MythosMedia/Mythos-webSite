import React, { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Result = () => (
  <Alert variant="success" className="success-msg">
    Your message has been successfully sent.
  </Alert>
);

const FormTwo = () => {
  const formRef = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://mythosmedia.io/sendmail.php", {
        method: "POST",
        body: formData,
      });

      const resultText = await response.text();
      if (resultText.trim() === "success") {
        showResult(true);
        formRef.current.reset();
        setTimeout(() => {
          showResult(false);
        }, 5000);
      } else {
        alert("There was an error sending your message.");
        console.error("Server error:", resultText);
      }
    } catch (err) {
      alert("There was a network error.");
      console.error(err);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" name="phone" />
      </div>
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea className="form-control" name="message" rows="4"></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary">
          Send
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTwo;
