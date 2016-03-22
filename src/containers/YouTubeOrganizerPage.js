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


const tilesData = [
{
  img: 'http://www.publicdomainpictures.net/pictures/40000/t2/smooth-fox-terrier-dog.jpg',
  title: 'Image 1',
  author: 'Noknow'
},
{
  img: 'http://www.publicdomainpictures.net/pictures/40000/velka/butterfly-on-a-flower-1365009473Xea.jpg',
  title: 'Image 2',
  author: 'Noknowa'
}
];

class YouTubeOrganizerPage extends Component {

  render() {
    return (
      <div>
        <RaisedButton label="Default"/> 
        <Divider />
        <GridList
          cellHeight={200}
          cols={1}>
          {tilesData.map(tile => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}

         </GridList> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
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
