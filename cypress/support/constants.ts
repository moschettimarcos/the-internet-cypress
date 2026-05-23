export const BASE_URL = 'https://the-internet.herokuapp.com';

export const AUTH = {
  username: 'admin',
  password: 'admin',
} as const;

export const LOGIN = {
  validUser: 'tomsmith',
  validPassword: 'SuperSecretPassword!',
  invalidUser: 'invalid',
  invalidPassword: 'wrong',
} as const;

export const AB_TEST_HEADINGS = [
  'A/B Test Variation 1',
  'A/B Test Control',
] as const;
