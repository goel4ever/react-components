import React, {Component} from 'react';
import './index.css';

class Image extends Component {
  render() {
    const src = this.props.src || '##';
    const alt = this.props.alt || '';
    const width = this.props.width;
    const height = this.props.height;
    const style = `${this.props.grayscale ? 'img-gray' : ''} ${this.props.blur ? 'img-blur' : ''}`;

    return (
      <img src={src} alt={alt} width={width} height={height} className={style} />
    );
  }
}

export default Image;
