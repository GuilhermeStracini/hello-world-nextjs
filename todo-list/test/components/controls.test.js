import React from "react";
import Controls from "@components/controls";
import { shallow } from "Enzyme";

describe("Controls", () =>{
    it("shoudld render controls", () => {
        const result = shallow(<Controls />)

        expect(result.children().length).toEqual(2)
    });
});