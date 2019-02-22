import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import { ipcRenderer } from 'electron';

import App from './components/app';
import localize from './localize';

ipcRenderer.on('readyToShow', (e, { locale }) => {
    const Localize = new localize(locale);

    const handleError = err => {
        console.error(err);
        Swal({
            title: Localize.text('Oops', 'universal'),
            text: err.message,
            type: 'error',
            confirmButtonText: Localize.text('OK', 'universal'),
        });
    };

    try {
        ReactDOM.render(
            <App Localize={Localize} />,
            document.getElementById('js-app')
        );
    } catch (err) {
        handleError(err);
    }
});
