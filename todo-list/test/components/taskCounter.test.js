import React from "react";
import TaskCounter from "@components/taskCounter";
import { shallow } from "Enzyme";
import TasksContext, { TasksProvider }  from "../../src/contexts/tasks"

describe("TaskCounter", () =>{

    it("should render 0 tasks", () => {
        const result = shallow(<TasksProvider><TaskCounter /></TasksProvider>)
        
        expect(result.html()).toEqual("<div class=\"counter\">0 tasks</div>")
    })

    it("should render 1 task", () => {
        const result = shallow(<TasksProvider><TaskCounter /></TasksProvider>)
        
        expect(result.html()).toEqual("<div class=\"counter\">1 task</div>")
    })

    it("should render 2 tasks", () => {
        const result = shallow(<TasksProvider><TaskCounter /></TasksProvider>)
        
        expect(result.html()).toEqual("<div class=\"counter\">2 tasks</div>")
    })
});