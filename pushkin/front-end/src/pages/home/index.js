// react imports
import React from 'react';
//import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

// styling
import s from './styles.css';
import Container from 'react-bootstrap/Container';
//import { Row, Image, Card, Media, Button, Table } from 'react-bootstrap'; //  Clearfix,
import CardDeck from 'react-bootstrap/CardDeck';

// components
import QuizTile from '../../components/QuizTile';
import { SuggestTile } from '../../components/SuggestTile';

// experiments
import experiments from '../../experiments.js';

const SHOW_TECHNICAL_DIFFICULTIES_MESSAGE = false;

function QuizPage(props) {
  if (!props.children) {
    return (
      <Container>
        <div id="page-wrap">
          <div>
            {/*
              --- Technical difficulties alert ---
              To enable / disable, please set constant at the top of the file to either true or false
            */}
            {SHOW_TECHNICAL_DIFFICULTIES_MESSAGE && (
              <div className={s.alert}>
                <div className="container">
                  <p>
                    We’re currently experiencing unusually high traffic to
                    themusiclab.org, which may make it difficult to load our games
                    quickly. Sorry! We hope to have the problem fixed soon.
                  </p>
                </div>
              </div>
            )}

            <div className={s.gray}>
              <div className="container">
                <p className={s.tan}>
                  We do <strong>citizen science</strong> to learn how the the mind
                  works.{' '}
                  <strong>
                    Pick a game to get started!
                    <br />
                  </strong>
                  <LinkContainer to="/Feedback">
                    <strong>Send us feedback</strong>
                  </LinkContainer>{' '}
                  about your experience.
                </p>
              </div>
            </div>

            <div className={s.quizbackground}>
              <div className="container clearfix">
                <a id="quizzes"> </a>
                  <CardDeck>
                  {experiments.map(e => (
                    <QuizTile
                      id={e.shortName}
                      title={e.fullName}
                      duration={e.duration}
                      post={e.tagline}
                      img={require('../../images/' + e.logo)}
                    />
                  ))}
                  <SuggestTile
                    center={true}
                    to="/Feedback"
                    title="Suggest a New Game"
                    img={require('../../images/logo512.png')}
                  >
                    <p>What kind of science would you like to see here?</p>
                  </SuggestTile>
                  </CardDeck>
                  
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
  return props.children;
}

export default QuizPage;
