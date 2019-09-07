import React, { Component } from 'react';

import DashCard from './Dash_card';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spent: 70,
            earned: 50,
        };
    }

    get_net() {
        return this.state.earned - this.state.spent;
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <h2>Last Week:</h2>
                    <DashCard k="Spent" v={this.state.spent} showpercentage={true} percentage={5} reverse={true} />
                    <DashCard k="Earned" v={this.state.earned} showpercentage={true} percentage={30} reverse={false} />
                    <DashCard k="Net" v={this.get_net()} showpercentage={false} />
            </div>
        );
    }
};

export default Dashboard;
