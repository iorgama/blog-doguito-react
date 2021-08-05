import React, { useState, useEffect } from 'react';
import { buscarPosts } from '../api/PetshopApi/petshop-api';
import { Link } from 'react-router-dom';

export const ListaPost = ({ categoriaId, subcategoriaId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await buscarPosts(categoriaId, subcategoriaId);
      setPosts(results);
    })();
  }, [categoriaId, subcategoriaId]);
  return (
    <section className="posts container">
      {posts.map((post) => (
        <Link
          key={post.id}
          className={`cartao-post cartao-post--${post.categoria}`}
          to={`/posts/${post.id}`}
        >
          <article>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
