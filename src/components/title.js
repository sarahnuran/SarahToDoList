import React from 'react';




class Title extends React.Component {
    render() {
        return (
            <h1 className="apptitle">{this.props.name}</h1>
        );
    }
}

export default Title;
