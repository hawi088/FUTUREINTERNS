import './Contact.css'
function Contact(){
    return(
        <section className="sections content-loading" id="contact">
            <h2 className='section-title' data-aos="zoom-in">Get in Touch</h2>
            <div className='contact-method'>
                <div className='send-message'>
                    <h3 className='contact-title'>Send a Message</h3>
                    <p className='contact-description'>Have a project in mind? Let's work together</p>
                    <form className='contact-form' name='contact'>
                        <div className='contact-group'>
                            <label for="name">Your Name *</label>
                            <input id='name' placeholder='Enter Your Name' type='text' required></input>
                        </div>
                        <div className='contact-group'>
                            <label for="email">Your Email *</label>
                            <input id='email' placeholder='Enter Your Email' type='email' required></input>
                        </div>
                        <div className='contact-group'>
                            <label for="message">Your Message *</label>
                            <textarea id='message' placeholder='Tell me about your project...' type='text' required rows="5" className='input-field'></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <span>Send Message</span>
                            <i className="fas fa-paper-plane" id='plane'></i>
                        </button>
                    </form>
                </div>
                <div className='contact-information'>
                    <h3 className='contact-title'>Contact Info</h3>
                    <p className='contact-description'>I'd love to hear from you - whether it's about web projects, books, movies, or just to say hi</p>
                    <div class="contact-methods">
                    <div className='methods'>
                        <a href='mailto:hawichalaf8@gmail.com' aria-label='Email'>
                            <i className='fas fa-envelope'></i>
                        </a><span className='contact-text'>hawichalaf8@gmail.com</span>
                    </div>
                    <div className='methods'>
                        <a href='https://t.me/@barbazoo' aria-label='Telegram'>
                            <i className='fab fa-telegram'></i>
                        </a><span className='contact-text'>@barbazoo</span>
                    </div>
                    <div className='methods'>
                        <a href='https://linkedin/in/hawi-chala' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </a><span className='contact-text'>hawi-chala</span>
                    </div>
                    <div class="methods">
                            <a href="https://github.com/hawi088" target="_blank" aria-label="Github">
                                <i class="fab fa-github"></i>
                            </a>
                            <span class="contact-text">hawi088</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;