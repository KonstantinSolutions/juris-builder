
function init() {
    console.log('Starting Example JS!');

    ReactDOM.render(
        <JurisInterview />,
        document.getElementById("interviewElement")
      );
}

if (!window["%hammerhead%"]) {
  init();
}