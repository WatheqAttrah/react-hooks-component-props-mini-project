import React from 'react';
import Article from './Article';

const ArticleList= ({posts})=> {
    return (
        <main>
            {posts.map((post) => {
                return(
                    <Article key={post.id} title={post.title} preview={post.preview} />
                )
            })};
        </main>
    )
};

export default ArticleList;