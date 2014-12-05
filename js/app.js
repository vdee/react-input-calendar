var React = require('react');
var Calendar = require('react-input-calendar');

window.React = React; // export for http://fb.me/react-devtools

React.render(
    <Calendar
        date={'3-12-2012'}
        format="DD-MM-YYYY"
    />,
    document.getElementById('react')
);