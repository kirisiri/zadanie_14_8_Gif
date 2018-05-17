var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  getUrl: function() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },
  render: function() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return (
      <div style={styles}>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
});

/*
handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({searchingText: searchingText});

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

render: function() {
    var styles = {fontSize: '1.5em', width: '90%', maxWidth: '350px'};

    return <input
             type="text"
             onChange={this.handleChange}
             onKeyUp={this.handleKeyUp}
             placeholder="Tutaj wpisz wyszukiwaną frazę"
             style={styles}
             value={this.state.searchTerm}
            />
  }
*/