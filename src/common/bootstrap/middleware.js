/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */
var reactRender = require('think-react-render');
think.middleware('react_render', reactRender);
/**
 * 
 * think.middleware('xxx', http => {
 *   
 * })
 * 
 */
