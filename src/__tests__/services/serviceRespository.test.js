import { getValueByUrl, getRepositoriesByUser } from "../../services/serviceRepository";

describe("Service Auctions", () => {
  it("getValueByUrl", () => {
    const response = {
      ok: true,
      status: 200
    };
    global.fetch = jest.fn(() => Promise.resolve(response));
    getValueByUrl('url');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("getRepositoriesByUser", () => {
    const response = {
      ok: true,
      status: 200
    };
    global.fetch = jest.fn(() => Promise.resolve(response));
    getRepositoriesByUser('gitHub');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});



