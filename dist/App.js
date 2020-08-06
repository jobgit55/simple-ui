import React, { useState, useEffect } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
// library.add(fas);
var App = function () {
    var _a = useState(''), title = _a[0], setTitle = _a[1];
    var postData = {
        title: 'test title',
        body: 'hello there'
    };
    useEffect(function () {
        axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(function (response) {
            setTitle(response.data.title);
        });
    });
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null, title))));
};
export default App;
