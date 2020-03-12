import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

/* below syntax is not refactored
export const fetchPosts = () => {
  return async function(dispatch){
    const response = await jsonPlaceHolder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: response.data
    };
  };
}; */


export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => {
    dispatch(fetchUser(id));
  });
  //refactor->  userIds.forEach(id=>dispatch(fetchUser(id)))
}

//more refactoring
/*
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
      .uniq()
        .forEach(id=>dispatch(fetchUser(id)))
          .value();

}*/


//below synctax is refactored
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
}

//code snippet using memoize
/*export const fetchUser = (id) => dispatch => {
  _fetchUser(id,dispatch);
}

const _fetchUser = _.memoize(async(id,dispatch) => {
  const response = await jsonPlaceHolder.get(`users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
});
*/
