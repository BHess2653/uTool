exports.debug = (title, obj, status) => {
  const colors = require('colors');
  const seperator = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  colors.setTheme({
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
    error: 'red'
  });
  const output = seperator + title + '\n' + time + seperator + JSON.stringify(obj);

  if (status != null) {
    console.warn('Status is null');
  } else {
    console.log('Status: ' + status);
  }

  if (process.env.DEBUG) {
      console.log(output);
    } else {
      console.error(new Error('Environmental Variable DEBUG not true'));
    }

  }
};

exports.bump = (currentVersion, typeOfUpdate) => {
  let hotfix = currentVersion.hotfix;
  let minor = currentVersion.minor;
  let major = currentVersion.major;
  if (typeof typeOfUpdate) {
    if (typeOfUpdate === 'hotfix') {
      hotfix += 1;
    }
    if (typeOfUpdate === 'minor') {
      minor += 1;
    }
    if (typeOfUpdate === 'major') {
      hotfix = 0;
      minor = 0;
      major += 1;
    }
  } else {
    console.warn('Please for your second argument please type in hotfix, minor, or major');
  }
  console.log('Your new version number should be: ' + major + '.' + minor + '.' + hotfix);
};
