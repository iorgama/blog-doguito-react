import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { buscarPostsById } from '../api/PetshopApi/petshop-api';
import '../assets/css/post.css';

export const Posts = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const results = await buscarPostsById(id);

      if (results === false) {
        history.push('/404');
      } else {
        setPost(results);
      }
    })();
  }, [history, id]);

  return (
    <>
      {post && (
        <main className="container flex flex--centro">
          <article className="cartao post">
            <h2 className="cartao__titulo">{post.title}</h2>
            <p className="carta__texto">{post.body}</p>
          </article>
        </main>
      )}
    </>
  );
};
