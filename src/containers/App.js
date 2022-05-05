import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  //   search change pe jo jo krana hai ismain likhdo
  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
    //   jiss element se event call hua hai uss element ki value event.target.value

    // error will be thrown because the this keyword is not referring to the App component
    // it is referring to the element where it is being called in our case that is input tag and input tag doesn't have robots.
    // so whenever we use our own functions in the app component we should use arrow functions.
    // console.log(filteredrobots);

    // we took out filteredrobot from here to the render function.
    // every time when the render function will be called the filteredrobots will be updated.
    // the setState function actually makes the render function to be recalled & setState function is being called everytime the search changes.
    // state changes the render function recalls
  };
  render() {
    // destructuring to replace this.state everywhere we used.
    const { robots, searchfield } = this.state;
    const filteredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // changed robots.length === 0 to !robots.length
    // used ternary inplace of if else.
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchchange={this.onsearchchange} />
        <Scroll>
          <Cardlist robots={filteredrobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

/*
componentdidmount checks whether the component has been loaded or not.

onsearchchange aik function banaya ussko Seachbox component main jaake apni marzi ke element pe
onchange ke event pe call kradia.

onsearchchange: yeh jis element pe call hua hai uss element ke andar ka content uthake setState main 
searchfield ki propery main rakhdega. aur yeh hr change pe yeh kaam krega.

AB render method main filteredrobots ki aik array banayi jiss main woh robots ayenge jinke names hamare
searchfield ke andar ke content se match hore hain warna saaray rakho.

Cardlist ke component main filteredrobots as prop chalagaya.

agar remote location se data nahi phoncha toh loading screen dikao
warna h1 and searchbox with cardlist ka component render krdo.

ab jb first time render method call hoga toh saaray robots show honge.
and jb user searchbox component ki search field main change krega toh onsearchchange call hoga
jissmain hr change pe state update hogi aur state change pe render method dubara call hota hai.
aur jb render method call hoga toh filteredrobots ki array bhi update hogi aur jb woh update hogi toh
cardlist mai dia gaya filteredrobots ka prop filter huewe robots hi show krega.
*/
