describe("Module 5: Advanced examples", () => {
  beforeEach(async () => {
    await browser.url("/showcase/angular/appointmentplanner/#/doctors");
  });

  it("$ command", async () => {
    const baseElement = await $(".specialist-display");
    const childrenElement = await baseElement.$("#Specialist_1");
    // OR
    const element = await $(".specialist-display").$("#Specialist_1");
  });

  it("$$ command", async () => {
    const baseElement = await $(".specialist-display");
    const childrenElements = await baseElement.$$("#Specialist_item");
    // OR
    const elements = await $(".specialist-display").$$("#Specialist_item");
  });

  it("click command", async () => {
    // generally clicks the element
    // await $(".specialist-display").click();
    // clicks 20 horizontal pixels away from the center of the element
    await $(".specialist-display").click({ x: 20 });
    // clicks the right mouse button 30 vertical pixels away from the center of the element
    // await $(".specialist-display").click({button: 2, y: 30});
  });

  it("setValue command", async () => {
    await $(".specialization-types button.e-control").click();

    await $("#Name input").setValue("John Doe");
    await $("#Name input").getValue(); // John Doe
    await $("#Name input").setValue("Mr Robot");
    await $("#Name input").getValue(); // Mr Robot
  });

  it("addValue command", async () => {
    await $(".specialization-types button.e-control").click();

    await $("input[name='Email']").addValue("test");
    await $("input[name='Email']").getValue(); // test
    await $("input[name='Email']").addValue("@test.com");
    await $("input[name='Email']").getValue(); // test@test.com
  });

  it("isExisting command", async () => {
    await $(".specialist-display").isExisting(); // outputs: true
    await $("#notExisting").isExisting(); // outputs: false
  });

  it("waitForDisplayed command", async () => {
    await $(".specialist-display").waitForDisplayed({ timeout: 3000 }); // true
    await $("#notVisible").waitForDisplayed({ timeout: 3000, interval: 1000 }); // error
  });

  it("waitForExist command", async () => {
    await $(".specialist-display").waitForExist(); // true
    await $("#notVisible").waitForExist({ timeout: 3000 }); // true
    await $("#notExist").waitForExist({ timeout: 3000, interval: 1000 }); // error
  });
});
