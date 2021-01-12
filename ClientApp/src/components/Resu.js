import React, { Component } from 'react';
import './Gen.css'
import { Container, Row, Col } from 'reactstrap';

export class Resu extends Component {

    static displayname = Resu.name;
    
    render() {
        return (
            
            <Container>
                <Row className='head'>
                    <Col xs="12" lg='2' className='img_h'>
                            <img src={require('./image/duck.png')} width='180' height='180' />                      
                    </Col>
                    <Col xs="12" lg='9' className='text_name'>
                        <h1> Кто принес в семью достаток</h1>
                        <p> MOBILE : 094-432-7036 </p>
                        <p> 349/55 Themix, Pluakdaeng  Mapyangphon , Rayong 21140, Thailand</p>
                        <p> E-MAIL : accuser.zx@gmail.com </p>
                        <p> GitHub : <a href='https://github.com/iouii'>https://github.com/iouii</a> </p>
                        <p> WebSite : <a href='https://github.com/iouii' target='_blank'>https://github.com/iouii</a> </p>
                    </Col>
                </Row>
                <Row className='body'>
                    <Col xs="12" lg='6' className='text_body'>
                        <h4>WORK EXPERIENCE</h4>
             
                            <h6>Ogura Clutch(Thailand) | 2019 - Present</h6>
                             <ul>
                                <li>Software design and development</li>
                                <li>Evaluates interface between hardware and software</li>
                                <li>Development ERP software within the organization</li>
                                <li>Maintain network and CCTV system</li>
                                <li>Maintenance of computers inside the factory</li>
                            </ul>
                     
                    </Col>
                    <Col xs="12" lg='6' className='text_body'>
                        <h4>AREAS OF EXPERTISE</h4>
                       
                            <ul>
                                <li>Hands-on SQL experience</li>
                                <li>PHP, Html and JavaScript experience</li>
                                <li>Microsoft ASP.NET MVC, Web API experience</li>
                                <li>Working knowledge of C#</li>
                            </ul>

                    </Col>
                    <Col xs="12" lg='6' className='text_body'>
                        <h4>EDUCATION HISTORY</h4>

                        <h6>UNIVERSITY OF SOUTHEAST ASIA UNIVERSITY (SAU)</h6>

                        <p>
                            Bachelor of Science | Major's Computer Science , GPA 2.70 
                             </p>
                        <p>
                            19/1 Petkasam Road, Nongkhame, Bangkok 10160 , Thailand 2018
</p>

                    </Col>
                    <Col xs="12" lg='6' className='text_body'>
                        <h4>OTHER SKILLS</h4>
                       
                            <ul>
                                <li>The ability to analyze complex technical information</li>
                                <li>Can analyze, design and implement  database structures</li>
                                <li>Excellent problem solver</li>
                                <li>Technology capability</li>
                                <li>Driver's license</li>
                            </ul>

                    </Col>
                    <Col xs="12" lg='6' className='text_body'>
                        <h4>HOBBIES AND INTERESTS</h4>

                        <span>
                            <p>
                                I enjoy learning various technologies. Have a special interest in AI. Most
                                hobbies are watching movies, watching anime, playing basketball. Or doing something I'm interested in sometimes.
</p>
                        </span>

                    </Col>
                </Row>

            </Container>
         

            );
    }
}