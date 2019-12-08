import React from 'react';

class Header extends React.Component {

    // using props here
    constructor(props) {
        super(props)

        // using state here
        this.state = {
            homeActive: 'active',
            aboutActive: ''
        }
    }

    navigations = (nav) => {
        this.props.history.push(nav);
        if (nav === 'home') {
            this.setState({ homeActive: 'active', aboutActive: '' });
        } else {
            this.setState({ homeActive: '', aboutActive: 'active' });
        }
    }


    render() {
        return (
            <>
                <div className="header">
                    <ul>
                        <li onClick={() => this.navigations('home')} className={this.state.homeActive}>Home</li>
                        <li onClick={() => this.navigations('about')} className={this.state.aboutActive}>About</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Header;