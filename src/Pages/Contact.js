import React from 'react';

import './Contact.css';

const Contact = () => {
    return( 
        <section className="section_contact" id ="contact">
            <div className="row">
                
                    <div className="contact_form">
                        <div className="contact">
                            <h2 className="heading-secondary">
                                Contact Me
                            </h2>
                        </div>
                        <form action="#" className="form">
                            <div className="form_group">
                                <input type="text" className="form_input" id="name" placeholder="FullName" required/>
                                <label for="name" className="form_label">FullName</label>
                            </div>
                            <div className="form_group">
                                <input type="email" className="form_input" id="email" placeholder="Email"required/>
                                <label for="email" className="form_label">Email</label>
                            </div>
                            <div className="form_group">
                                <button className="btn btn-white">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
           
       </section>
    )
}
export default Contact;