// https://github.com/Unitech/pm2/issues/2808#issuecomment-1364758673
// https://stackoverflow.com/questions/51356795/issue-with-executing-npm-scripts-via-pm2-in-windows
// `pm2 start run-pm2.js`
const { exec } = require("child_process")
child = exec("yarn api-server --port 8000", {
  cwd: __dirname, 
  windowsHide: true, 
})
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)