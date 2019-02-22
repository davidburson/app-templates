import React from 'react';
import propTypes from 'prop-types';
import { ipcRenderer, remote } from 'electron';

//const App = ({ Localize }) => {
//class App extends React.PureComponent {
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { Localize } = this.props;
        const {  } = this.state;

        return (
            <div>
            </div>
        );
    }
}

App.propTypes = {
    Localize: propTypes.object,
};

export default App;
