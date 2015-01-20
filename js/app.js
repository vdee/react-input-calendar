var React = require('react');
var Calendar = require('react-input-calendar');

window.React = React; // export for http://fb.me/react-devtools

React.render(
    <Calendar
        date={'01-20-2015'}
        format="MM-DD-YYYY"
    />,
    document.getElementById('react')
);