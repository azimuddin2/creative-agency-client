import React from 'react';
import { Accordion } from 'react-bootstrap';
import questionImg from '../../../assets/images/questions.gif';
import './Questions.css';

const Questions = () => {
    return (
        <section className='container'>
            <h2 className='client-title'>Frequently Asked <span>Questions</span></h2>
            <div className='row mt-5'>
                <Accordion defaultActiveKey="0" className='col-md-6 mt-lg-5'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is a creative agency?</Accordion.Header>
                        <Accordion.Body>
                            A creative agency is a term for an agency that offers a variety of services that fall under the umbrella of marketing and advertising. Basically, if you need any type of creative strategy, work, or promotion, they can help you get it done.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is the difference between a marketing agency and a creative agency?</Accordion.Header>
                        <Accordion.Body>
                            A marketing agency derives its intelligence and aims from its understanding of your target audience. The creative agency works on the designs or creatives to use, the messaging that'll resonate, and where to display those things for maximum reach.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What makes a good creative agency?</Accordion.Header>
                        <Accordion.Body>
                            A good agency knows that their work is only as good as the results it delivers — whether it's a campaign, website, brand identity, or other product. Producing such work requires a talented team with hard skills in strategy, conceptualization, copywriting, design, project management, and more.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What do you do in a creative agency?</Accordion.Header>
                        <Accordion.Body>
                            Creative agencies focus on helping companies to achieve business goals by developing a brand, deploying a bespoke marketing strategy and creative approach, and then providing other digital solutions like mobile apps, creative work, content creation, visual elements and website design.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How do you structure a creative agency?</Accordion.Header>
                        <Accordion.Body>
                            *** How to build a creative team structure <br />
                            1. Consider the size of the organization. <br />
                            2. Focus on employee growth and development. <br />
                            3. Provide access to high-quality tools and technology. <br />
                            4. Fill any skill or knowledge gaps the team may have. <br />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='col-md-6'>
                    <img src={questionImg} alt="" className='question-img' />
                </div>
            </div>
        </section>
    );
};

export default Questions;