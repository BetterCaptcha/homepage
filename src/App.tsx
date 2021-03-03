import React from "react";

interface IAppProps {}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <div>
        <h1 className="App">Hello.</h1>
        <p>I'm BetterCaptcha.</p>
        <p>
          My goal is to provide a no BS authentication solution for Discord
          servers and its members.
        </p>
        <p>
          Transparency is key. We pledge to collect as less user data as
          possible. That's why we're open-source,{" "}
          <a href="https://github.com/BetterCaptchas">here</a>.
        </p>
        <p>Coming soon to Discord.</p>
      </div>
    );
  }
}

export default App;
