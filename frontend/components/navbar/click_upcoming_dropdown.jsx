import React from 'react';
import UpcomingDropdown from './upcoming_dropdown';


class ClickUpcomingDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(e) {

        if (document.getElementById('upcoming-dropdown')) {
            if (document.getElementById('upcoming-dropdown').style.display === 'none') {
                document.getElementById('upcoming-dropdown').style.display = 'block';
                this.setState({ clicked: true });
            } else {
                
                const status = !this.state.clicked;
                this.setState({ clicked: status });
            }
        }else if (document.getElementById('alt-upcoming-dropdown')){
            if (document.getElementById('alt-upcoming-dropdown').style.display === 'none') {
                document.getElementById('alt-upcoming-dropdown').style.display = 'block';
                this.setState({ clicked: true });
            } else {

                const status = !this.state.clicked;
                this.setState({ clicked: status });
            }
        } else {

        const status = !this.state.clicked;
        this.setState({ clicked: status });
        }

        if (document.getElementById('notification-dropdown')) {
            document.getElementById('notification-dropdown').style.display = 'none';
        }
        if (document.getElementById('user-dropdown')) {
            document.getElementById('user-dropdown').style.display = 'none';
        }
        
    }

    render() {
        return (
            <div>
                <i onClick={this.whenClicked} className="far2 far fa-calendar"></i>
                {this.state.clicked ? <UpcomingDropdown /> : null}
            </div>
        )
    }
}

export default ClickUpcomingDropdown;

