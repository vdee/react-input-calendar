var React = require('react');
var Calendar = require('./components/Calendar');

window.React = React; // export for http://fb.me/react-devtools

React.render(
    <Calendar />,
    document.getElementById('react')
);