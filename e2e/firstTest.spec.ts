import {test,expect} from  '@playwright/test'


test("open the page",async ({page}) => {
    await  page.goto('https://fakestoreapi.com/docs');
    await expect(page).toHaveURL('https://fakestoreapi.com/docs');
})