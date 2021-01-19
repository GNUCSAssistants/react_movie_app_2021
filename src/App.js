import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    // isLoading이 곧 this.state.isLoading임을 뜻한다.
    const { isLoading } = this.state; 

    // 삼항연산자. true이면 앞을 실행, false이면 뒤를 실행
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
