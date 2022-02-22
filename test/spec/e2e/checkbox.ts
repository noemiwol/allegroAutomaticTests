import { homeUrl,agdUrl} from "../../lib/pages";
import {agdPageTitle } from "../../lib/wordData";

describe("We check the operation of the check box in the household appliances category›Refrigerators and freezers›No Frost refrigerators ", async() =>{
    it("Should open home page and verify url", async () =>{
        await browser.url(homeUrl);

        const alertBtn = await $("//*[@id='spark']/div[3]/div[1]/div/button");

        await alertBtn.click();

        expect(browser).toHaveUrl(homeUrl);
    })

    it("Clik on household appliances›Refrigerators and freezers›No Frost refrigerators", async () =>{
        const agdBtn:WebdriverIO.Element = await $("//*[@id='section_menu-list']/div/ul/li[2]/a");
        await agdBtn.click();

        const refrigeratorsBtn:WebdriverIO.Element = await $("//*[@id='section_category']/div[1]");
        await refrigeratorsBtn.click();

        const noFrostRefrigeratorsBtn:WebdriverIO.Element = await $("//*[@id='section_category']/div[3]");
        await noFrostRefrigeratorsBtn.click();
        
        expect(await browser).toHaveUrl(agdUrl);
        expect( await browser).toHaveTitle(agdPageTitle);
        
    })

    it("Should be a checkbox marked width height depth", async () =>{
        const scrollHeight:WebdriverIO.Element = await $("//*[@id='section_filters']/div[3]/div[3]/div[1]/div/h6");
        await scrollHeight.scrollIntoView();

        const height:WebdriverIO.Element = await $("//*[@id='section_filters']/div[3]/div[3]/div[2]/div[3]/div[1]/div[1]/i");
        await height.click();

        const scrollWidth:WebdriverIO.Element = await $("//*[@id='section_filters']/div[3]/div[4]/div[1]/div/h6");
        await scrollWidth.scrollIntoView();

        const width:WebdriverIO.Element =await  $("//*[@id='section_filters']/div[3]/div[4]/div[2]/div[3]/div[1]/div[1]/i");
        await width.click();

        const depth:WebdriverIO.Element = await $("//*[@id='section_filters']/div[3]/div[5]/div[2]/div[4]/div/div[1]/i");
        await depth.click();

        await expect(await height.isSelected).toBeTruthy();
        await expect(await width.isSelected).toBeTruthy();
        await expect(await depth.isSelected).toBeTruthy();
    })
    
    it("clik button apply filters", async ()=>{
        const apllyFiltresBtn:WebdriverIO.Element = await $("//*[@id='section_filters']/div[4]/button/span");
        await apllyFiltresBtn.click();
    })
});