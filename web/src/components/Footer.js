import React from 'react';
import './css/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="footer-col">
                        <h4>Created by Sebastian Ruiz Gallego</h4>
                        <ul>
                            <li>
                                <a href="https://github.com/Ruiz16-17/Sofka_Challenge_QuestionForum" target="_blank">Github Repository</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow sofka</h4>
                        <div className="social-links">

                            <a href="https://www.facebook.com/sofkatech"><i className="fab fa-facebook-f"></i></a>
                        
                        </div>
                        <div className="social-links">
    
                            <a href="https://www.instagram.com/sofka_technologies/?hl=es"><i className="fab fa-instagram"></i></a>
                                

                        </div>
                    </div>
                    
                </div>
            </div>

        </footer>
    )
}
