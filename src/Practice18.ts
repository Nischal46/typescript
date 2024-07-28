//web scrapping

import puppeteer from "puppeteer";

async function webscrapping() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    //defining url to visit that page
    const url = 'https://www.example.com';
    await page.goto(url, { waitUntil: 'networkidle2' });


    const nestedvalue = await page.evaluate(() => {
        //declare empty object or array
        const result = <any>{};

        //if we want a single value to scarp
        const data = document.querySelector('css-value')?.innerHTML;

        //if we want to scrap multiple nested value

        const nestedvalue = document.querySelectorAll('div');

        nestedvalue.forEach(cl => {
            const key = cl.innerHTML.trim();
            const value = cl.nextElementSibling ? cl.nextElementSibling.innerHTML.trim() : '';
            result[key] = value
        })

        return result;

    })


    console.log('Scraped data :', nestedvalue);
    
    await browser.close();
}

//then calling function


//function overloading

//it provides same fn with different parameters

function Process1(a: string, b: string): string;

function Process1(a:number, b: number): string;

function Process1(a: any, b: any): any{
    for(let i = 0; i < 5; i++){
        console.log(`first input: ${a} and last input: ${b}`);
    }
}

Process1('nischal', 'baniya')
Process1(2,3)