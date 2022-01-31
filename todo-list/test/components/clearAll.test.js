import React from "react";
import ClearAll from "@components/clearAll";
import { shallow } from "Enzyme";

describe("ClearAll", () =>{

    it("should not render clearAll button", () => {
        const result = shallow(<ClearAll items={[]} />)
        
        expect(result.html()).toBeNull()
    })

    it("should render clearAll button", () => {
        const result = shallow(<ClearAll items={[{id: 1, task: "test", date: new Date()}]} />)

        expect(result.html()).toEqual("<div class=\"clearAll\"><button>Clear all</button></div>");
    })
});