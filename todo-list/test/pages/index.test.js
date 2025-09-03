import React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage, { getServerSideProps } from "@pages/index";

const fakeTodoData = [
  { id: 1, task: "test #1", date: "2022-01-26T08:56:12.295Z" },
  { id: 2, task: "test #2", date: "2022-01-26T08:56:10.765Z" },
];

describe("getServerSideProps", () => {
  window.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(fakeTodoData) }),
  );

  it("should call todo list API", async () => {
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({ props: { items: fakeTodoData } }),
    );
  });
});

describe("IndexPage", () => {
  it("should render the heading", () => {
    render(<IndexPage items={fakeTodoData} />);

    const heading = screen.getByText(/ToDo app/i);

    expect(heading).toBeInTheDocument();
  });

  it("should render task count section", () => {
    render(<IndexPage items={fakeTodoData} />);

    const tasks = screen.getByText(/2 tasks/i);

    expect(tasks).toBeInTheDocument();
  });
});
