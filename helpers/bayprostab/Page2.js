import { asLib } from "../../util/asLib";



export const Page2 = ({doc},m, y) => {

    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(20);
    doc.text('wmGgBGm', 105, 20.583, null, null, "center");
    doc.setFontSize(16);
    doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
    doc.text('cÖ‡R±: wRI', 160, 27.357, null, null, "left");
   

    doc.setFontSize(14);
    doc.text('cwiKíbvKvix t', 13, 35.173, null, null, "left");

    doc.setFontSize(16);
    doc.text('Avmjvg Rvgvb', 40,  35.173, null, null, "left");
    doc.setFontSize(14);


    doc.text('ZvwiLt  ' + asLib.util.dateFormat(new Date(),"."), 160, 35.173, null, null, "left");
   
    doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
    doc.text('LvZt', 13, 47.188, null, null, "left");
   
    doc.setFont("times", "normal");
    doc.text('Rent', 25, 47.188, null, null, "left");
   
    doc.setFont("SutonnyMJ", "normal");



    doc.text('welqt', 13, 53.246, null, null, "left");

    doc.setFontSize(16);
    doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25,53.246, null, null, "left");
    doc.setFontSize(14);



    doc.text('m¤úv`‡bi Kvjt      ' + asLib.util.dateFormat(new Date(),"."), 13, 59.304, null, null, "left");
    doc.text('ZvwiL ‡_‡Kt                    ' + asLib.util.dateFormat( asLib.util.dateAdd(new Date(),15) ,"."), 110.293, 59.304, null, null, "center");
    doc.text('ZvwiL', 185.210, 59.304, null, null, "left");
    doc.text('AvbygvwbK e¨q (h_vm¤¢e we¯ÍvwiZ)', 13, 72.026, null, null, "left");
    doc.text('cÖv°wjZ e¨q', 13, 78.084, null, null, "left");
    doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 78.084, null, null, "center");

    doc.line(13, 80.911, 200, 80.911) // horizontal line
    doc.line(13, 100.297, 200, 100.2971) // horizontal line
    doc.line(13, 222.063, 200, 222.063) // horizontal line
    doc.line(13, 229.063, 200, 229.063) // horizontal line

    doc.line(13, 80.911, 13, 229.063) // vertical line
    doc.line(69.300, 80.911, 69.300, 229.063) // vertical line
    doc.line(92.321, 80.911, 92.321, 229.063) // vertical line
    doc.line(111.302, 80.911, 111.302, 229.063) // vertical line
    doc.line(133.919, 80.911, 133.919, 229.063) // vertical line
    doc.line(200, 80.911, 200, 229.063) // vertical line


    doc.setFont("SutonnyMJ", "bold");
    doc.text('evwo fvov : ', 15, 106, null, null, "left");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`- ${m} ${y}`, 15, 112, null, null, "left");
    doc.text('- M¨vm wej', 15, 118, null, null, "left");
    doc.text('-f¨vU (†Rbv‡ij Acv‡ikb)', 15, 124, null, null, "left");
    doc.text('-- 30,000    15%', 15, 130, null, null, "left");

    doc.line(35, 127.5, 37, 129.5); // Multiply
    doc.line(37, 127.5, 35, 129.5); // Multiply

    doc.text('32,000/-', 90, 112, null, null, "right");
    doc.text('1,080/-', 90, 118, null, null, "right");
    doc.text('4,500/-', 90, 130, null, null, "right");

    doc.text('2', 103, 112, null, null, "right");
    doc.text('1', 103, 118, null, null, "right");
    doc.text('1', 103, 130, null, null, "right");
 
    doc.text('64,000/-', 132, 112, null, null, "right");
    doc.text('1,080/-', 132, 118, null, null, "right");
    doc.text('4,500/-', 132, 130, null, null, "right");
 

// TOR

doc.setFont("times", "normal");
doc.text(`TOR`, 136, 105, null, null, "left");

doc.setFont("SutonnyMJ", "normal");
doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm`, 167, 110, null, null, "center");
doc.text(`wej †Rbv‡ij Acv‡ikb LvZ †_‡K`, 167, 115, null, null, "center");
doc.text(`cwi‡kva Kiv n‡e | c‡i Zv wewfbœ`, 167, 120, null, null, "center");
doc.text(`cÖ‡R± †_‡K AbycvZ Abyhvqx †diZ n‡e`, 167, 125, null, null, "center");

doc.setFont("SutonnyMJ", "bold");
doc.text(`evwo fvov  : `, 136, 140, null, null, "left");

doc.setFont("times", "normal");
doc.text(`'Professor Dr. M. A. Quasem’`,167, 145, null, null, "center");
doc.setFont("SutonnyMJ", "normal");
doc.text("bv‡g U¨v·(5%) ev‡` 60,800/- Ges",167, 150, null, null, "center");

doc.text("M¨vm wej eve` 1,080/-UvKvi",167, 155, null, null, "center"); 
doc.text("2wU GKvD›Um †cÕ †PK n‡e|",167, 160, null, null, "center"); 


// VAt
doc.setFont("SutonnyMJ", "bold");
doc.text(`f¨vU:`, 136, 175, null, null, "left");
doc.setFont("SutonnyMJ", "normal");

doc.text("GKvD›Um wefv‡Mi m`‡m¨i bv‡g", 167, 180, null, null, "center");
doc.text("4,500/- †eqvivi †PK n‡e|",167, 185, null, null, "center");  





    doc.text('BDwbU', 81.012, 90.402, null, null, "center");
    doc.text('BDwbU', 101.408, 90.402, null, null, "center");
    doc.text('†gvU', 122.207, 90.402, null, null, "center");
    doc.text('m¤¢ve¨ mieivn Drm I g~j¨ Abygv‡bi', 169.459, 90.402, null, null, "center");

    doc.text('AvB‡Ug', 40.727, 94.845, null, null, "center");
    doc.text('g~j¨', 81.012, 94.845, null, null, "center");
    doc.text('msL¨v', 101.408, 94.845, null, null, "center");
    doc.text('g~j¨', 122.207, 94.845, null, null, "center");
    doc.text('wfwË‡Z', 169.459, 94.845, null, null, "center");




    doc.text('†gvU', 42.544, 226.803, null, null, "center");

    doc.setFont("SutonnyMJ", "bold");
    doc.text('†gvU', 42.544, 226.803, null, null, "center");
    doc.text('69,580/-', 132, 226.803, null, null, "right");
    doc.setFont("SutonnyMJ", "normal");



    doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
    doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

    doc.text('UvKv (K_vq)t DbmËi nvRvi cuvPkZ Avwk UvKv gvÎ', 13, 239.429, null, null, "left");
    doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");
   


    doc.text('¯^vÿi', 105, 271.729, null, null, "center");
    doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
    doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
    doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
}