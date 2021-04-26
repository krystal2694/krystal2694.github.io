window.addEventListener('botcopy-events', function (e) {
    console.log(e);
    switch(e.detail.type) {
    case 'bc-chip-clicked':
          if (e.detail.payload.input == 'Show me your projects!') {
              window.location.href='https://krystalwong.ca/#/projects';
          } else if (e.detail.payload.input == 'Send Krystal an Email ✉️') {
              window.location.href = 'mailto:krystal.w221@gmail.com';
          } else if (e.detail.payload.input == 'Show me your credentials!') {
            window.location.href = 'https://krystalwong.ca/#/credentials';
        }
          break;
    // case 'bc-link-out-clicked':
    //     //   sendFeedback();
    //       break;
    // case 'bc-webview-close':
    //       sendFeedback();
    //       break;
    }
  });

  function sendFeedback() {
    Botcopy.sendText('link out clicked', false);
  }