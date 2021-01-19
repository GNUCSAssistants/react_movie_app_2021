import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  };
  render() {
    const { isLoading } = this.state;  // 이것은, isLoading이 곧 this.state.isLoading임을 뜻한다.

    // 삼항연산자. true이면 앞을 실행, false이면 뒤를 실행
    return <div>{ isLoading ? "Loading...": "We are ready" }</div>;
  }
}

export default App;
