// var Blob = require('blob-polyfill').Blob;

//Cal when first time opening quiz
function setNativeAppType(deviceType) {
  //deviceType should be android OR ios
  localStorage.setItem('deviceType', deviceType);
}

function apiDataFromNative(request, data, status) {
  // request = JSON.parse(request)
  if (
    request.url.includes('svg') ||
    request.url.includes('gif') ||
    request.url.includes('png') ||
    request.url.includes('bmp') ||
    request.url.includes('jpeg') ||
    request.url.includes('jpg')
  ) {
    if (request.url.includes('svg')) {
      data = 'data:image/svg+xml;base64,' + data;
    } else if (
      request.url.includes('gif') ||
      request.url.includes('png') ||
      request.url.includes('bmp') ||
      request.url.includes('jpeg') ||
      request.url.includes('jpg')
    ) {
      data =
        'data:image/' +
        request.url
          .substr(-4)
          .split('.')
          .pop() +
        ';base64,' +
        data;
    }
    // console.log('apiDataFromNative => ' + JSON.stringify(request) + ' || ' + JSON.stringify(data));
    fetch(data)
      .then(res => res.blob())
      .then(async res => {
        console.log('inside then ..', res.constructor.name, res.type);
        res = new Blob([res], { type: res.type });
        var text = await res.text();
        console.log('then image text ..', text);
        window.angularReference.zone.run(() => {
          window.angularReference.apiDataFromNative(request, res, status);
        });
      });
  } else if (request.url.includes('mp3')) {
    data = 'data:audio/' + request.url.substr(-4).split('.').pop() +';base64,' + data;
    fetch(data)
      .then(res => res.blob())
      .then(async res => {
        res = new Blob([res], { type: 'audio/mp3' });
        window.angularReference.zone.run(() => {
          window.angularReference.apiDataFromNative(request, res, status);
        });
      });
  } else {
    window.angularReference.zone.run(() => {
      window.angularReference.apiDataFromNative(request, data, status);
    });
  }
}
//Pass new quiz data on continue/I'll Attempt later/first time opening quiz
function passQuizDataFromNative(subResourceDataStr, mode, player_class) {
  console.log('subResourceDataStr', subResourceDataStr);
  console.log('player_class', player_class);
  window.angularReference.zone.run(() => {
    window.angularReference.passQuizDataFromNative(
      subResourceDataStr,
      mode,
      player_class
    );
  });
}

//Pass new quiz data on continue/I'll Attempt later/first time opening quiz
function passQuizDataFromNativeJson(subResourceData, mode, player_class) {
  console.log("🚀 ~ file: native-to-webview-interface.js ~ line 80 ~ passQuizDataFromNativeJson ~ mode", mode);
  console.log('subResourceData', subResourceData);
  console.log('player_class', player_class);
  console.log("🚀 ~ file: native-to-webview-interface.js ~ line 90 ~ window.angularReference.zone.run ~ window.angularReference", window.angularReference);
  console.log("🚀 ~ file: native-to-webview-interface.js ~ line 90 ~ window.angularReference.zone.run ~ window.angularReference", window.angularReference.zone);
  if(subResourceData.state && mode === "preview"){
    subResourceData.state.attemptedOption.forEach(element => {
      element.attemptCount = subResourceData.state.attemptCount;
      element.qState =  subResourceData.state.parentsQstate;
      element.qid = element.key
    });
    console.log("🚀 ~ file: native-to-webview-interface.js ~ line 91 ~ passQuizDataFromNativeJson ~ subResourceData", subResourceData)
  }
  window.angularReference.zone.run(() => {
    window.angularReference.passQuizDataFromNativeJson(
      subResourceData,
      mode,
      player_class
    );
  });
}

//Call when Retry button is clicked
function resetQuizFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.resetQuizFromNative();
  });
}

//Call when Show answer is clicked
function showAnswerFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.showAnswerFromNative();
  });
}

//Call when Check Answer button is clicked
function validateQuizFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.validateQuizFromNative();
  });
}

function nextSubQuizFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.nextSubQuizFromNative();
  });
}

function prevSubQuizFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.prevSubQuizFromNative();
  });
}

function playBgAudioFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.playBgAudioFromNative();
  });
}

function pauseBgAudioFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.pauseBgAudioFromNative();
  });
}

function iDontKnowFromNative() {
  window.angularReference.zone.run(() => {
    window.angularReference.iDontKnowFromNative();
  });
}
