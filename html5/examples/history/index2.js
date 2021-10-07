window.onpopstate = function (event) {
  // alert(
  //   'location: ' +
  //     document.location +
  //     ', state: ' +
  //     JSON.stringify(event.state),
  // );
  console.log('adsf');
  console.log(
    'location: ' +
      document.location +
      ', state: ' +
      JSON.stringify(event.state),
  );
};

history.pushState({ page: 1 }, 'title 1', '?page=1');
history.pushState({ page: 2 }, 'title 2', '?page=2');
history.pushState({ page: 3 }, 'title 3', '?page=3');
console.log('xxx');
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
console.log('xxx2');
history.back(); // alerts "location: http://example.com/example.html, state: null
console.log('xxx3');
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}
