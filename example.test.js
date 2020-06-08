import HomePage from "./pages/HomePage";

describe("Example", () => {
  let homepage;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
  });

  it("should open the home page", async () => {
    await homepage.visit();
  });

  it("navbar should be visible", async () => {
    await homepage.isNavBarVisible();
  });
});
