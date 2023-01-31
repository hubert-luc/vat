import userEvent from "@testing-library/user-event";
import { render, screen } from "test-utils";
import VatVerifyView from ".";

test("show details (name, address) for the company that are vat payer", async () => {
  render(<VatVerifyView />);

  const input = screen.getByPlaceholderText(/wpisz nip/i);

  await userEvent.type(input, "9112041150");

  const searchBtn = screen.getByRole("button", { name: /szukaj/i });

  await userEvent.click(searchBtn);

  const companyName = await screen.findByRole("heading", {
    name: "HUBERT ŁUC",
  });
  expect(companyName).toBeInTheDocument();

  const companyAddress = await screen.findByText("AKACJOWA 6 56-400 OLEŚNICA", {
    exact: false,
  });
  expect(companyAddress).toBeInTheDocument();
});

describe("error cases cause error messages", () => {
  test("show an error for the company that are not vat payer", async () => {
    render(<VatVerifyView />);

    const input = screen.getByPlaceholderText(/wpisz nip/i);

    await userEvent.type(input, "5080093873");

    const searchBtn = screen.getByRole("button", { name: /szukaj/i });

    await userEvent.click(searchBtn);

    const errorMessage = await screen.findByText(
      "Przedsiębiorca nie jest płatnikiem VAT"
    );

    expect(errorMessage).toBeInTheDocument();
  });

  test("show an error for a wrong vat number", async () => {
    render(<VatVerifyView />);

    const input = screen.getByPlaceholderText(/wpisz nip/i);

    await userEvent.type(input, "503");

    const searchBtn = screen.getByRole("button", { name: /szukaj/i });

    await userEvent.click(searchBtn);

    const errorMessage = await screen.findByText("Niepoprawny NIP");

    expect(errorMessage).toBeInTheDocument();
  });
});
