import { delay } from '@/lib/utils';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';


export const dataList = async (url) => {
    try {
        // npx puppeteer browsers install chrome
        const customUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setUserAgent(customUA);
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        const result = await page.evaluate(() => {

            const responseMovieName = document.querySelector('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-3.iDcCm > div.sc-bf57f3f2-0.gDRYed > h1');
            const name = responseMovieName ? responseMovieName.textContent : "";
            //-------------------------------------------
            const responseRating = document.querySelector('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-3.iDcCm > div.sc-8eab3bd3-0.eGtDkt.sc-bf57f3f2-1.dhDnUr > div > div:nth-child(1) > a > span > div > div.sc-d541859f-0.hNIoIx > div.sc-d541859f-2.kxphVf > span.sc-d541859f-1.imUuxf');
            const rating = responseRating ? responseRating.textContent : "";
            //-------------------------------------------
            const responsePoster = document.querySelector('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-4.kKSIxf > div.sc-3b24bae4-5.cRpCGI > div.sc-3b24bae4-7.kVDEyQ > div > div.ipc-media.ipc-media--poster-27x40.ipc-image-media-ratio--poster-27x40.ipc-media--media-radius.ipc-media--baseAlt.ipc-media--poster-l.ipc-poster__poster-image.ipc-media__img > img');
            const poster = responsePoster ? responsePoster.getAttribute('src') : "";
            //---------------------------------------------------------------
            const responseCategory = document.querySelectorAll('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-4.kKSIxf > div.sc-3b24bae4-6.hckjhB > div.sc-3b24bae4-10.iuVgEl > section > div.ipc-chip-list--baseAlt.ipc-chip-list.ipc-chip-list--nowrap.sc-865706aa-4.bjiBzC > div.ipc-chip-list__scroller > a');
            const category = responseCategory ? Array.from(responseCategory).map(cat => cat.textContent) : [];
            //---------------------------------------------------------------
            const responseDescription = document.querySelector('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-4.kKSIxf > div.sc-3b24bae4-6.hckjhB > div.sc-3b24bae4-10.iuVgEl > section > p > span.sc-865706aa-0.iSndHN');
            const description = responseDescription ? responseDescription.textContent : "";
            //---------------------------------------------------------------
            /*
               const responseDirectors = document.querySelectorAll('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-4.kKSIxf > div.sc-3b24bae4-6.hckjhB > div.sc-3b24bae4-10.iuVgEl > section > div.sc-bf57f3f2-3.jiWlfr > ul > li:nth-child(1) > div > ul > li');
               let directors = [];
               if (responseDirectors) {
                   const responseNumbers = Array.from(responseDirectors);
                   for (let i = 0; i < responseNumbers.length; i++) {
                       directors.push(responseNumbers[i].textContent);
                   }
               } else {
                   directors = []
               }
   */

            const findDirectors = () => {
                const directorsUl = document.querySelectorAll('ul > li');
                const targetedDirectorli = Array.from(directorsUl).find(l => l.textContent.includes('Director'));

                // Check if we found the director element
                if (targetedDirectorli) {
                    // Find the ul inside the targeted li
                    const directorListUl = targetedDirectorli.querySelector('ul');

                    if (directorListUl) {
                        const directorItems = directorListUl.querySelectorAll('li');
                        const directors = Array.from(directorItems).map(li => li.textContent);
                        return directors;
                    } else {
                        return [];
                    }
                } else {
                    return [];
                }
            }

            const directors = findDirectors();
            //---------------------------------------------------------------

            const responseWriters = document.querySelectorAll('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > section > div:nth-child(5) > section > section > div.sc-3b24bae4-4.kKSIxf > div.sc-3b24bae4-6.hckjhB > div.sc-3b24bae4-10.iuVgEl > section > div.sc-bf57f3f2-3.jiWlfr > ul > li:nth-child(2) > div > ul > li');
            let writers = [];
            if (responseWriters) {
                const responseWritersNumbers = Array.from(responseWriters);
                for (let i = 0; i < responseWritersNumbers.length; i++) {
                    writers.push(responseWritersNumbers[i].textContent);
                }
            } else {
                writers = []
            }



            //---------------------------------------------------------------
            const responseCast = document.querySelectorAll('main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > div > section > div > div.sc-cc9266a0-1.iKZxPb.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.sc-cd7dc4b7-0.ycheS.title-cast.title-cast--movie.celwidget > div.ipc-shoveler.ipc-shoveler--base.ipc-shoveler--page0.title-cast__grid > div.ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--wraps-at-above-l.ipc-shoveler__grid > div');

            let cast = [];

            if (responseCast) {
                const responseCastNumbers = Array.from(responseCast);
                for (let i = 0; i < responseCastNumbers.length; i++) {
                    const castItem = document.querySelector(`main > div > section.ipc-page-background.ipc-page-background--base.sc-91ea8ab7-0.evrMJc > div > section > div > div.sc-cc9266a0-1.iKZxPb.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.sc-cd7dc4b7-0.ycheS.title-cast.title-cast--movie.celwidget > div.ipc-shoveler.ipc-shoveler--base.ipc-shoveler--page0.title-cast__grid > div.ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--wraps-at-above-l.ipc-shoveler__grid > div:nth-child(${i + 1}) > div.sc-cd7dc4b7-7.vCane > a`);
                    cast.push(castItem ? castItem.textContent : "");
                }
            } else {
                cast = []
            }

            //---------------------------------------------------------------
            /*
            const name = "";
            const rating = "";
            const poster = "";
            const category = [];
            const description = "";
            const directors = [];
            const writers = [];
           const cast = [];
*/
            return { name, rating, poster, category, description, directors, writers, cast };
        });

        return result;

    } catch (error) {
        console.log(error);
    }
}




export const POST = async (Request) => {
    try {
        const list = await Request.json();
        //-------------------------------------

        const x = [];
        for (let i = 0; i < list.length; i++) {
            const url = list[i];
            const data = await dataList(url);
            x.push({
                id: Date.now(),
                url,
                name: data.name,
                rating: data.rating,
                poster: data.poster,
                category: data.category,
                description: data.description,
                directors: data.directors,
                writers: data.writers,
                cast: data.cast,

            });
            await delay(100);
        }


        //-------------------------------------
        const response = NextResponse.json(x);
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
        return response
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "POST Error", err }, { status: 500 });
    }
}

