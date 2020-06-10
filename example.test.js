import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FeedbackPage from "./pages/FeedbackPage";
import TopBar from "./pages/components/TopBar";

describe("Example", () => {
  let homepage;
  let topBar;
  let loginPage;
  let feedbackPage;

  beforeAll(async () => {
    jest.setTimeout(20000);
    homepage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });

  it("should open the home page", async () => {
    await homepage.visit();
  });

  it("navbar should be visible", async () => {
    await homepage.isNavBarVisible();
    await topBar.isTopBarDisplayed();
  });

  it("try to login", async () => {
    await loginPage.visit();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login("username", "password");
  });

  it.only("feedback test", async () => {
    feedbackPage.visit();
    feedbackPage.isFeedbackFormDisplayed();
    feedbackPage.submitFeedback(
      "test",
      "testemail@gmail.com",
      "test subject",
      "test test test"
    );
  });
});
