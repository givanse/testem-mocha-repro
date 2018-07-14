module.exports = {
  src_files: [
    'test/**/*.js'
  ],
  launchers: {
    Node: {
      command: './node_modules/.bin/mocha'
    }
  },
  launch_in_ci: ['Node'],
  launch_in_dev: ['Node'],
};
