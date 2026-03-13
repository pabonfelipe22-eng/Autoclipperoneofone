function login(){

const client_key = "TU_CLIENT_ID";
const redirect_uri = "https://tudominio.com/callback";

const scope = "user.info.basic,video.upload,video.publish";

const url = `https://www.tiktok.com/v2/auth/authorize/
?client_key=${client_key}
&response_type=code
&scope=${scope}
&redirect_uri=${redirect_uri}`;

window.location.href = url;

}
