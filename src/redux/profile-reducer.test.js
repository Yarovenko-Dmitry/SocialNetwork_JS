import profileReducer, {addPostActionCreator, deletePostActionCreator} from './profile-reducer';
import React from 'react';


let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 48},
    {id: 3, message: 'Second post', likesCount: 8},
    {id: 4, message: 'e-ge-gey', likesCount: 4}
  ]
};

test('length of posts should be incremented ', () => {
  // 1. test data
  const action = addPostActionCreator('newPostText');
  // 2. action
  const newState = profileReducer(state, action);
//  3. expectation
  expect( newState.posts.length).toBe(5);
});

test('message should be \'newPostText\' ', () => {
  // 1. test data
  const action = addPostActionCreator('newPostText');
  // 2. action
  const newState = profileReducer(state, action);
//  3. expectation
  expect( newState.posts[4].message).toBe('newPostText');
});

test('after deleting length of posts should`t be decremented if id incorrect', () => {
  // 1. test data
  const action = deletePostActionCreator(1000);
  // 2. action
  const newState = profileReducer(state, action);
//  3. expectation
  expect( newState.posts.length).toBe(4);
});

