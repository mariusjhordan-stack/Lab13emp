import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const out='../../.docx_work/evidence/';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:900}});
await page.goto('http://localhost:5175',{waitUntil:'networkidle'});
await page.waitForFunction(()=>document.images.length>=15&&[...document.images].every(i=>i.complete&&i.naturalWidth>0));
await page.locator('#catalogo').scrollIntoViewIfNeeded();
await page.screenshot({path:out+'catalogo_desktop.png'});
await page.getByRole('button',{name:'Plantas'}).click();
await page.waitForFunction(()=>document.images.length===3&&[...document.images].every(i=>i.complete&&i.naturalWidth>0));
await page.screenshot({path:out+'filtro_plantas.png'});
await page.setViewportSize({width:390,height:780});
await page.screenshot({path:out+'catalogo_mobile.png'});
await page.setViewportSize({width:1440,height:900});
await page.goto('http://127.0.0.1:8001/admin/login/?next=/admin/',{waitUntil:'networkidle'});
await page.screenshot({path:out+'admin_login.png'});
await page.locator('#id_username').fill('admin');await page.locator('#id_password').fill('admin12345');await page.locator('input[type=submit]').click();await page.waitForURL('**/admin/');
await page.screenshot({path:out+'admin_index.png'});
await page.goto('http://127.0.0.1:8001/admin/catalogo/producto/',{waitUntil:'networkidle'});await page.screenshot({path:out+'admin_products.png'});
await page.goto('http://127.0.0.1:8001/admin/catalogo/producto/add/',{waitUntil:'networkidle'});await page.screenshot({path:out+'admin_product_form.png'});
for(const [slug,file] of [['productos','drf_productos.png'],['categorias','drf_categorias.png']]){
 await page.goto(`http://127.0.0.1:8001/api/${slug}/`,{waitUntil:'networkidle'});await page.screenshot({path:out+file});
 await page.goto(`http://127.0.0.1:8001/api/${slug}/?format=json`,{waitUntil:'networkidle'});await page.screenshot({path:out+`json_${slug}.png`});
}
await page.goto('https://github.com/mariusjhordan-stack/Lab13emp',{waitUntil:'domcontentloaded'});await page.screenshot({path:out+'github_commits.png'});
await browser.close();
