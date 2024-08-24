import React from 'react';

function Article(props) {
    return (
            <a href={props.url} target="_blank" rel="noopener noreferrer" className="news__card Hover-effect">
                {/* Check if urlToImage exists before rendering the img tag */}
                {props.urlToImage && <img src={props.urlToImage} alt="Article Thumbnail" />}
                <h2>{props.title}</h2>
                {/* Check if content exists before attempting to replace HTML tags */}
                <p className="content">
                    {props.content && props.content.replace(/<[^>]+>/g, '') }
                </p>
                <br />
                <p style={{ marginBottom: '0px', position: 'absolute', right: '0', bottom: '0', fontFamily: 'ui-monospace' }}>
                    Updated: <span style={{ color: 'red' }}>
                        {new Date(props.publishedAt.slice(0, 10)).toDateString()} {new Date(props.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </p>
            </a>
    );
}

export default Article;
