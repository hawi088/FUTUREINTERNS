import './About.css'
function About(){
    return(
       <section className="sections content-loading" id="about">
        
        <h2 className='section-title' data-aos="zoom-in">About Me</h2>
        <div className='about-section'>
        <div className='about-description'>
        <p>Hello! I'm Hawi - a frontend developer in the making, university student,
                        and psychology enthusiast with soft spot for books, emotional depth and meaningful codes.
                    </p>
                    <p>I'm currently diving deep into HTML, CSS and frontend development while staying
                        rooted in faith and personal growth. When I'm not coding, you'll find me exploring
                        human nature, reading and watching thrillers, or listening to music.
                    </p>
        </div>
        <div className='interests'>
            <h3 className='sub-titles' id="beyond-codeing">Beyond Coding</h3>
            <div className='interest-tags'>
            <span className="tag" data-aos="fade-up" data-aos-delay="0">Psychological Thrillers</span>
                            <span className="tag"  data-aos="fade-up" data-aos-delay="0">Books</span>
                            <span className="tag" data-aos="fade-up" data-aos-delay="0">Human Behavior</span>
                            <span className="tag" data-aos="fade-up" data-aos-delay="0">Storytelling</span>
            </div>
            </div>
        </div>
       </section>
    )
}

export default About;