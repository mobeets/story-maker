import './Story.css';
import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.processStory(props.content, props.pictureSplitStr, props.pageSplitStr);
  }

  processStory(content, pictureSplitStr='Illustration:', pageSplitStr='\n\n') {
    this.index = 0;
    
    const pageArray = content.split(pageSplitStr);
    this.pages = [];
    for (var i = 0; i < pageArray.length; i++) {
      this.pages.push(this.makePage(pageArray[i], pictureSplitStr));
    }
  }

  makePage(content, pictureSplitStr) {
    let contentArray = content.split(pictureSplitStr);
    let obj = {
      content: contentArray[0],
    };
    if (contentArray.length > 1) {
      obj.image = this.findImageUrl(obj.content);
    }
    console.log(contentArray);
    return obj;
  }

  findImageUrl(content) {
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dinosauria_montage_2.jpg/1920px-Dinosauria_montage_2.jpg';
  }

  prevPage() {
    if (this.index > 0) {
      this.index--;
    }
  }

  nextPage() {
    if (this.index < this.pages.length-1) {
      this.index++;
    }
  }

  renderPage() {
    return (
      <p>
        { this.pages[this.index].content }
        <img width="200" src={ this.pages[this.index].image }/>
      </p>
    );
  }

  render() {
    return this.renderPage();
  }
}

export default Story;
