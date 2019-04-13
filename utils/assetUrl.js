import urljoin from "url-join";

export default (path, params = {external: false}) => {
  if (params.external) {
    // avoid mixed content over https  
    // https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content
    return path.replace("http:", "https:"); 
  }

  return urljoin(process.env.rootUrl, path);
};
