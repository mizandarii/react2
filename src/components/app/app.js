import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BooksPage, HousesPage, BooksItem } from '../pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.css';

export default class App extends Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedHouse: 20
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        });
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            };
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />;
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {char}
                                <button
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}
                                >
                                    Toggle random character
                                </button>
                            </Col>
                        </Row>
                        <Routes>
                            <Route path="/" element={<h1 className='welcome'>Welcome to GOT DB</h1>} />
                            <Route path="/characters" element={<CharacterPage />} />
                            <Route path="/books" element={<BooksPage />} />
                            <Route path="/books/:id" element={<BooksItem />} />
                            <Route path="/houses" element={<HousesPage />} />
                        </Routes>
                    </Container>
                </div>
            </Router>
        );
    }
}
