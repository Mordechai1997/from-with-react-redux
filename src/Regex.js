export const validPhone = new RegExp(
    '^[0-9\-\+]{9,15}$'
 );
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');