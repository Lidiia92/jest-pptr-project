import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import TopBar from "../pages/components/TopBar";

import { username, password } from "../config";

describe("End to End testing", () => {
  let homePage;
  let topBar;
  let loginPage;
  let feedbackPage;

  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });

  it("should load the home page", async () => {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
  });

  it("should submit feedback", async () => {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback(
      "test",
      "testemail@gmail.com",
      "test subject",
      "test test test"
    );
  });

  it("should login into application", async () => {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login(username, password);
  });
});
