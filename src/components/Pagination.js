import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '.5em',
    fontSize: '.75em'
  },
  paginationSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationText: {
    margin: '0 1.25em'
  },
  paginationSelect: {
    width: 75,
    fontSize: '1em'
  },
  navigationLeft: {
    marginRight: '.5em',
    cursor: 'pointer'
  },
  navigationLeftFirstPage: {
    marginRight: '.5em',
    color: 'rgba(0,0,0,0.26)'
  },
  navigationRight: {
    margin: '0 .5em',
    cursor: 'pointer'
  },
  navigationRightLastPage: {
    margin: '0 .5em',
    color: 'rgba(0,0,0,0.26)'
  }
};

class Pagination extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render(){
      const {total} = this.props;
        return (
          <div>
            {total}
          </div>
        );
    }
}

Pagination.propTypes = {
  total: PropTypes.number
};

export default Pagination;
