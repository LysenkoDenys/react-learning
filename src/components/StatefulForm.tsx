import React, { useReducer } from 'react';

type State = {
  username: string;
  email: string;
  error: boolean;
  loading: boolean;
};

const initialState: State = {
  username: '',
  email: '',
  error: false,
  loading: false,
};

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_ERROR'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    default:
      return { ...state };
  }
};

const StatefulForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_USERNAME', payload: event.target.value });
    dispatch({ type: 'SET_ERROR', payload: false });

    console.log(state);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_EMAIL', payload: event.target.value });
    dispatch({ type: 'SET_ERROR', payload: false });
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    console.log(state);

    if (state.username === '' || state.email === '') {
      dispatch({ type: 'SET_ERROR', payload: true });
      return;
    }
    dispatch({ type: 'SET_LOADING', payload: true });

    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="margin-top-10">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          placeholder="user name"
          value={state.username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="margin-top-10">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={state.email}
          onChange={handleEmailChange}
        />
      </div>
      {state.error && (
        <p style={{ color: 'red' }}>Please fill in all the fields</p>
      )}
      <div className="margin-top-10">
        <button>{state.loading ? 'Loading' : 'Submit'} </button>
      </div>
    </form>
  );
};

export default StatefulForm;
