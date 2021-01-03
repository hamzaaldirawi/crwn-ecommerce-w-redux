// import { Component } from 'react'; used before redux
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
// import SECTIONS_DATA from './sections.data.js';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className = 'directory-menu'>
    {
        sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))
    }
    </div>   
)

/*
before using reducer and redux 
class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}*/ 
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);