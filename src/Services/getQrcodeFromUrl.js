const getQrcode = (url) => {
    return ( 
        url.split('/').pop()
     );
}
 
export default getQrcode;