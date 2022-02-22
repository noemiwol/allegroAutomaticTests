    import { homeUrl, redirectSearchUrl} from "../../lib/pages";
    import { homePageTitle, searchLodowkiPageTitle, searchPhrase} from "../../lib/wordData";

    describe("MediaExpert Product Search", async () =>{
        it("should open the main url and close alert verfi the title",async () => {
            await browser.url(homeUrl);

            const alertBtn = await $("//*[@id='spark']/div[3]/div[1]/div/button");

            await alertBtn.click();

            expect(browser).toHaveTitle(homePageTitle);
        })
        it("search for a product and verify the search text value and redirect to new page and verify the title " , async() =>{
            const searchInput = await $("//*[@id='section_header-desktop']/div/div/div[2]/div/form/div[1]/input");
            const searchBtn = await $("//*[@id='section_header-desktop']/div/div/div[2]/div/form/button/span/i");
    
            await searchInput.setValue(searchPhrase);
            await searchBtn.click();

            expect(await browser).toHaveUrl(redirectSearchUrl);
            expect( await browser).toHaveTitle(searchLodowkiPageTitle);
            expect(await searchInput.getValue()).toContain("");

        })
    });
