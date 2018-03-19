const path = require('path');
const copy = require('copy'); // eslint-disable-line import/no-extraneous-dependencies

const opts = {
  cwd: path.resolve(__dirname, './'),
  flatten: true,
};
const assets = [
  './public/robots.txt',
];

copy.each(assets, 'build', opts, (err) => {
  if (err) throw err;
  console.log('static assets are copied!'); // eslint-disable-line no-console
});
