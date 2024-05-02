import {Lib} from "../../utils/Lib";

export const Sewerage = {

    Page1({ doc }, m, y,tk) {

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

        doc.text('ZvwiLt  ' + Lib.util.dateFormat(new Date(), "."), 133, 40.600, null, null, "left");
        doc.text('LvZt', 13, 46.454, null, null, "left");
        doc.setFont("times", "normal");
        doc.text('Utilities Bill', 25, 46.454, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('e¨qcÖ¯Íve bs t 1', 133, 46.454, null, null, "left");




        doc.text('welqt', 13, 52.737, null, null, "left");

        doc.setFontSize(16);
        doc.text(`mvwf©m †m›Uv‡ii cvwb I wmD‡q‡iR wej cwi‡kva`, 25, 52.737, null, null, "left");
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
        doc.text('cvwb I wmD‡q‡iR wej : ', 15, 100, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`- ${m} ${y}`, 15, 106, null, null, "left");


        doc.text(`${tk}/-`, 90, 106, null, null, "right");

        doc.text('1', 103, 106, null, null, "right");

        doc.text(`${tk}/-`, 132, 106, null, null, "right");

        // TOR

        doc.setFont("times", "normal");
        doc.text(`TOR`, 150, 100, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text(`${m} ${y} cvwb I`, 174.347, 105, null, null, "center");
        doc.text(`wmD‡q‡iR wej †Rbv‡ij`, 174.347, 110, null, null, "center");
        doc.text(`Acv‡ikb LvZ †_‡K`, 174.347, 115, null, null, "center");
        doc.text(`cwi‡kva Kiv n‡e |`, 174.347, 120, null, null, "center");


        doc.setFont("times", "normal");
        doc.text(`'Professor Dr. M. A.`, 174.347, 145, null, null, "center");
        doc.text(`Quasem’`, 174.347, 150, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`bv‡g ${tk}/- UvKvi`, 174.347, 155, null, null, "center");
        doc.text("GKvD›U †cÕ †PK n‡e", 174.347, 160, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.071, 219.228, null, null, "center");
        doc.text(`${tk}/-`, 132, 219.228, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");


        doc.text(`†gvU cÖv°wjZ e¨q (K_vq)t ${Lib.util.inword.bn(tk)} UvKv gvÎ`, 13, 226.144, null, null, "left");
        doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
        doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
        doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

        doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
        doc.text('¯^vÿi', 105, 276.728, null, null, "center");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");

    },
    Page2({ doc }, m, y, tk) {

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


        doc.text('ZvwiLt  ' + Lib.util.dateFormat(new Date(), "."), 160, 35.173, null, null, "left");

        doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
        doc.text('LvZt', 13, 47.188, null, null, "left");

        doc.setFont("times", "normal");
        doc.text('Utilities Bill', 25, 47.188, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");



        doc.text('welqt', 13, 53.246, null, null, "left");

        doc.setFontSize(16);
        doc.text(`mvwf©m †m›Uv‡ii cvwb I wmD‡q‡iR wej cwi‡kva`, 25, 53.246, null, null, "left");
        doc.setFontSize(14);



        doc.text('m¤úv`‡bi Kvjt      ' + Lib.util.dateFormat(new Date(), "."), 13, 59.304, null, null, "left");
        doc.text('ZvwiL ‡_‡Kt                    ' + Lib.util.dateFormat(Lib.util.dateAdd(new Date(), 15), "."), 110.293, 59.304, null, null, "center");
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
        doc.text('cvwb I wmD‡q‡iR wej : ', 15, 106, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`- ${m} ${y}`, 15, 112, null, null, "left");


        doc.text(`${tk}/-`, 90, 112, null, null, "right");

        doc.text('1', 103, 112, null, null, "right");

        doc.text(`${tk}/-`, 132, 112, null, null, "right");

        // TOR

        doc.setFont("times", "normal");
        doc.text(`TOR`, 136, 105, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text(`${m} ${y} cvwb I`, 167, 110, null, null, "center");
        doc.text(`wmD‡q‡iR wej †Rbv‡ij`, 167, 115, null, null, "center");
        doc.text(`Acv‡ikb LvZ †_‡K`, 167, 120, null, null, "center");
        doc.text(`cwi‡kva Kiv n‡e |`, 167, 125, null, null, "center");


        doc.setFont("times", "normal");
        doc.text(`'Professor Dr. M. A. Quasem’`, 167, 145, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`bv‡g ${tk}/- UvKvi`, 167, 150, null, null, "center");

        doc.text("GKvD›U †cÕ †PK n‡e", 167, 155, null, null, "center");



        doc.text('BDwbU', 81.012, 90.402, null, null, "center");
        doc.text('BDwbU', 101.408, 90.402, null, null, "center");
        doc.text('†gvU', 122.207, 90.402, null, null, "center");
        doc.text(`${tk}/-`, 169.459, 90.402, null, null, "center");

        doc.text('AvB‡Ug', 40.727, 94.845, null, null, "center");
        doc.text('g~j¨', 81.012, 94.845, null, null, "center");
        doc.text('msL¨v', 101.408, 94.845, null, null, "center");
        doc.text('g~j¨', 122.207, 94.845, null, null, "center");
        doc.text('wfwË‡Z', 169.459, 94.845, null, null, "center");




        doc.text('†gvU', 42.544, 226.803, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU', 42.544, 226.803, null, null, "center");
        doc.text(`${tk}/-`, 132, 226.803, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");



        doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
        doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

        doc.text(`UvKv (K_vq)t ${Lib.util.inword.bn(tk)} UvKv gvÎ`, 13, 239.429, null, null, "left");
        doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");



        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
        doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
    },
    Go({ doc }, m, y, tk) {

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
        doc.text('ZvwiLt  ' + Lib.util.dateFormat(new Date(), "."), 160, 42, null, null, "left");



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
        doc.text(`cvwb I wmD‡q‡iR wej`, 30, 70, null, null, "left");

        doc.text('ms¯’cb', 170, 70, null, null, "left");


        doc.text(`- ${m} ${y} `, 30, 77, null, null, "left");
        doc.text(`${tk}/-`, 130, 77, null, null, "right");


        doc.setFont("times", "normal");
        doc.text('Utilities', 145, 70, null, null, "center");
        doc.text('Bill', 145, 77, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('†gvU:', 30, 187, null, null, "left");
        doc.text(`${tk}/-`, 130, 187, null, null, "right");
        doc.setFont("SutonnyMJ", "normal");
        doc.text(`†gvU UvKv (K_vq) : ${Lib.util.inword.bn(tk)} UvKv gvÎ`, 16, 196, null, null, "left");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
        doc.text('  ""  Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

        doc.text('†Pqvig¨vb', 16, 280, null, null, "left");

    }
}