import React from 'react'
import './contact.css'
import {BsMailbox} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'


const Contact = () => {
    return(
        <section id="contact" >
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BsMailbox className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>webcool@gmail.com</h5>
                        <a href="#">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>cool_deloveper</h5>
                        <a href="#">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiWhatsappLine className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="#">Send a message</a>
                    </article>
                </div>
                    {/* END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name'  required />
                    <input type="email"  name='email' placeholder='Your Email' required />
                    <textarea name="messege" rows="7" placeholder='Your Messege' required></textarea>
                    <button  type='submit' className='btn btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact