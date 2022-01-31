import React from "react";
import TaskCounter from "@components/taskCounter";
import { shallow } from "Enzyme";

describe("TaskCounter", () =>{

    it("should not render", () => {
        const result = shallow(<TaskCounter />)
        
        expect(result.html()).toBeNull()
    })

    it("should render 0 tasks", () => {
        const result = shallow(<TaskCounter items={0} />)
        
        expect(result.html()).toEqual("<div class=\"counter\">0 tasks</div>")
    })

    it("should render 1 task", () => {
        const result = shallow(<TaskCounter items={1} />)
        
        expect(result.html()).toEqual("<div class=\"counter\">1 task</div>")
    })

    it("should render 2 tasks", () => {
        const result = shallow(<TaskCounter items={2} />)
        
        expect(result.html()).toEqual("<div class=\"counter\">2 tasks</div>")
    })
});