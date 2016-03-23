import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import RaisedButton from 'material-ui/lib/raised-button';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Divider from 'material-ui/lib/divider';
import CircularProgress from 'material-ui/lib/circular-progress';

class YouTubeOrganizerPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  componentDidMount(){
    this.props.actions.loadApplicationState();
  }

  render() {
    return (
      <div>
        <RaisedButton label="Default"/> 
        <Divider />
        {this.props.appState.isLoading ? 
          (<CircularProgress />) :
          (<GridList
            cellHeight={200}
            cols={1}>
            {this.props.appState.tilesData.map(tile => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}

           </GridList>)
         }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.YouTubeAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YouTubeOrganizerPage);
