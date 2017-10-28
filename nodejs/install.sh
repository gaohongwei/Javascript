##### mac #####
  npm -v
  node -v
  brew install node
  #brew uninstall node

  mkdir node-easy-notes-app
  cd node-easy-notes-app
  npm init

  # Sequelize/Mongoose
  # Sequelize uses promises and Mongoose does not
  npm install express body-parser mongoose --save

##### ubuntu #####
  Installing Node.js via package manager
  https://nodejs.org/en/download/package-manager/

  for Node.js v6:
  curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  sudo apt-get install -y nodejs

  for Node.js v7:
  curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
  sudo apt-get install -y nodejs
  Optional: install build tools

  To compile and install native addons from npm you may also need to install build tools:
  sudo apt-get install -y build-essential
