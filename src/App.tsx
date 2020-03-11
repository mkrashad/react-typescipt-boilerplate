import * as React from "react";
import Person from "./interfaces/Person";
import myStateList from "./interfaces/Person";

class App extends React.Component<any, Person[]> {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        name: "John",
        lastname: "Doe",
        isCompleted: false
      },
      {
        id: 2,
        name: "Rashad",
        lastname: "Mahmudov",
        isCompleted: false
      },
      {
        id: 3,
        name: "Tony",
        lastname: "Hawk",
        isCompleted: false
      }
    ];
  }

  // public handleOnClick() : void{
  //   this.setState({
  //     isCompleted: true
  //   })
  // }

  render() {
    return (
      <React.Fragment>
        {this.state.map((person, index) => (
          <ul key={index}>
            <li>{person.name}</li>
            <li>{person.lastname}</li>
          </ul>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
