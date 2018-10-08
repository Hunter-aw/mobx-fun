import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action} from 'mobx'

@inject(allStores => ({
    addIceCream: allStores.store.addIceCream 
  }))
@observer
class IcecreamForm extends Component {

    @observable iceCream={
        flavor: "",
        color: ""
    };
    @action inputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    @action submitForm = ()=>{
        this.props.addIceCream(this.iceCream.flavor,this.iceCream.color);
        this.iceCream.flavor = "";
        this.iceCream.color = "";
   }

    render() {
        return (
            <div>
                <form>
                    <span>Ice Cream Flavor</span>
                    <input name="flavor" onChange = {this.inputChange} ></input><br></br>
                    <span>Ice Cream Color</span>
                    <input name="color" onChange = {this.inputChange} ></input>
                    <button type='button' onClick ={this.submitForm}> Submit</button>
                </form>
            </div>
        )
    }
}

export default IcecreamForm
