export const devUrl = 'http://localhost:';
export const port = process.env.REACT_APP_FUNCTIONS_PORT;

export const functionsConfig = {
  headers: {
    'Request-Method': 'POST',
    'Content-Type': 'application/json',
    'x-access-token': ''
  },
  timeout: 1000
};