import { homeUrl} from "../../lib/pages";
import { homePageTitle, searchLodowkiPageTitle, searchPhrase} from "../../lib/wordData";

describe("Allegro.pl Product Search", async () =>{
    it("should open the main url and close alert verfi the title",async () => {
        await browser.url(homeUrl);

        const alertBtn = await $("/html/body/div[2]/div[7]/div/div/div/div/div[2]/div[2]/button[1]");

        await alertBtn.click();

        expect(browser).toHaveTitle(homePageTitle);
    })
it("search for a product and verify the search text value and redirect to new page and verify the title " , async() =>{
    const searchInput = await $("//input[@name='string']");
    const searchBtn = await $("/html/body/div[2]/div[3]/div/div/div/div/div/div[3]/header/div/div/div/div/form/button");
   
    await searchInput.setValue(searchPhrase);
    await searchBtn.click();

    expect(await searchInput.getValue()).toContain(searchPhrase);
    expect( await browser).toHaveValue(searchLodowkiPageTitle);

})
});
