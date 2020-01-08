import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


function Hello(props) {
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date(1588946400000);

describe("When testing directly", () => {

    let result;
    beforeAll(() => {
        result = Hello({ now: moment.toISOString() });
    })

    it("return a value", () => {
        expect(result).not.toBeNull();
    });

    it("is a h1", () => {
        expect(result.type).toBe("h1");
    });

    it("has children", () => {
        expect(result.props.children).toBeTruthy();
    })
    //#region trivial test
    // it("should pass", () => {
    //     expect(2 + 2).toBe(4); //Pass
    // });
    //#endregion
});

describe("When testing with ReactDOM", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()} />, div)
    });
});

//Define new Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

//install enzyme --> npm i --save-dev enzyme enzyme-adapter-react-16
describe("When testing with enzyme", () => {

    it("renders a h1", () => {
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.find("h1").length).toBe(1);
    });

    it("contains Hello at 2020-05-08T14:00:00.000Z", () => {
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000Z</h1>)).toBe(true);
    });
});