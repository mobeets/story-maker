import './Story.css';
import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.processStory(props.content, props.pictureSplitStr, props.pageSplitStr);
  }

  processStory(content, pictureSplitStr, pageSplitStr) {
    this.state = {index: 0};
    
    const pageArray = content.split(pageSplitStr);
    this.pages = [];
    for (var i = 0; i < pageArray.length; i++) {
      this.pages.push(this.makePage(pageArray[i], pictureSplitStr));
    }
    console.log(pageArray.length, this.pages.length)
  }

  makePage(content, pictureSplitStr) {
    let contentArray = content.split(pictureSplitStr);
    let obj = {
      caption: contentArray[0],
    };
    if (contentArray.length > 1) {
      obj.image = this.findImageUrl(obj.caption);
    }
    return obj;
  }

  findImageUrl(caption) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dinosauria_montage_2.jpg/1920px-Dinosauria_montage_2.jpg';
  }

  prevPage() {
    if (this.state.index > 0) {
      console.log('prev');
      this.setState(function(state) {
        return {index: state.index-1};
      });
    }
  }

  nextPage() {
    console.log(this.pages.length);
    if (this.state.index < this.pages.length-1) {
      console.log('next');
      this.setState(function(state) {
        return {index: state.index+1};
      });
    }
  }

  handleClick = () => {
    console.log(this.state.index);
    this.nextPage();
  }

  handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      this.prevPage();
    } else if (event.key === 'ArrowRight') {
      this.nextPage();
    }
  }

  renderPage() {
    return (
      <figure
        onKeyDown={this.handleKeyPress}
        tabIndex={-1}
        onClick={this.handleClick}>

        <img width="100%" src={ this.pages[this.state.index].image }/>
        <figcaption>
          { this.pages[this.state.index].caption }
        </figcaption>

      </figure>
    );
  }

  render() {
    return this.renderPage();
  }
}

export default Story;
