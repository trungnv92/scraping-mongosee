    const puppeteer = require('puppeteer');

    (async() => {
        
        // Mở trình duyệt mới và tới trang của kenh14
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://giacaphe.com/');

        const listGiaCF = await page.evaluate(() => {
            let table = document.querySelector('table#gianoidia');
            var listThiTruong = [];
            //rows[0].cells[0]
            for (let i = 1; i < table.rows.length; i++) {
                //for (let j = 0; j < table.rows[i].cells.length; j++) {
                    //console.log("name" + table.rows[i].cells.item(0).innerHTML);
                    var names = table.rows[i];
                    var ten = names.childNodes[0];
                    //var ten = names.getElementsByTagName('td')[2].innerHTML;
                    var thitruong = {
                        name:ten
                    }
                    listThiTruong.push(thitruong);
                //}
            }
            return listThiTruong;

        });

        // In ra kết quả và đóng trình duyệt
        console.log(listGiaCF);
        await browser.close();
    })();