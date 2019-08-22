import React, {Component} from 'react';
import Header from './components/header/header';
import Carousel from './components/main/carousel';
import { lunchDinner } from './http/menu';
import News from './components/main/news';


class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const elm = document.querySelector('.navbar');
    const input = document.querySelector('.navbar--searchBox__box');    
    const headerInputTop = document.querySelector('.header--input').getBoundingClientRect().top;
    
    if(window.scrollY > 0) {
      elm.classList.add('a');
    }else {
      if(elm.classList.contains('a')) {
        elm.classList.remove('a');
      }
    }
    if(headerInputTop < 0) {
      input.style.width = "50rem";
    }else {
      input.style.width = '0';
    }
  }
    render() {
      return (
        <div className="container">
          <Header />
          <main>
            <Carousel cards={lunchDinner()} />
            <hr className="row" />
            <News />
          </main>
         
        </div>
      )
    }
}
export default App;
