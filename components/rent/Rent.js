import { Lib } from "../../utils/Lib";

export const Rent = {

    Page1({ doc }, m, y, dt, rent, goRent, gas, vat, go_tax, total_tax) {

     
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.466, null, null, "center");
        doc.setFontSize(16);
        doc.text('†K›`ªxq e¨q', 105, 25.892, null, null, "center");


        doc.text('cÖ‡R±: wRI', 179.676, 25.892, null, null, "left");


        doc.setFontSize(14);
        doc.text('e¨q cÖ¯Íve', 13, 34.602, null, null, "left");
        doc.text('e¨q cÖ¯ÍveKvixi bvgt', 13, 40.600, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 49.881, 40.600, null, null, "left");
        doc.setFontSize(14);

        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 133, 40.600, null, null, "left");
        doc.text('LvZt', 13, 46.454, null, null, "left");
        doc.setFont("times", "normal");
        doc.text('Rent', 25, 46.454, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('e¨qcÖ¯Íve bs t 1', 133, 46.454, null, null, "left");




        doc.text('welqt', 13, 52.737, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 52.737, null, null, "left");
        doc.setFontSize(14);


        doc.text('BwZg‡a¨ m¤úvw`Z e¨q t  ', 133, 59.733, null, null, "left");

        doc.text('cwiKíbv m~Î (bs mn)', 133, 66.730, null, null, "left");

        doc.text('cÖv°wjZ e¨q', 13, 72.727, null, null, "left");
        doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 72.727, null, null, "center");

        doc.line(13, 74.155, 200, 74.155) // horizontal line
        doc.line(13, 92.575, 200, 92.575) // horizontal line
        doc.line(13, 214.516, 200, 214.516) // horizontal line
        doc.line(13, 220.799, 200, 220.799) // horizontal line

        doc.line(13, 74.155, 13, 220.799) // vertical line
        doc.line(68.872, 74.155, 68.872, 214.516) // vertical line
        doc.line(91.147, 74.155, 91.147, 214.516) // vertical line
        doc.line(110.423, 74.155, 110.423, 220.799) // vertical line
        doc.line(133.269, 74.155, 133.269, 220.799) // vertical line
        doc.line(148.690, 74.155, 148.690, 214.516) // vertical line
        doc.line(200, 74.155, 200, 220.799) // vertical line


        doc.text('`ªe¨/mvwf©m', 42.071, 83.781, null, null, "center");
        doc.text('BDwbU', 81.246, 83.781, null, null, "center");
        doc.text('BDwbU', 101.641, 83.781, null, null, "center");
        doc.text('†gvU', 122.844, 83.781, null, null, "center");
        doc.text('cÖ¯ÍvweZ', 141.321, 83.781, null, null, "center");
        doc.text('mieivnkZ©/‡Kv‡Ukb/b¨vh¨-', 174.347, 83.781, null, null, "center");

        doc.text('(†¯úwmwd‡Kkb)', 42.071, 87.618, null, null, "center");
        doc.text('g~j¨', 81.246, 87.618, null, null, "center");
        doc.text('msL¨v', 101.641, 87.618, null, null, "center");
        doc.text('g~j¨', 122.844, 87.618, null, null, "center");
        doc.text('mieivn', 141.321, 87.618, null, null, "center");
        doc.text('g~j¨ wbwðZKiY mieivn c×wZ', 174.347, 87.618, null, null, "center");
        doc.text('Drm', 141.321, 91.657, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('evwo fvov : ', 15, 100, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`- ${m} ${y}`, 15, 106, null, null, "left");
        doc.text('- M¨vm wej', 15, 112, null, null, "left");
        doc.text('-f¨vU (†Rbv‡ij Acv‡ikb)', 15, 118, null, null, "left");
        doc.text(`-- ${Lib.util.numberWithCommas(goRent)}    15%`, 15, 124, null, null, "left");

  

        doc.line(35, 121.5, 37, 123.5); // Multiply
        doc.line(37, 121.5, 35, 123.5); // Multiply

        doc.text(`${Lib.util.numberWithCommas(rent)}/-`, 90, 106, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(gas)}/-`, 90, 112, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(vat)}/-`, 90, 124, null, null, "right");

        doc.text('2', 103, 106, null, null, "right");
        doc.text('1', 103, 112, null, null, "right");
        doc.text('1', 103, 124, null, null, "right");

        doc.text(`${Lib.util.numberWithCommas(rent * 2)}/-`, 132, 106, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(gas)}/-`, 132, 112, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(vat)}/-`, 132, 124, null, null, "right");

        // TOR

        doc.setFont("times", "normal");
        doc.text(`TOR`, 150, 100, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text(`${m} ${y} gv‡mi evwo`, 174.347, 105, null, null, "center");
        doc.text(`fvov I M¨vm wej †Rbv‡ij`, 174.347, 110, null, null, "center");
        doc.text(`Acv‡ikb LvZ †_‡K`, 174.347, 115, null, null, "center");
        doc.text(`cwi‡kva Kiv n‡e | c‡i Zv`, 174.347, 120, null, null, "center");
        doc.text(`wewfbœ cÖ‡R± †_‡K AbycvZ`, 174.347, 125, null, null, "center");
        doc.text(`Abyhvqx †diZ n‡e|`, 174.347, 130, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text(`evwo fvov  : `, 150, 140, null, null, "left");

        doc.setFont("times", "normal");
        doc.text(`'Professor Dr. M. A.`, 174.347, 145, null, null, "center");
        doc.text(`Quasem’`, 174.347, 150, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");

     
        doc.text("bv‡g U¨v·(5%) ev‡` " + `${Lib.util.numberWithCommas((rent * 2) - total_tax)}/-`, 174.347, 155, null, null, "center");
        doc.text("Ges M¨vm wej eve` " + `${Lib.util.numberWithCommas(gas)}/-`, 174.347, 160, null, null, "center");
        doc.text("UvKvi 2wU GKvD›U †cÕ †PK n‡e", 174.347, 165, null, null, "center");

        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 150, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");

        doc.text("GKvD›Um wefv‡Mi m`‡m¨i", 174.347, 180, null, null, "center");
        doc.text("bv‡g †Rbv‡ij Acv‡ik‡bi", 174.347, 185, null, null, "center");
        doc.text("f¨vU+U¨v· eve`", 174.347, 190, null, null, "center");
        doc.text(`(${Lib.util.numberWithCommas(vat)}+${Lib.util.numberWithCommas(go_tax)})=${Lib.util.numberWithCommas(parseInt(vat) + parseInt(go_tax))}/-`, 174.347, 195, null, null, "center");
        doc.text("UvKvi  †eqvivi †PK n‡e|", 174.347, 200, null, null, "center");



        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.071, 219.228, null, null, "center");

        let total = parseInt(rent * 2) + parseInt(gas) + parseInt(vat);

        doc.text(`${Lib.util.numberWithCommas(total)}/-`, 132, 219.228, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text(`†gvU cÖv°wjZ e¨q (K_vq)t ${Lib.util.inword.bn(total)} UvKv gvÎ`, 13, 226.144, null, null, "left");
        doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
        doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
        doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

        doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
        doc.text('¯^vÿi', 105, 276.728, null, null, "center");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");

    },
    Page2({ doc }, m, y, dt, rent, goRent, gas, vat, go_tax,total_tax) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
        doc.text('cÖ‡R±: wRI', 160, 27.357, null, null, "left");


        doc.setFontSize(14);
        doc.text('cwiKíbvKvix t', 13, 35.173, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 40, 35.173, null, null, "left");
        doc.setFontSize(14);


        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 35.173, null, null, "left");

        doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
        doc.text('LvZt', 13, 47.188, null, null, "left");

        doc.setFont("times", "normal");
        doc.text('Rent', 25, 47.188, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");



        doc.text('welqt', 13, 53.246, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 53.246, null, null, "left");
        doc.setFontSize(14);



        doc.text('m¤úv`‡bi Kvjt      ' + Lib.util.dateFormat(dt, "."), 13, 59.304, null, null, "left");
        doc.text('ZvwiL ‡_‡Kt                    ' + Lib.util.dateFormat(Lib.util.dateAdd(dt, 15), "."), 110.293, 59.304, null, null, "center");
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
        doc.text(`-- ${Lib.util.numberWithCommas(goRent)}    15%`, 15, 130, null, null, "left");


        doc.line(35, 127.5, 37, 129.5); // Multiply
        doc.line(37, 127.5, 35, 129.5); // Multiply

        doc.text(`${Lib.util.numberWithCommas(rent)}/-`, 90, 112, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(gas)}/-`, 90, 118, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(vat)}/-`, 90, 130, null, null, "right");

        doc.text('2', 103, 112, null, null, "right");
        doc.text('1', 103, 118, null, null, "right");
        doc.text('1', 103, 130, null, null, "right");

        doc.text(`${Lib.util.numberWithCommas(rent * 2)}/-`, 132, 112, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(gas)}/-`, 132, 118, null, null, "right");
        doc.text(`${Lib.util.numberWithCommas(vat)}/-`, 132, 130, null, null, "right");


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
        doc.text(`'Professor Dr. M. A. Quasem’`, 167, 145, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("bv‡g U¨v·(5%) ev‡` " + `${Lib.util.numberWithCommas((rent * 2) - total_tax)}/- Ges`, 167, 150, null, null, "center");

        doc.text("M¨vm wej eve` " + `${Lib.util.numberWithCommas(gas)}/--UvKvi`, 167, 155, null, null, "center");
        doc.text("2wU GKvD›Um †cÕ †PK n‡e|", 167, 160, null, null, "center");




        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 136, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");



        doc.text("GKvD›Um wefv‡Mi m`‡m¨i bv‡g", 167, 180, null, null, "center");
        doc.text("†Rbv‡ij Acv‡ik‡bi f¨vU+U¨v· eve`", 167, 185, null, null, "center");
        doc.text(`(${Lib.util.numberWithCommas(vat)}+${Lib.util.numberWithCommas(go_tax)})=${Lib.util.numberWithCommas(parseInt(vat) + parseInt(go_tax))}/-`, 167, 190, null, null, "center");
        doc.text("UvKvi †eqvivi †PK n‡e|", 167, 195, null, null, "center");



        doc.text('BDwbU', 81.012, 90.402, null, null, "center");
        doc.text('BDwbU', 101.408, 90.402, null, null, "center");
        doc.text('†gvU', 122.207, 90.402, null, null, "center");
        doc.text('m¤¢ve¨ mieivn Drm I g~j¨ Abygv‡bi', 169.459, 90.402, null, null, "center");

        doc.text('AvB‡Ug', 40.727, 94.845, null, null, "center");
        doc.text('g~j¨', 81.012, 94.845, null, null, "center");
        doc.text('msL¨v', 101.408, 94.845, null, null, "center");
        doc.text('g~j¨', 122.207, 94.845, null, null, "center");
        doc.text('wfwË‡Z', 169.459, 94.845, null, null, "center");

        let total = parseInt(rent * 2) + parseInt(gas) + parseInt(vat);


        doc.text('†gvU', 42.544, 226.803, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.544, 226.803, null, null, "center");
        doc.text(`${Lib.util.numberWithCommas(total)}/-`, 132, 226.803, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
        doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

        doc.text(`UvKv (K_vq)t ${Lib.util.inword.bn(total)} UvKv gvÎ`, 13, 239.429, null, null, "left");
        doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");



        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
        doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
    },
    Go({ doc }, m, y, dt, rent, goRent, gas, vat) {

        let total = parseInt(rent * 2) + parseInt(gas) + parseInt(vat);

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('evwo bs 5/4, eøK- Gd, jvjgvwUqv, XvKv  1209', 105, 27.357, null, null, "center");

        doc.setFontSize(22);
        doc.text('     †_‡K Li‡Pi PvU©', 105, 35, null, null, "center");
        doc.setFontSize(20);
        doc.setFont("times", "normal");
        doc.text('GO', 78, 35, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 42, null, null, "left");



        doc.line(13, 47, 200, 47) // horizontal line
        doc.line(13, 62, 200, 62) // horizontal line

        doc.line(13, 180, 200, 180) // horizontal line
        doc.line(13, 190, 200, 190) // horizontal line

        doc.line(13, 47, 13, 190) // vertical line
        doc.line(25, 47, 25, 190) // vertical line
        doc.line(105, 47, 105, 190) // vertical line
        doc.line(133, 47, 133, 190) // vertical line
        doc.line(160, 47, 160, 190) // vertical line
        doc.line(200, 47, 200, 190) // vertical line


        doc.setFont("SutonnyMJ", "bold");
        doc.text('µg.', 15, 54, null, null, "left");
        doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 54, null, null, "center");
        doc.text('UvKvi cwigvb', 120, 54, null, null, "center");
        doc.text('Li‡Pi LvZ', 145, 54, null, null, "center");
        doc.text('e¨q cÖ¯ÍveKvix', 180, 54, null, null, "center");
        doc.text('wefvM/ Kg©KZ©v', 180, 60, null, null, "center");


        doc.setFont("SutonnyMJ", "normal");
        doc.text('1.', 16, 70, null, null, "left");
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 30, 70, null, null, "left");

        doc.text('ms¯’vcb', 170, 70, null, null, "left");


        doc.text(`- ${m} ${y} evwo fvov`, 30, 77, null, null, "left");
        doc.text(`${Lib.util.numberWithCommas(rent * 2)}/-`, 130, 77, null, null, "right");

        doc.text("- M¨vm wej", 30, 84, null, null, "left");
        doc.text(`${Lib.util.numberWithCommas(gas)}/-`, 130, 84, null, null, "right");

        doc.text("--f¨vU (†Rbv‡ij Acv‡ikb)", 30, 91, null, null, "left");
        doc.text("-- f¨vU 15%", 60, 98, null, null, "left");
        doc.text(`${Lib.util.numberWithCommas(vat)}/-`, 130, 98, null, null, "right");


        doc.setFont("times", "normal");
        doc.text('Rent', 145, 70, null, null, "center");

        



        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU:', 30, 187, null, null, "left");
        doc.text(`${Lib.util.numberWithCommas(total)}/-`, 130, 187, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`†gvU UvKv (K_vq) : ${Lib.util.inword.bn(total)} UvKv gvÎ`, 16, 196, null, null, "left");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
        doc.text('  ""  Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

        doc.text('†Pqvig¨vb', 16, 280, null, null, "left");

    },
    Page1_24583({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.466, null, null, "center");
        doc.setFontSize(16);
        doc.text('†K›`ªxq e¨q', 105, 25.892, null, null, "center");


        doc.text('cÖ‡R±: wRI', 179.676, 25.892, null, null, "left");


        doc.setFontSize(14);
        doc.text('e¨q cÖ¯Íve', 13, 34.602, null, null, "left");
        doc.text('e¨q cÖ¯ÍveKvixi bvgt', 13, 40.600, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 49.881, 40.600, null, null, "left");
        doc.setFontSize(14);

        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 133, 40.600, null, null, "left");
        doc.text('LvZt', 13, 46.454, null, null, "left");
        doc.setFont("times", "normal");
        doc.text('Rent', 25, 46.454, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('e¨qcÖ¯Íve bs t 1', 133, 46.454, null, null, "left");




        doc.text('welqt', 13, 52.737, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 52.737, null, null, "left");
        doc.setFontSize(14);


        doc.text('BwZg‡a¨ m¤úvw`Z e¨q t  ', 133, 59.733, null, null, "left");

        doc.text('cwiKíbv m~Î (bs mn)', 133, 66.730, null, null, "left");

        doc.text('cÖv°wjZ e¨q', 13, 72.727, null, null, "left");
        doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 72.727, null, null, "center");

        doc.line(13, 74.155, 200, 74.155) // horizontal line
        doc.line(13, 92.575, 200, 92.575) // horizontal line
        doc.line(13, 214.516, 200, 214.516) // horizontal line
        doc.line(13, 220.799, 200, 220.799) // horizontal line

        doc.line(13, 74.155, 13, 220.799) // vertical line
        doc.line(68.872, 74.155, 68.872, 214.516) // vertical line
        doc.line(91.147, 74.155, 91.147, 214.516) // vertical line
        doc.line(110.423, 74.155, 110.423, 220.799) // vertical line
        doc.line(133.269, 74.155, 133.269, 220.799) // vertical line
        doc.line(148.690, 74.155, 148.690, 214.516) // vertical line
        doc.line(200, 74.155, 200, 220.799) // vertical line


        doc.text('`ªe¨/mvwf©m', 42.071, 83.781, null, null, "center");
        doc.text('BDwbU', 81.246, 83.781, null, null, "center");
        doc.text('BDwbU', 101.641, 83.781, null, null, "center");
        doc.text('†gvU', 122.844, 83.781, null, null, "center");
        doc.text('cÖ¯ÍvweZ', 141.321, 83.781, null, null, "center");
        doc.text('mieivnkZ©/‡Kv‡Ukb/b¨vh¨-', 174.347, 83.781, null, null, "center");

        doc.text('(†¯úwmwd‡Kkb)', 42.071, 87.618, null, null, "center");
        doc.text('g~j¨', 81.246, 87.618, null, null, "center");
        doc.text('msL¨v', 101.641, 87.618, null, null, "center");
        doc.text('g~j¨', 122.844, 87.618, null, null, "center");
        doc.text('mieivn', 141.321, 87.618, null, null, "center");
        doc.text('g~j¨ wbwðZKiY mieivn c×wZ', 174.347, 87.618, null, null, "center");
        doc.text('Drm', 141.321, 91.657, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('evwo fvov : ', 15, 100, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`- ${m} ${y}`, 15, 106, null, null, "left");
        doc.text('- M¨vm wej', 15, 112, null, null, "left");
        doc.text('-f¨vU (†Rbv‡ij Acv‡ikb)', 15, 118, null, null, "left");
        doc.text('-- 24,583    15%', 15, 124, null, null, "left");

        doc.line(35, 121.5, 37, 123.5); // Multiply
        doc.line(37, 121.5, 35, 123.5); // Multiply

        doc.text('32,000/-', 90, 106, null, null, "right");
        doc.text('1,080/-', 90, 112, null, null, "right");
        doc.text('3,687/-', 90, 124, null, null, "right");

        doc.text('2', 103, 106, null, null, "right");
        doc.text('1', 103, 112, null, null, "right");
        doc.text('1', 103, 124, null, null, "right");

        doc.text('64,000/-', 132, 106, null, null, "right");
        doc.text('1,080/-', 132, 112, null, null, "right");
        doc.text('3,687/-', 132, 124, null, null, "right");

        // TOR

        doc.setFont("times", "normal");
        doc.text(`TOR`, 150, 100, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text(`${m} ${y} gv‡mi evwo`, 174.347, 105, null, null, "center");
        doc.text(`fvov I M¨vm wej †Rbv‡ij`, 174.347, 110, null, null, "center");
        doc.text(`Acv‡ikb LvZ †_‡K`, 174.347, 115, null, null, "center");
        doc.text(`cwi‡kva Kiv n‡e | c‡i Zv`, 174.347, 120, null, null, "center");
        doc.text(`wewfbœ cÖ‡R± †_‡K AbycvZ`, 174.347, 125, null, null, "center");
        doc.text(`Abyhvqx †diZ n‡e|`, 174.347, 130, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text(`evwo fvov  : `, 150, 140, null, null, "left");

        doc.setFont("times", "normal");
        doc.text(`'Professor Dr. M. A.`, 174.347, 145, null, null, "center");
        doc.text(`Quasem’`, 174.347, 150, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("bv‡g U¨v·(5%) ev‡` 60,800/-", 174.347, 155, null, null, "center");
        doc.text("Ges M¨vm wej eve` 1,080/-", 174.347, 160, null, null, "center");
        doc.text("UvKvi 2wU GKvD›U †cÕ †PK n‡e", 174.347, 165, null, null, "center");

        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 150, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");

        doc.text("GKvD›Um wefv‡Mi m`‡m¨i", 174.347, 180, null, null, "center");
        doc.text("bv‡g 3,687/- †eqvivi †PK", 174.347, 185, null, null, "center");
        doc.text("n‡e|", 174.347, 190, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.071, 219.228, null, null, "center");
        doc.text('68,767/-', 132, 219.228, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text('†gvU cÖv°wjZ e¨q (K_vq)t  AvUlwÆ nvRvi mvZ kZ mvZlwÆ UvKv gvÎ', 13, 226.144, null, null, "left");
        doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
        doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
        doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

        doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
        doc.text('¯^vÿi', 105, 276.728, null, null, "center");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");

    },
    Page2_24583({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
        doc.text('cÖ‡R±: wRI', 160, 27.357, null, null, "left");


        doc.setFontSize(14);
        doc.text('cwiKíbvKvix t', 13, 35.173, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 40, 35.173, null, null, "left");
        doc.setFontSize(14);


        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 35.173, null, null, "left");

        doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
        doc.text('LvZt', 13, 47.188, null, null, "left");

        doc.setFont("times", "normal");
        doc.text('Rent', 25, 47.188, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");



        doc.text('welqt', 13, 53.246, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 53.246, null, null, "left");
        doc.setFontSize(14);



        doc.text('m¤úv`‡bi Kvjt      ' + Lib.util.dateFormat(dt, "."), 13, 59.304, null, null, "left");
        doc.text('ZvwiL ‡_‡Kt                    ' + Lib.util.dateFormat(Lib.util.dateAdd(dt, 15), "."), 110.293, 59.304, null, null, "center");
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
        doc.text('-- 24,583    15%', 15, 130, null, null, "left");

        doc.line(35, 127.5, 37, 129.5); // Multiply
        doc.line(37, 127.5, 35, 129.5); // Multiply

        doc.text('32,000/-', 90, 112, null, null, "right");
        doc.text('1,080/-', 90, 118, null, null, "right");
        doc.text('3,687/-', 90, 130, null, null, "right");

        doc.text('2', 103, 112, null, null, "right");
        doc.text('1', 103, 118, null, null, "right");
        doc.text('1', 103, 130, null, null, "right");

        doc.text('64,000/-', 132, 112, null, null, "right");
        doc.text('1,080/-', 132, 118, null, null, "right");
        doc.text('3,687/-', 132, 130, null, null, "right");


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
        doc.text(`'Professor Dr. M. A. Quasem’`, 167, 145, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("bv‡g U¨v·(5%) ev‡` 60,800/- Ges", 167, 150, null, null, "center");

        doc.text("M¨vm wej eve` 1,080/-UvKvi", 167, 155, null, null, "center");
        doc.text("2wU GKvD›Um †cÕ †PK n‡e|", 167, 160, null, null, "center");


        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 136, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");

        doc.text("GKvD›Um wefv‡Mi m`‡m¨i bv‡g", 167, 180, null, null, "center");
        doc.text("3,687/- †eqvivi †PK n‡e|", 167, 185, null, null, "center");





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
        doc.text('68,767/-', 132, 226.803, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
        doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

        doc.text('UvKv (K_vq)t AvUlwÆ nvRvi mvZ kZ mvZlwÆ UvKv gvÎ', 13, 239.429, null, null, "left");
        doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");



        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
        doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
    },
    Go_24583({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('evwo bs 5/4, eøK- Gd, jvjgvwUqv, XvKv  1209', 105, 27.357, null, null, "center");

        doc.setFontSize(22);
        doc.text('     †_‡K Li‡Pi PvU©', 105, 35, null, null, "center");
        doc.setFontSize(20);
        doc.setFont("times", "normal");
        doc.text('GO', 78, 35, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 42, null, null, "left");



        doc.line(13, 47, 200, 47) // horizontal line
        doc.line(13, 62, 200, 62) // horizontal line

        doc.line(13, 180, 200, 180) // horizontal line
        doc.line(13, 190, 200, 190) // horizontal line

        doc.line(13, 47, 13, 190) // vertical line
        doc.line(25, 47, 25, 190) // vertical line
        doc.line(105, 47, 105, 190) // vertical line
        doc.line(133, 47, 133, 190) // vertical line
        doc.line(160, 47, 160, 190) // vertical line
        doc.line(200, 47, 200, 190) // vertical line


        doc.setFont("SutonnyMJ", "bold");
        doc.text('µg.', 15, 54, null, null, "left");
        doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 54, null, null, "center");
        doc.text('UvKvi cwigvb', 120, 54, null, null, "center");
        doc.text('Li‡Pi LvZ', 145, 54, null, null, "center");
        doc.text('e¨q cÖ¯ÍveKvix', 180, 54, null, null, "center");
        doc.text('wefvM/ Kg©KZ©v', 180, 60, null, null, "center");


        doc.setFont("SutonnyMJ", "normal");
        doc.text('1.', 16, 70, null, null, "left");
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 30, 70, null, null, "left");

        doc.text('ms¯’vcb', 170, 70, null, null, "left");


        doc.text(`- ${m} ${y} evwo fvov`, 30, 77, null, null, "left");
        doc.text("64,000/-", 130, 77, null, null, "right");

        doc.text("- M¨vm wej", 30, 84, null, null, "left");
        doc.text("1,080/-", 130, 84, null, null, "right");

        doc.text("--f¨vU (†Rbv‡ij Acv‡ikb)", 30, 91, null, null, "left");

        doc.text('-- f¨vU 24,583    15%', 38, 98, null, null, "left");
        doc.text("3,687/-", 130, 98, null, null, "right");

        doc.line(70, 95, 72, 97); // Multiply
        doc.line(72, 95, 70, 97); // Multiply


        doc.setFont("times", "normal");
        doc.text('Rent', 145, 70, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU:', 30, 187, null, null, "left");
        doc.text('68,767/-', 130, 187, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('†gvU UvKv (K_vq) : AvUlwÆ nvRvi mvZ kZ mvZlwÆ UvKv gvÎ', 16, 196, null, null, "left");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
        doc.text('  ""  Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

        doc.text('†Pqvig¨vb', 16, 280, null, null, "left");

    },

    Page1_24583_5percent({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.466, null, null, "center");
        doc.setFontSize(16);
        doc.text('†K›`ªxq e¨q', 105, 25.892, null, null, "center");


        doc.text('cÖ‡R±: wRI', 179.676, 25.892, null, null, "left");


        doc.setFontSize(14);
        doc.text('e¨q cÖ¯Íve', 13, 34.602, null, null, "left");
        doc.text('e¨q cÖ¯ÍveKvixi bvgt', 13, 40.600, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 49.881, 40.600, null, null, "left");
        doc.setFontSize(14);

        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 133, 40.600, null, null, "left");
        doc.text('LvZt', 13, 46.454, null, null, "left");
        doc.setFont("times", "normal");
        doc.text('Rent', 25, 46.454, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('e¨qcÖ¯Íve bs t 1', 133, 46.454, null, null, "left");




        doc.text('welqt', 13, 52.737, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 52.737, null, null, "left");
        doc.setFontSize(14);


        doc.text('BwZg‡a¨ m¤úvw`Z e¨q t  ', 133, 59.733, null, null, "left");

        doc.text('cwiKíbv m~Î (bs mn)', 133, 66.730, null, null, "left");

        doc.text('cÖv°wjZ e¨q', 13, 72.727, null, null, "left");
        doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 72.727, null, null, "center");

        doc.line(13, 74.155, 200, 74.155) // horizontal line
        doc.line(13, 92.575, 200, 92.575) // horizontal line
        doc.line(13, 214.516, 200, 214.516) // horizontal line
        doc.line(13, 220.799, 200, 220.799) // horizontal line

        doc.line(13, 74.155, 13, 220.799) // vertical line
        doc.line(68.872, 74.155, 68.872, 214.516) // vertical line
        doc.line(91.147, 74.155, 91.147, 214.516) // vertical line
        doc.line(110.423, 74.155, 110.423, 220.799) // vertical line
        doc.line(133.269, 74.155, 133.269, 220.799) // vertical line
        doc.line(148.690, 74.155, 148.690, 214.516) // vertical line
        doc.line(200, 74.155, 200, 220.799) // vertical line


        doc.text('`ªe¨/mvwf©m', 42.071, 83.781, null, null, "center");
        doc.text('BDwbU', 81.246, 83.781, null, null, "center");
        doc.text('BDwbU', 101.641, 83.781, null, null, "center");
        doc.text('†gvU', 122.844, 83.781, null, null, "center");
        doc.text('cÖ¯ÍvweZ', 141.321, 83.781, null, null, "center");
        doc.text('mieivnkZ©/‡Kv‡Ukb/b¨vh¨-', 174.347, 83.781, null, null, "center");

        doc.text('(†¯úwmwd‡Kkb)', 42.071, 87.618, null, null, "center");
        doc.text('g~j¨', 81.246, 87.618, null, null, "center");
        doc.text('msL¨v', 101.641, 87.618, null, null, "center");
        doc.text('g~j¨', 122.844, 87.618, null, null, "center");
        doc.text('mieivn', 141.321, 87.618, null, null, "center");
        doc.text('g~j¨ wbwðZKiY mieivn c×wZ', 174.347, 87.618, null, null, "center");
        doc.text('Drm', 141.321, 91.657, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('evwo fvov : ', 15, 100, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`- ${m} ${y}`, 15, 106, null, null, "left");
        doc.text('- M¨vm wej', 15, 112, null, null, "left");
        doc.text('-f¨vU (†Rbv‡ij Acv‡ikb)', 15, 118, null, null, "left");
        doc.text('-- 25,812    15%', 15, 124, null, null, "left");

        doc.line(35, 121.5, 37, 123.5); // Multiply
        doc.line(37, 121.5, 35, 123.5); // Multiply

        doc.text('33,600/-', 90, 106, null, null, "right");
        doc.text('1,080/-', 90, 112, null, null, "right");
        doc.text('3,872/-', 90, 124, null, null, "right");

        doc.text('2', 103, 106, null, null, "right");
        doc.text('1', 103, 112, null, null, "right");
        doc.text('1', 103, 124, null, null, "right");

        doc.text('67,200/-', 132, 106, null, null, "right");
        doc.text('1,080/-', 132, 112, null, null, "right");
        doc.text('3,872/-', 132, 124, null, null, "right");

        // TOR

        doc.setFont("times", "normal");
        doc.text(`TOR`, 150, 100, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text(`${m} ${y} gv‡mi evwo`, 174.347, 105, null, null, "center");
        doc.text(`fvov I M¨vm wej †Rbv‡ij`, 174.347, 110, null, null, "center");
        doc.text(`Acv‡ikb LvZ †_‡K`, 174.347, 115, null, null, "center");
        doc.text(`cwi‡kva Kiv n‡e | c‡i Zv`, 174.347, 120, null, null, "center");
        doc.text(`wewfbœ cÖ‡R± †_‡K AbycvZ`, 174.347, 125, null, null, "center");
        doc.text(`Abyhvqx †diZ n‡e|`, 174.347, 130, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text(`evwo fvov  : `, 150, 140, null, null, "left");

        doc.setFont("times", "normal");
        doc.text(`'Professor Dr. M. A.`, 174.347, 145, null, null, "center");
        doc.text(`Quasem’`, 174.347, 150, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("bv‡g U¨v·(5%) ev‡` 63,840/-", 174.347, 155, null, null, "center");
        doc.text("Ges M¨vm wej eve` 1,080/-", 174.347, 160, null, null, "center");
        doc.text("UvKvi 2wU GKvD›U †cÕ †PK n‡e", 174.347, 165, null, null, "center");

        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 150, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");


        doc.text("GKvD›Um wefv‡Mi m`‡m¨i", 174.347, 180, null, null, "center");
        doc.text("bv‡g f¨vU+U¨v· eve`", 174.347, 185, null, null, "center");
        doc.text("(3,360+3,872)=7,232/-", 174.347, 190, null, null, "center");
        doc.text("UvKvi  †eqvivi †PK n‡e|", 174.347, 195, null, null, "center");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.071, 219.228, null, null, "center");
        doc.text('72,152/-', 132, 219.228, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text('†gvU cÖv°wjZ e¨q (K_vq)t  evnvËi nvRvi GKkZ evnvbœ UvKv gvÎ', 13, 226.144, null, null, "left");
        doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
        doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
        doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

        doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
        doc.text('¯^vÿi', 105, 276.728, null, null, "center");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");

    },
    Page2_24583_5percent({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
        doc.text('cÖ‡R±: wRI', 160, 27.357, null, null, "left");


        doc.setFontSize(14);
        doc.text('cwiKíbvKvix t', 13, 35.173, null, null, "left");

        doc.setFontSize(16);
        doc.text('Avmjvg Rvgvb', 40, 35.173, null, null, "left");
        doc.setFontSize(14);


        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 35.173, null, null, "left");

        doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
        doc.text('LvZt', 13, 47.188, null, null, "left");

        doc.setFont("times", "normal");
        doc.text('Rent', 25, 47.188, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");



        doc.text('welqt', 13, 53.246, null, null, "left");

        doc.setFontSize(16);
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 53.246, null, null, "left");
        doc.setFontSize(14);



        doc.text('m¤úv`‡bi Kvjt      ' + Lib.util.dateFormat(dt, "."), 13, 59.304, null, null, "left");
        doc.text('ZvwiL ‡_‡Kt                    ' + Lib.util.dateFormat(Lib.util.dateAdd(dt, 15), "."), 110.293, 59.304, null, null, "center");
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
        doc.text('-- 25,812    15%', 15, 130, null, null, "left");

        doc.line(35, 127.5, 37, 129.5); // Multiply
        doc.line(37, 127.5, 35, 129.5); // Multiply

        doc.text('33,600/-', 90, 112, null, null, "right");
        doc.text('1,080/-', 90, 118, null, null, "right");
        doc.text('3,872/-', 90, 130, null, null, "right");

        doc.text('2', 103, 112, null, null, "right");
        doc.text('1', 103, 118, null, null, "right");
        doc.text('1', 103, 130, null, null, "right");

        doc.text('67,200/-', 132, 112, null, null, "right");
        doc.text('1,080/-', 132, 118, null, null, "right");
        doc.text('3,872/-', 132, 130, null, null, "right");


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
        doc.text(`'Professor Dr. M. A. Quasem’`, 167, 145, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("bv‡g U¨v·(5%) ev‡` 63,840/- Ges", 167, 150, null, null, "center");

        doc.text("M¨vm wej eve` 1,080/-UvKvi", 167, 155, null, null, "center");
        doc.text("2wU GKvD›Um †cÕ †PK n‡e|", 167, 160, null, null, "center");


        // VAt
        doc.setFont("SutonnyMJ", "bold");
        doc.text(`f¨vU:`, 136, 175, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");

        doc.text("GKvD›Um wefv‡Mi m`‡m¨i bv‡g", 167, 180, null, null, "center");
        doc.text("f¨vU+U¨v· eve` (3,360+3,872)", 167, 185, null, null, "center");
        doc.text("=7,232/- UvKvi  †eqvivi †PK n‡e|", 167, 190, null, null, "center");


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
        doc.text('72,152/-', 132, 226.803, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
        doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

        doc.text('UvKv (K_vq)t evnvËi nvRvi GKkZ evnvbœ UvKv gvÎ', 13, 239.429, null, null, "left");
        doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");



        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
        doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
    },
    Go_24583_5percent({ doc }, m, y, dt) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('evwo bs 5/4, eøK- Gd, jvjgvwUqv, XvKv  1209', 105, 27.357, null, null, "center");

        doc.setFontSize(22);
        doc.text('     †_‡K Li‡Pi PvU©', 105, 35, null, null, "center");
        doc.setFontSize(20);
        doc.setFont("times", "normal");
        doc.text('GO', 78, 35, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('ZvwiLt  ' + Lib.util.dateFormat(dt, "."), 160, 42, null, null, "left");



        doc.line(13, 47, 200, 47) // horizontal line
        doc.line(13, 62, 200, 62) // horizontal line

        doc.line(13, 180, 200, 180) // horizontal line
        doc.line(13, 190, 200, 190) // horizontal line

        doc.line(13, 47, 13, 190) // vertical line
        doc.line(25, 47, 25, 190) // vertical line
        doc.line(105, 47, 105, 190) // vertical line
        doc.line(133, 47, 133, 190) // vertical line
        doc.line(160, 47, 160, 190) // vertical line
        doc.line(200, 47, 200, 190) // vertical line


        doc.setFont("SutonnyMJ", "bold");
        doc.text('µg.', 15, 54, null, null, "left");
        doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 54, null, null, "center");
        doc.text('UvKvi cwigvb', 120, 54, null, null, "center");
        doc.text('Li‡Pi LvZ', 145, 54, null, null, "center");
        doc.text('e¨q cÖ¯ÍveKvix', 180, 54, null, null, "center");
        doc.text('wefvM/ Kg©KZ©v', 180, 60, null, null, "center");


        doc.setFont("SutonnyMJ", "normal");
        doc.text('1.', 16, 70, null, null, "left");
        doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 30, 70, null, null, "left");

        doc.text('ms¯’vcb', 170, 70, null, null, "left");


        doc.text(`- ${m} ${y} evwo fvov`, 30, 77, null, null, "left");
        doc.text("67,200/-", 130, 77, null, null, "right");

        doc.text("- M¨vm wej", 30, 84, null, null, "left");
        doc.text("1,080/-", 130, 84, null, null, "right");

        doc.text("--f¨vU (†Rbv‡ij Acv‡ikb)", 30, 91, null, null, "left");

        doc.text('-- f¨vU 25,812    15%', 38, 98, null, null, "left");
        doc.text("3,872/-", 130, 98, null, null, "right");

        doc.line(70, 95, 72, 97); // Multiply
        doc.line(72, 95, 70, 97); // Multiply


        doc.setFont("times", "normal");
        doc.text('Rent', 145, 70, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU:', 30, 187, null, null, "left");
        doc.text('72,152/-', 130, 187, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('†gvU UvKv (K_vq) : evnvËi nvRvi GKkZ evnvbœ UvKv gvÎ', 16, 196, null, null, "left");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
        doc.text('  ""  Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

        doc.text('†Pqvig¨vb', 16, 280, null, null, "left");

    }

}