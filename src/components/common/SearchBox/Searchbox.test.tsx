import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBox } from "components/common/SearchBox";

test("Searchbox renders correctly with search input and search button", () => {
  render(<SearchBox onSubmit={jest.fn()} inputplaceholder="Wpisz NIP" />);

  const searchInput = screen.getByPlaceholderText(/wpisz nip/i);
  expect(searchInput).toBeInTheDocument();

  const searchBtn = screen.getByRole("button", { name: /szukaj/i });
  expect(searchBtn).toBeInTheDocument();
});

test("Searchbox fires onSubmit function with correct argument", async () => {
  const mockFn = jest.fn();
  render(<SearchBox onSubmit={mockFn} inputplaceholder="Wpisz NIP" />);

  const searchInput = screen.getByPlaceholderText(/wpisz nip/i);
  await userEvent.type(searchInput, "9112041150");

  const searchBtn = screen.getByRole("button", { name: /szukaj/i });
  await userEvent.click(searchBtn);

  expect(mockFn).toHaveBeenCalledWith("9112041150");
});
