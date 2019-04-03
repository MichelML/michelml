import urljoin from 'url-join'

export default (path) => urljoin(process.env.rootUrl, path)
