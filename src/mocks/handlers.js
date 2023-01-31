import { rest } from "msw";

export const handlers = [
  rest.get("http://apilayer.net/api/validate", (req, res, ctx) => {
    const nip = req.url.searchParams.get("vat_number");
    switch (nip) {
      case "PL503":
        return res(
          ctx.json({
            valid: false,
            database: "ok",
            format_valid: false,
            query: "PL503",
            country_code: "",
            vat_number: "",
            company_name: "",
            company_address: "",
          })
        );
      case "PL5080093873":
        return res(
          ctx.json({
            valid: false,
            database: "ok",
            format_valid: true,
            query: "PL5080093873",
            country_code: "PL",
            vat_number: "5080093873",
            company_name: "",
            company_address: "",
          })
        );
      case "PL9112041150":
        return res(
          ctx.json({
            valid: true,
            database: "ok",
            format_valid: true,
            query: "PL9112041150",
            country_code: "PL",
            vat_number: "9112041150",
            company_name: "HUBERT ŁUC",
            company_address: "AKACJOWA 6\n56-400 OLEŚNICA",
          })
        );
      default:
        return req.passthrough();
    }
  }),
];
