import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import { Container, CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';

import TopAppBar from './components/TopAppBar'
import RegisterForm from './components/routes/RegisterForm'
import LoginForm from './components/routes/LoginForm'
import Dashboard from './components/routes/Dashboard'
import Homepage from './components/routes/Homepage';
import Logout from './components/routes/Logout';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.theme = 'dark';
        this.state = {
            theme: createMuiTheme({
                palette: {
                    type: this.theme
                }
            })
        }
    }

    get swapTheme() {

        const theme = (this.theme === 'dark' ? 'light' : 'dark');
        this.theme = theme;
        return this.theme;
    }

    handleChangeTheme = () => {
        const newTheme = this.swapTheme;
        this.setState({
            theme: createMuiTheme({
                palette: {
                    type: newTheme
                }
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <ThemeProvider theme={this.state.theme}>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Router>
                            <div>
                                <TopAppBar onChangeTheme={this.handleChangeTheme}></TopAppBar>

                                <Route path="/" exact component={Homepage} />
                                <Route path="/logout" component={Logout} />
                                <Route path="/register" component={RegisterForm} />
                                <Route path="/login" component={LoginForm} />
                                <Route path="/dashboard" component={Dashboard} />
                            </div>
                        </Router>
                    </Container>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
