/**
 * Created by David on 3/11/2017.
 */

import React from 'react'

class AppTitle extends React.Component {
    renderSubTitle() {
        if(this.props.subtitle) {
            return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
        }
    }
    render () {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubTitle()}
                </div>
            </div>
        )
    }
}

AppTitle.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string
}

AppTitle.defaultProps = {
    //title: 'Default Title'
}

export default AppTitle