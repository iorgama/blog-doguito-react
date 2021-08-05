import api from '../index';

export const buscarPostsById = async (id) => {
  try {
    const response = await api.get(`/posts/?search=${id}`);

    if (response.data[0]) {
      return response.data[0];
    }
    return false;
  } catch (e) {
    throw e;
  }
};

export const buscarCategoriasById = async (id) => {
  try {
    const response = await api.get(`/categorias/?search=${id}`);

    if (response.data[0]) {
      return response.data[0];
    }
    return false;
  } catch (e) {
    throw e;
  }
};

export const buscarPosts = async (categoriaId, subcategoriaId) => {
  try {
    let url = '/posts';
    if (categoriaId) {
      url = `/posts/?search=${categoriaId}`;
    }

    if (subcategoriaId) {
      url = `/posts/?search=${subcategoriaId}`;
    }
    const response = await api.get(url);
    return response.data;
  } catch (e) {
    console.log('error while fetching ', e);
    throw e;
  }
};

export const buscarCategorias = async () => {
  try {
    const response = await api.get('/categorias');
    return response.data;
  } catch (e) {
    console.log('error while fetching ', e);
    throw e;
  }
};
