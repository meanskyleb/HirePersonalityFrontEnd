export const environment = {
  production: true
};

export let Api_Url = '';

switch (window.location.hostname) {
  case 'hirepersonality-zkz.herokuapp.com':
    Api_Url = 'https://hirepersonalityapi20190118021946.azurewebsites.net/'
    break;
  default:
    Api_Url = 'https://localhost:44311/';
};