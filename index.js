pathToData = 'chatTranscript.lines';

var updateCallback = function (data) {
  console.log('***updateCallback****'); // Do something with the returning data//
};
const notifyWhenDone = function (err) {
  if (err) {
    // Do something with the error
    console.log('error', err);
  }
};
lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
