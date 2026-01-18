import './Footer.css'
function Footer(){
    return(
        <>
        <div className='footer-paragraphs'>
        <div className='footer-paragraph'>Let's build something amazing together! Whether it's a new project, creative idea, or just a conversation about psychology and tech.</div>
        <div className='footer-paragraph'>Feel free to reach out - I'm always open to discussing new opportunities and creative projects.
        </div>
        <div className='bottom-navigations'>
            <div className='bottom-navigation'>
                <a href='#home'>Home</a>
            </div>
            <div className='bottom-navigation'>
                <a href='#about'>About</a>
            </div>
            <div className='bottom-navigation'>
                <a href='#skills'>Skills</a>
            </div>
            <div className='bottom-navigation'>
                <a href='#contact'>Contact</a>
            </div>
        </div>
        </div>
        <div className='copyright'>
                © {new Date().getFullYear()}. Crafted with 💚 and too much coffee. 
                All rights reserved.
            </div>
        </>
    )
}

export default Footer;