const doc = window.document;

window.MyLoginZoidComponent = zoid.create({

    // The html tag used to render my component

    tag: 'my-login-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: 'http://localhost:1337/demo/basic/popup/login.htm',

    dimensions: {
        width:  '300px',
        height: '150px'
    }
});
