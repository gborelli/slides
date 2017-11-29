import webpack from 'webpack'; // to access built-in plugins
import Merge from 'webpack-merge';
import WebpackMonitor from 'webpack-monitor';
import CommonConfig from './webpack.common';


const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    parallel: true,
    sourceMap: true,
    uglifyOptions: {
      // output: {
      //   comments: false,
      //   beautify: false,
      // },
      compress: true, // switch to true?
    },
  }),

];

if (process.env.monitor === 'true') {
  plugins.push(new WebpackMonitor({
    capture: true,
    launch: true,
  }));
}

export default Merge(CommonConfig, {
  devtool: 'source-map',
  plugins,
});
