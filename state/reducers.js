import { SET_POSTS, SET_USERS, SET_CURRENT_POST } from './actions'

const createReducer = actionType => initState => (state = initState, { type, payload }) =>
  type === actionType ? payload : state

export const postsReducer = createReducer(SET_POSTS)([])
export const usersReducer = createReducer(SET_USERS)([])
export const currentPostReducer = createReducer(SET_CURRENT_POST)(null)
