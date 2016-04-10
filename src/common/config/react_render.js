/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */
module.exports = {
    jsx: true, // use jsx syntax? default is true
    extension: '.js', // The extension of component files, default is .jsx,
    root_path: 'component', // Component file path, the path relative for `view.root_path`, and this support absolute path.
    left_delimiter: '{', // The delimiter of component arrribute in view files, such as "name={appname}", this configuration doesn't work for react component file, you can change it when the default value conflict with view file syntax.
    right_delimiter: '}', // such as the above
    lower_name: true // is the component use lower case filename.
};