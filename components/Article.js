import React from 'react';
import Basic from './Layout/Basic';
const Article = props => (
  <Basic>
    <div className="article">
      <div className="article__header">
        <h2 className="article__header__title">{props.title}</h2>
        <h3 className="article__header__subtitle">{props.subtitle}</h3>
      </div>
      <div className="article__content">
        {props.content.map(p => (
          <p className="article__content__paragraph">{p}</p>
        ))}
      </div>
    </div>
  </Basic>
);

export default Article;
