const { exec } = require('child_process');

//Server configuration
const sshKeyPath = 'C:/Users/Owner/Desktop/FullStackWeb/Devops/newkey.pem';
const localBuildPath = './build/'; 
const serverUser = 'ec2-user';
const serverHost = 'ec2-3-80-68-254.compute-1.amazonaws.com';
const serverPath = '/home/ec2-user/riot-express-todo-list';

// Command to transfer
const scpCommand = `scp -i "${sshKeyPath}" -r ${localBuildPath} ${serverUser}@${serverHost}:${serverPath}`;

//SCP command
const deploy = () => {
  console.log('Starting deployment...');
  exec(scpCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Deployment error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Deployment stderr: ${stderr}`);
      return;
    }
    console.log(`Deployment stdout: ${stdout}`);
    console.log('Deployment successful!');
  });
};

//Run the deploy function
deploy();