import { observable, action } from "mobx";


class IceCreamStore {
    @observable 
    iceCreams = [];
 
    @action addIceCream = (flavor ,color) => {
	    this.iceCreams.push({ flavor, color });
    }
    @action deleteIceCream = (flavor) => {
        debugger;
        let index = this.iceCreams.findIndex(i => i.flavor ===flavor)
        this.iceCreams.splice(index, 1)
    }
}

const store = new IceCreamStore();
export default store;