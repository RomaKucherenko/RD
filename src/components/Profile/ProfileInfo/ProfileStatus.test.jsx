import { create } from "react-test-renderer"
import ProfileStatusClassComponent from "./ProfileStatusClassComponent";
import React from "react";

describe("Profile Status Component", () => {
    test("status in profile should be in state", () => {
        const component = create(<ProfileStatusClassComponent status="Polya"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("Polya")
    });

    test("props callback should be called", () => {
        //идея в том, чтобы проверить вызывается ли наш callBack
        //создаётся mockCallback, который вызовется, если наш CB кто-то вызвал
        const mockCallback = jest.fn()
        const component = create(<ProfileStatusClassComponent status="Polya" updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });

    test("after render <span> should be displayed", () => {
        const component = create(<ProfileStatusClassComponent status="Polya"/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children.length).not.toBeNull()
    })

    test("<input> should be displayed instead <span>, when we activate editMode", () => {
        const component = create(<ProfileStatusClassComponent status="Polya"/>)
        const root = component.root
        const span = root.findByType("span")
        span.props.onClick()//activateEditMode
        const input = root.findByType("input")
        expect(input.props.value).toBe("Polya")
    })

    test("after render <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatusClassComponent status="Polya"/>)
        const root = component.root
        expect(() => {
            root.findByType("input")//тк input не рисуется, то метод выдаёт ошибку, которую мы ловим
        }).toThrow()
    })
})