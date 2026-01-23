import './Skills.css'
import '../src/hooks/useAnalytics'
import { useEffect } from 'react';
function Skills(){
    useEffect('skills')
    return(
        <section className="sections" id="skills">
            <h2 className="section-title">Skills and Technologies</h2>
            <div className="skills-container">
            <div className="skill-category" data-aos="fade-up" data-aos-delay="0">
                    <h3>Frontend Development</h3>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                                <span>HTML5</span>
                            </div>
                            <span className="skill-percentage">95%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-expert" data-width="95"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                                <span>CSS3</span>
                            </div>
                            <span className="skill-percentage">90%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-advanced" data-width="90"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <span className="skill-percentage">85%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-advanced" data-width="85"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <span>React</span>
                            </div>
                            <span className="skill-percentage">80%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-intermediate" data-width="80"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                <span>Tailwind CSS</span>
                            </div>
                            <span className="skill-percentage">88%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-advanced" data-width="88"></div>
                        </div>
                    </div>
                </div>
        
                <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
                    <h3>Programming & Backend</h3>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                <span>Node.js</span>
                            </div>
                            <span className="skill-percentage">75%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-intermediate" data-width="75"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <span>Python</span>
                            </div>
                            <span className="skill-percentage">70%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-intermediate" data-width="70"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                                <span>Java</span>
                            </div>
                            <span className="skill-percentage">65%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-beginner" data-width="65"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                                <span>C++</span>
                            </div>
                            <span className="skill-percentage">60%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-beginner" data-width="60"></div>
                        </div>
                    </div>
                </div>
                <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
                    <h3>Tools & Others</h3>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                                <span>Git & GitHub</span>
                            </div>
                            <span className="skill-percentage">85%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-advanced" data-width="85"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                                <span>Figma</span>
                            </div>
                            <span className="skill-percentage">80%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-intermediate" data-width="80"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                            <i
  className="fas fa-paint-brush"
  style={{ color: "#00ff95", fontSize: "1.2rem" }}
></i>

                                <span>UI/UX Design</span>
                            </div>
                            <span className="skill-percentage">75%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-intermediate" data-width="75"></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <div className="skill-header">
                            <div className="skill-name">
                                <i className="fas fa-mobile-alt"  style={{ color: "#00ff95", fontSize: "1.2rem" }}></i>
                                <span>Responsive Design</span>
                            </div>
                            <span className="skill-percentage">90%</span>
                        </div>
                        <div className="skill-level">
                            <div className="skill-progress skill-level-advanced" data-width="90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
export default Skills;