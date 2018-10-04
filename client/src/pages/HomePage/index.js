import React from 'react';

const HomePage = ({ match }) => {
    <h1>Hello {match.params.username}</h1>
}

export default HomePage;