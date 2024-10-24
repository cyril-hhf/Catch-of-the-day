import React from 'react';
import { getFunName } from "../helpers";
import propTypes from 'prop-types';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    };
    myInput = React.createRef()
    goToStore = event => {
        //1. Stop the form from submitting
        event.preventDefault();
        //2. get the text from that input
        const storeName = this.myInput.current.value;
        //3. Change the page to /store/whatever-they-attend
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            <React.Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required placeholder='Store Name'
                    defaultValue={getFunName()}>
                </input>
                <button type="submit">Visit Store</button>
            </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;