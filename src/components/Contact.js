import React, { useEffect, useRef, useState } from 'react';
import loadingIndicator from '../resources/images/loading.png';
import emailjs from 'emailjs-com';

const Contact = (props) => {
  const {onCloseHandler, widthModifier, heightModifier } = props;
  const [senderNameError, setSenderNameError] = useState('');
  const [senderEmailError, setSenderEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [sent, setSent] = useState(false);

  const form = useRef();

  const errorText = (fieldName) => `${fieldName} field can not be blank.`

  let timer;
  const formOnSend = (e) => {
    e.preventDefault();
    const name = document.getElementById('send-from')?.value || '';
    const email = document.getElementById('send-from-email')?.value || '';
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('form-message')?.value || '';
    if (name.length > 0 && email.length > 0 && subject.length > 0 && message.length > 0) {

      emailjs.sendForm('service_tac7ae5', 'template_mlbbg1k', form.current, 'fzbHyLOQt0RCcSqX3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      setSent(true);
    } else {
      console.log(name, email, subject, message)
      if (name.length === 0) setSenderNameError(errorText('Sender Name'));
      if (email.length === 0) setSenderEmailError(errorText('Sender Email'));
      if (subject.length === 0) setSubjectError(errorText('Subject'));
      if (message.length === 0) setMessageError(errorText('Message'));
    }
  }

  useEffect(() => {
    if (sent) {
      timer = setTimeout(() => onCloseHandler(), 2000);
    }
  }, [sent]);


  return (
    <div id='contact-form-wrapper' style={{ height: `calc(75vh + ${heightModifier}px)`, width: `calc(75vw + ${widthModifier}px)`}}>
      {sent && <div id='message-sent'><h2 className='h2'>Message Sending</h2><img src={loadingIndicator} width='64' height='64' id='loading-indicator' /></div>}
      <form onSubmit={formOnSend} ref={form}>
        <div id="contact-form-details-wrapper">
          <h3 className='h3'>Contact Details</h3>
          <div id='contact-form-details-mid'>
            <div id="contact-form-details-labels" >
              <br className='flex1'/>
              <label htmlFor='send-to' className='flex1'>To</label><br className='flex1'/>
              <label htmlFor='send-from' className='flex1'>Sender Name</label><br className='flex1'/>
              <label htmlFor='send-from-email' className='flex1'>Sender Email</label><br className='flex1'/>
              <label htmlFor='message-subject' className='flex1'>Subject</label><br className='flex1'/>
            </div>
            <div id="contact-form-details" >
              <br className='flex1'/>
              <input
                type="email"
                value="CraigMSirota@gmail.com"
                id='send-to'
                className='flex1'
                disabled
              /><br className='flex1'/>
              <input
                type="text"
                id='send-from'
                className='flex1'
                name='name'
                onChange={() => setSenderNameError('')}
              />{senderNameError.length === 0 ? <br className='flex1'/> : <div className='error-text flex1'>{senderNameError}</div>}
              <input
                type="email"
                id='send-from-email'
                className='flex1'
                name='reply_to'
                onChange={() => setSenderEmailError('')}
              />{senderEmailError.length === 0 ? <br className='flex1'/> : <div className='error-text flex1'>{senderEmailError}</div>}
              <input
                type="text"
                id='subject'
                className='flex1'
                name='subject'
                onChange={() => setSubjectError('')}
              />{subjectError.length === 0 ? <br className='flex1'/> : <div className='error-text flex1'>{subjectError}</div>}
            </div>
          </div><br/>
        </div>
        <div id="contact-form-message">
            <h3 className='h3'>Email Body</h3>
            <textarea
              id='form-message'
              name='message'
              onChange={() => setMessageError('')}
            />{messageError.length > 0 ? <div className='error-text'>{messageError}</div> : null}
            <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;