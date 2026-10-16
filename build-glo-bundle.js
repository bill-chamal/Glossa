const path = require('path');
const fs = require('fs');
const webpack = require('./glo/modules/webapp/node_modules/webpack');

const entryPath = path.resolve(__dirname, 'glo-entry.js');
fs.writeFileSync(entryPath, `
var glo = require('./glo/modules/glo/lib/glo.js');
var GLOError = require('./glo/modules/error/lib/GLOError.js');

module.exports = {
  interpret: glo.default || glo,
  GLOError: GLOError.default || GLOError
};
`);

const compiler = webpack({
  mode: 'development',
  devtool: false,
  entry: entryPath,
  output: {
    path: path.resolve(__dirname, 'GlossaWeb/wwwroot/js'),
    filename: 'glo.bundle.js',
    library: 'gloEngine',
    libraryTarget: 'window'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  node: {
    fs: 'empty',
    path: 'empty'
  }
});

compiler.run((err, stats) => {
  if (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error('Compilation errors:', info.errors);
    process.exit(1);
  }
  console.log('SUCCESS! Generated assets:');
  info.assets.forEach(a => console.log(' - ' + a.name + ' (' + (a.size / 1024).toFixed(1) + ' KB)'));
  try { fs.unlinkSync(entryPath); } catch (_) {}
});
