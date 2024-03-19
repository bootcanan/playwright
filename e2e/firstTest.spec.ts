import {test,expect} from  '@playwright/test'


// test("open the page",async ({page}) => {
//     await  page.goto('https://fakestoreapi.com/docs');
//     await expect(page).toHaveURL('https://fakestoreapi.com/docs');
// })

test('GET REQUEST',async ({request}) => {
    const response= await request.get("https://fakestoreapi.com/products/1")

    console.log(await response.json());
    expect(response.status()).toBe(200);
    const value=await response.json();
    console.log(value.id);
    expect(value.id).toBe(1);

    expect(value).toHaveProperty('title', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');


})


test('POST REQUEST',async ({request}) => {
    const response= await request.post("https://fakestoreapi.com/products",{

   data:{
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'


   }



    })

    expect(response.status()).toBe(200);




})