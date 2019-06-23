export const SET_POSTS = 'SET_POSTS'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'

export const setPosts = posts => ({ type: SET_POSTS, payload: posts })
export const setUsers = users => ({ type: SET_USERS, payload: users })
export const setCurrentPost = id => ({ type: SET_CURRENT_POST, payload: id })
