import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58, years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    // Progression 2 | LIST ALL ITEMS
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Progression 3 | LIST ALL DATA BASED ON USERTYPE
    renderUserTypeItems = (userType) => {
        const data = this.state.userData.filter(item => item.user_type === userType);
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Progression 4 | FILTER ALL DATA STARTING WITH THE LETTER J
    renderNamesStartingWithJ = () => {
        const data = this.state.userData.filter(item => item.name.startsWith('J'));
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Progression 5 | FILTER DATA BASED ON AGE
    renderAgeFilteredItems = () => {
        const data = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Progression 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
    getTotalExperienceOfDesigners = () => {
        const designers = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designers.reduce((acc, curr) => acc + curr.years, 0);
        return totalExperience;
    };

    render() {
        return (
            <React.Fragment>
                {/* Progression 2 */}
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>

                {/* Progression 3 */}
                <h1>List all data based on UserType</h1>
                <div className="display-box">
                    <ul>{this.renderUserTypeItems('Designer')}</ul>
                </div>

                {/* Progression 4 */}
                <h1>Filter all names starting with the letter J</h1>
                <div className="display-box">
                    <ul>{this.renderNamesStartingWithJ()}</ul>
                </div>

                {/* Progression 5 */}
                <h1>Filter data based on age</h1>
                <div className="display-box">
                    <ul>{this.renderAgeFilteredItems()}</ul>
                </div>

                {/* Progression 6 */}
                <h1>Total experience of designers: {this.getTotalExperienceOfDesigners()} years</h1>
            </React.Fragment>
        );
    }
}

export default HigherOrderComponent;
