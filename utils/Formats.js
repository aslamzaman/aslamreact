
export const Formats = {
    leave({ doc }) {
        const marginTop = 10;
        const marginLeft = 20;
        const marginRight = 198;
        const pageMiddle = 105;

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", marginLeft, marginTop, 12, 18);
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(24);

        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", pageMiddle, marginTop + 12, null, null, "center");
        doc.text("QywUi dig", pageMiddle, marginTop + 22, null, null, "center");
        doc.setFontSize(14);
        doc.text("ZvwiL: ..........................", marginRight, marginTop + 30, null, null, "right");
        doc.text("bvg: .................................................. c`ex:................................................. cÖ‡R±:.....................", marginLeft, marginTop + 40, null, null, "left");
        doc.text("QywUi KviY/weeiY: .......................................................................................................................", marginLeft, marginTop + 50, null, null, "left");
        doc.text("cÖv_©xZ QzwUi mgqKvj: ........................ ZvwiL †_‡K ....................... ZvwiL ch©šÍ ........... w`b........... N›Uv", marginLeft, marginTop + 60, null, null, "left");

        doc.text("eivei", marginLeft, marginTop + 75, null, null, "left");
        doc.text("wbe©vnx cwiPvjK", marginLeft, marginTop + 82, null, null, "left");
        doc.text("wmGgBGm, XvKv", marginLeft, marginTop + 89, null, null, "left");
        doc.text("wcÖq g‡nv`q,", marginLeft, marginTop + 103, null, null, "left");


        doc.text("webxZ wb‡e`K                    ", marginRight, marginTop + 190, null, null, "right");
        doc.text("¯^v¶i:                             ", marginRight, marginTop + 200, null, null, "right");  // sakhkhor


        doc.line(marginLeft, marginTop + 209, marginRight, marginTop + 209) // horizontal line

        doc.text("PjwZ eQ‡i †fvMK…Z QzwUi cÖK…wZ:", marginLeft, marginTop + 213, null, null, "left");
        doc.text("QywUi Z_¨:                         ", marginRight, marginTop - 213, null, null, "right");


        doc.text("‰bwgwËK QzwU (    )= ........ w`b", marginLeft, marginTop + 220, null, null, "left");
        doc.text("1g, 2q, 3q I 4_© †KvqvU©v‡i cÖvc¨ QywU =........w`b             ", marginRight, marginTop + 220, null, null, "right");


        doc.text("AwR©Z QzwU (    )=  .......... w`b", marginLeft, marginTop + 227, null, null, "left");
        doc.text("BwZc~‡e© †fvMK…Z QzwU =........w`b             ", marginRight, marginTop + 227, null, null, "right");

        doc.setFont('courier', 'normal');
        doc.text("CL", marginLeft + 22, marginTop + 220, null, null, "left");
        doc.text("EL", marginLeft + 19, marginTop + 227, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text("Av‡e`bK…Z QzwU = ............ w`b......... N›Uv", marginLeft, marginTop + 234, null, null, "left");
        doc.text("Av‡e`bK…Z QzwU = ........w`b....... N›Uv", marginRight, marginTop + 234, null, null, "right");
        doc.line(marginLeft, marginTop + 235, marginLeft + 73, marginTop + 235) // horizontal line
        doc.line(marginLeft + 105, marginTop + 235, marginRight, marginTop + 235) // horizontal line

        doc.text("†gvU QywU = ..................... w`b......... N›Uv", marginLeft, marginTop + 242, null, null, "left");  // মোট ছুটি = ..................... দিন......... ঘন্টা
        doc.text("Aewkó/AwZwi³ QywU =.........w`b....... N›Uv", marginRight, marginTop + 242, null, null, "right");  // অবশিষ্ট/অতিরিক্ত ছুটি =.........দিন....... ঘন্টা


        doc.text("Aby‡gv`bKvixi ¯^v¶i: ", marginLeft, marginTop + 267, null, null, "left"); // অনুমোদনকারীর স্বাক্ষর:
        doc.text("¯^v¶i:                          ", marginRight, marginTop + 267, null, null, "right");  // স্বাক্ষর:

        doc.text("wbe©vnx cwiPvjK", marginLeft, marginTop + 274, null, null, "left"); // নির্বাহী পরিচালক
        doc.text("cÖkvmb DBs", marginRight, marginTop + 274, null, null, "right"); //  প্রশাসন উইং
    },
    localta({ doc }, marginTop, marginLeft, marginRight, pageMiddle) {
        /*
          const marginTop = 18;
          const marginLeft = 12;
          const marginRight = 199;
          const pageMiddle = 105;
        */
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);

        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", pageMiddle, marginTop, null, null, "center");
        doc.text("¯’vbxq ågY fvZv wej", pageMiddle, marginTop + 7, null, null, "center");

        doc.setFontSize(14);
        doc.text("ågYKvixi bvg I c`ex t....................................................................", marginLeft, marginTop + 19, null, null, "left");
        doc.text("ZvwiL t................................", marginRight, marginTop + 19, null, null, "right");
        doc.text("åg‡Yi D‡Ïk¨ t...............................................................................", marginLeft, marginTop + 27, null, null, "left");
        doc.text("Ae¯’vb t...............................", marginRight, marginTop + 27, null, null, "right");

        doc.line(marginLeft, marginTop + 31, marginRight, marginTop + 31); // horizontal line
        doc.line(marginLeft, marginTop + 37, marginLeft + 164, marginTop + 37); // horizontal line
        doc.line(marginLeft, marginTop + 43, marginRight, marginTop + 43); // horizontal line
        doc.line(marginLeft, marginTop + 91, marginRight, marginTop + 91); // horizontal line
        doc.line(12, marginTop + 97, marginRight, marginTop + 97); // horizontal line

        doc.line(marginLeft, marginTop + 31, marginLeft, marginTop + 97); // vertical line    
        doc.line(marginLeft + 30, marginTop + 37, marginLeft + 30, marginTop + 91); // vertical line
        doc.line(marginLeft + 43, marginTop + 31, marginLeft + 43, marginTop + 91); // vertical line
        doc.line(marginLeft + 72, marginTop + 37, marginLeft + 72, marginTop + 91); // vertical line
        doc.line(marginLeft + 87, marginTop + 31, marginLeft + 87, marginTop + 91); // vertical line
        doc.line(marginLeft + 102, marginTop + 37, marginLeft + 102, marginTop + 91); // vertical line
        doc.line(marginLeft + 132, marginTop + 37, marginLeft + 132, marginTop + 91); // vertical line
        doc.line(marginLeft + 145, marginTop + 37, marginLeft + 145, marginTop + 97); // vertical line
        doc.line(marginLeft + 164, marginTop + 31, marginLeft + 164, marginTop + 97); // vertical line
        doc.line(marginRight, marginTop + 31, marginRight, marginTop + 97); // vertical line


        //-------------------------------------
        doc.line(0, 148.5, 5, 148.5);
        doc.line(102.5, 148.5, 107.5, 148.5);
        doc.line(205, 148.5, 210, 148.5);
        //-------------------------------------

        doc.text("cÖ¯’vb", marginLeft + 20, marginTop + 35.5, null, null, "center"); // prosthan
        doc.text("Dcw¯’Z", marginLeft + 66, marginTop + 35.5, null, null, "center");  // uposthit
        doc.text("hvbevnb I fvZv (UvKv)", marginLeft + 125, marginTop + 35.5, null, null, "center");  // janbahon o vata taka
        doc.text("†gvU UvKv", marginLeft + 176, marginTop + 39, null, null, "center");  // mote taka

        doc.text("¯’vb", marginLeft + 15, marginTop + 41.5, null, null, "center"); // sthan
        doc.text("mgq", marginLeft + 36, marginTop + 41.5, null, null, "center"); // somoy
        doc.text("¯’vb", marginLeft + 57, marginTop + 41.5, null, null, "center"); // sthan
        doc.text("mgq", marginLeft + 79, marginTop + 41.5, null, null, "center"); // somoy
        doc.text("evm", marginLeft + 95, marginTop + 41.5, null, null, "center"); // bas
        doc.text("wmGbwR", marginLeft + 118, marginTop + 41.5, null, null, "center"); // cng 
        doc.text("wi·v", marginLeft + 155, marginTop + 41.5, null, null, "center"); // autorikshaw 
        doc.text("Ab¨vb¨", marginLeft + 138.5, marginTop + 41.5, null, null, "center"); // onnaono

        doc.text("UvKv (K_vq)t", marginLeft + 12, marginTop + 95.5, null, null, "center"); //  taka kothay
        doc.text("†gvU UvKv", marginLeft + 154, marginTop + 95.5, null, null, "center"); // mote taka

        doc.text("ågYKvixi ¯^vÿi", marginLeft, marginTop + 116.5, null, null, "left"); // vromonkarir sakkhor
        doc.text("cÖwZ ¯^vÿi", marginLeft + 66, marginTop + 116.5, null, null, "center"); // proti sakkhor
        doc.text("wefvMxq cÖavb/mwPe", marginLeft + 123, marginTop + 116.5, null, null, "center"); // bivagio prodhan/ sochib
        doc.text("wnmve wefvM", 199, marginTop + 116.5, null, null, "right"); // hisab bivag

        doc.line(marginLeft, marginTop + 111.5, 38, marginTop + 111.5); // horizontal line 
        doc.line(marginLeft + 56, marginTop + 111.5, 88, marginTop + 111.5); // horizontal line   
        doc.line(marginLeft + 107, marginTop + 111.5, 150.5, marginTop + 111.5); // horizontal line  
        doc.line(marginLeft + 167, marginTop + 111.5, 199, marginTop + 111.5); // horizontal line  
    },
    tabill({ doc }) {

        const marginTop = 25;
        const marginLeft = 12;
        const marginRight = 202;
        const pageMiddle = 105;

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 22, marginTop - 10, 12, 18);

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(26.5);

        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 112, marginTop + 2, null, null, "center");
        doc.setFontSize(16);
        doc.text("evwo bs- 5/4, eøK - Gd, jvjgvwUqv, XvKv- 1207", 112, marginTop + 9, null, null, "center");
        doc.setFontSize(26.5);
        doc.text("hvZvqvZ wej", pageMiddle, marginTop + 22, null, null, "center"); //যাতায়াত বিল

        doc.setFontSize(14);
        doc.text("ågYKvixi bvg t......................................................................", marginLeft, marginTop + 37, null, null, "left");
        doc.text("c`ex t.................................................", marginRight, marginTop + 37, null, null, "right");
        doc.text("Ae¯’vbt mv‡m/BDwbU t..............................................................", marginLeft, marginTop + 47, null, null, "left");
        doc.text("cÖKí t.................................................", marginRight, marginTop + 47, null, null, "right");

        doc.line(marginLeft, marginTop + 53.5, marginRight, marginTop + 53.5); // horizontal line
        doc.line(marginLeft, marginTop + 63.5, marginRight, marginTop + 63.5); // horizontal line

        doc.line(marginLeft, marginTop + 210, marginRight, marginTop + 210); // horizontal line
        doc.line(marginLeft, marginTop + 217, marginRight, marginTop + 217); // horizontal line
        doc.line(marginLeft, marginTop + 224, marginRight, marginTop + 224); // horizontal line


        doc.line(marginLeft, marginTop + 53.5, marginLeft, marginTop + 224); // vertical line
        doc.line(marginLeft + 17.75, marginTop + 53.5, marginLeft + 17.75, marginTop + 217); // vertical line
        doc.line(marginLeft + 37.75, marginTop + 53.5, marginLeft + 37.75, marginTop + 210); // vertical line
        doc.line(marginLeft + 49.75, marginTop + 53.5, marginLeft + 49.75, marginTop + 210); // vertical line
        doc.line(marginLeft + 69.75, marginTop + 53.5, marginLeft + 69.75, marginTop + 210); // vertical line
        doc.line(marginLeft + 81.75, marginTop + 53.5, marginLeft + 81.75, marginTop + 210); // vertical line
        doc.line(marginLeft + 133, marginTop + 53.5, marginLeft + 133, marginTop + 210); // vertical line   

        doc.line(marginLeft + 151, marginTop + 53.5, marginLeft + 151, marginTop + 224); // vertical line
        doc.line(marginLeft + 171, marginTop + 53.5, marginLeft + 171, marginTop + 224); // vertical line
        doc.line(marginRight, marginTop + 53.5, marginRight, marginTop + 224); // vertical line

        doc.text("ZvwiL", marginLeft + 9, marginTop + 60, null, null, "center");
        doc.text("†Kv_v n‡Z", marginLeft + 27.5, marginTop + 60, null, null, "center");
        doc.text("mgq", marginLeft + 43.7, marginTop + 60, null, null, "center");
        doc.text("†Kvb ch©šÍ", marginLeft + 59.7, marginTop + 60, null, null, "center"); // কোন পর্যন্ত 
        doc.text("mgq", marginLeft + 75.7, marginTop + 60, null, null, "center");
        doc.text("D‡Ïk¨", marginLeft + 107.3, marginTop + 60, null, null, "center"); // উদ্দেশ্য
        doc.text("evnb", marginLeft + 142, marginTop + 60, null, null, "center");
        doc.text("UvKv", marginLeft + 161, marginTop + 60, null, null, "center");
        doc.text("gšÍe¨", marginLeft + 180, marginTop + 60, null, null, "center");

        doc.text("wW.G.c~Y©w`b/ Aa©w`b t", marginLeft + 19.5, marginTop + 215, null, null, "left"); //ডি.এ.পূর্ণদিন/ অর্ধদিন
        doc.text("†gvU UvKv (K_vq) t", marginLeft + 3, marginTop + 222, null, null, "left");

        doc.text("wnmve wefvM", marginLeft, marginTop + 255, null, null, "left");
        doc.text("ågYKvixi ¯^vÿi t   ", marginLeft + 153.5, marginTop + 249, null, null, "left");
        doc.text("ZvwiL t................", marginLeft + 153.5, marginTop + 255, null, null, "left");

    },
    bayprostab1({ doc }) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.5, null, null, "center");

        doc.setFontSize(16);
        doc.text('†K›`ªxq e¨q', 105, 26, null, null, "center");
        doc.text('cÖ‡R±:', 156, 26, null, null, "left");

        doc.setFontSize(14);
        doc.text('ZvwiLt', 133, 34, null, null, "left");
        doc.text('e¨q cÖ¯Íve', 13, 34, null, null, "left");

        doc.text('e¨qcÖ¯Íve bs t', 133, 40, null, null, "left");
        doc.text('e¨q cÖ¯ÍveKvixi bvgt', 13, 40, null, null, "left");
        doc.text('BwZg‡a¨ m¤úvw`Z e¨q t  ', 40, null, null, "left");

        doc.text('LvZt', 13, 47, null, null, "left");
        doc.text('welqt', 13, 54, null, null, "left");

        doc.text('cwiKíbv m~Î (bs mn)', 13, 67, null, null, "left");

        doc.text('cÖv°wjZ e¨q', 13, 74, null, null, "left");
        doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 74, null, null, "center");

        doc.line(13, 75, 200, 75) // horizontal line
        doc.line(13, 94, 200, 94) // horizontal line

        doc.text('`ªe¨/mvwf©m', 42.071, 82.5, null, null, "center");
        doc.text('BDwbU', 81.246, 82.5, null, null, "center");
        doc.text('BDwbU', 101.641, 82.5, null, null, "center");
        doc.text('†gvU', 122.844, 82.5, null, null, "center");
        doc.text('cÖ¯ÍvweZ', 141.321, 82.5, null, null, "center");
        doc.text('mieivnkZ©/‡Kv‡Ukb/b¨vh¨-', 174.347, 82.5, null, null, "center");

        doc.text('(†¯úwmwd‡Kkb)', 42.071, 87.5, null, null, "center");
        doc.text('g~j¨', 81.246, 87.5, null, null, "center");
        doc.text('msL¨v', 101.641, 87.5, null, null, "center");
        doc.text('g~j¨', 122.844, 87.5, null, null, "center");
        doc.text('mieivn', 141.321, 87.5, null, null, "center");
        doc.text('g~j¨ wbwðZKiY mieivn c×wZ', 174.347, 87.5, null, null, "center");

        doc.text('Drm', 141.321, 92.5, null, null, "center");

        doc.line(13, 75, 13, 220) // vertical line
        doc.line(69.681, 75, 69.681, 220) // vertical line
        doc.line(92.099, 75, 92.099, 220) // vertical line
        doc.line(111.661, 75, 111.661, 220) // vertical line
        doc.line(133.222, 75, 133.222, 220) // vertical line
        doc.line(149.499, 75, 149.499, 220) // vertical line
        doc.line(200, 75, 200, 220) // vertical line

        doc.line(13, 212, 200, 212) // horizontal line
        doc.line(13, 220, 200, 220) // horizontal line

        doc.text('†gvU', 42.071, 218, null, null, "center");
        doc.text('†gvU cÖv°wjZ e¨q (K_vq)t', 13, 226, null, null, "left");

        doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 238, null, null, "left");
        doc.text('mnvqZvKvix t', 110.930, 244, null, null, "left");
        doc.text('cÖ¯ÍveKvix t', 110.930, 250, null, null, "left");

        doc.text('†Pqvig¨vb', 13.930, 281, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 281, null, null, "center");
        doc.text('¯^vÿi', 105, 277, null, null, "center");
    },
    bayprostab2({ doc }) {
        doc.setFont("SutonnyMJ", "normal");
        doc.text('cÖ‡R±:', 156, 26, null, null, "left");
        doc.setFontSize(14);
        doc.setFont("SutonnyMJ", "bold");
        doc.text('e¨q cÖ¯Íve m¤úv`b', 13, 32, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('µq m¤úv`Kt ................................................', 13, 38, null, null, "left");
        doc.text('µq mnvqZvKvix (hw` _v‡K) ......................................', 105, 38, null, null, "left");
        doc.text('AwMÖ‡gi cwigvbt .............................', 13, 46, null, null, "left");
        doc.text('AwMÖg MÖn‡bi ZvwiL t ................................................', 105, 46, null, null, "left");
        doc.text('m¤úvw`Z e¨qt    .............................', 13, 54, null, null, "left");
        doc.line(40, 55, 80, 55) // horizontal line
        doc.text('†diZ t            .............................', 13, 62, null, null, "left");

        doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, 70, null, null, "center");
        // 78.084   80.911
        doc.line(13, 72, 200, 72) // horizontal line
        doc.line(13, 92, 200, 92) // horizontal line
        doc.line(13, 230, 200, 230) // horizontal line
        doc.line(13, 237, 200, 237) // horizontal line

        doc.line(13, 72, 13, 237) // vertical line
        doc.line(69.300, 72, 69.300, 237) // vertical line
        doc.line(92.321, 72, 92.321, 237) // vertical line
        doc.line(111.302, 72, 111.302, 237) // vertical line
        doc.line(133.919, 72, 133.919, 237) // vertical line
        doc.line(150, 72, 150, 237) // vertical line
        doc.line(200, 72, 200, 237) // vertical line

        doc.text('`ªe¨/mvwf©m', 40.727, 84, null, null, "center");
        doc.text('(†¯úwmwd‡Kkb)', 40.727, 90, null, null, "center");

        doc.text('BDwbU', 81.012, 84, null, null, "center");
        doc.text('g~j¨', 81.012, 90, null, null, "center");

        doc.text('BDwbU', 101.408, 84, null, null, "center");
        doc.text('msL¨v', 101.408, 90, null, null, "center");

        doc.text('†gvU', 122.207, 84, null, null, "center");
        doc.text('g~j¨', 122.207, 90, null, null, "center");

        doc.text('cÖ¯ÍvweZ', 141.5, 78, null, null, "center");
        doc.text('mieivn', 141.5, 84, null, null, "center");
        doc.text('Drm', 141.5, 90, null, null, "center");

        doc.text('gšÍe¨ (cÖvwß, †KvqvwjwU,', 175, 78, null, null, "center");
        doc.text('g~‡j¨I b¨vh¨Zv) ms¯’vcb', 175, 84, null, null, "center");
        doc.text('I wn‡me wefvM', 175, 90, null, null, "center");


        doc.text('†gvU', 42.544, 235, null, null, "center");
        doc.text('†gvU e¨q (K_vq)t', 13, 241, null, null, "left");
        doc.text('e¨q cÖ¯ÍveKvixi gšÍe¨ I ¯^vÿi t', 130.991, 248, null, null, "left");
        doc.text('AwMÖg mgš^q Ki‡Yi ZvwiLt', 13, 248, null, null, "left");

        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('wbe©vnx cwiPvjK', 13, 277.729, null, null, "left");
        doc.text('wnmve Kg©KZ©v', 105, 277.729, null, null, "center");
        doc.text('µq m¤úv`K', 200, 277.729, null, null, "right");
    },
    bayprostab3({ doc }) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(20);
        doc.text('wmGgBGm', 105, 20.583, null, null, "center");
        doc.setFontSize(16);
        doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
        doc.text('cÖ‡R±:', 156, 27.357, null, null, "left");

        doc.setFontSize(14);
        doc.text('cwiKíbvKvix t', 13, 35.173, null, null, "left");
        doc.text('ZvwiLt', 160, 35.173, null, null, "left");
        doc.text('(KwgwU I g~L¨ `wqZ¡ cÖvß Kg©KZ©v)', 13, 41.736, null, null, "left");
        doc.text('LvZt', 13, 47.188, null, null, "left");
        doc.text('welqt', 13, 53.246, null, null, "left");
        doc.text('m¤úv`‡bi Kvjt', 13, 59.304, null, null, "left");
        doc.text('ZvwiL ‡_‡Kt', 110.293, 59.304, null, null, "center");
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
        doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 233.765, null, null, "left");
        doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 233.765, null, null, "left");

        doc.text('UvKv (K_vq)t', 130.991, 239.429, null, null, "left");
        doc.text('gšÍe¨ I ¯^vÿi', 13, 239.429, null, null, "left");

        doc.text('¯^vÿi', 105, 271.729, null, null, "center");
        doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
        doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
        doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
    },
    go({ doc }) {
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(18);
        doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
        doc.setFontSize(14);
        doc.text('evwo bs 5/4, eøK- Gd, jvjgvwUqv, XvKv  1209', 105, 27.357, null, null, "center");

        doc.setFontSize(18);
        doc.text('   †_‡K Li‡Pi PvU©', 105, 35, null, null, "center");
        doc.setFontSize(16);
        doc.setFont("times", "normal");
        doc.text('GO', 82, 35, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text("ZvwiLt  ", 160, 42, null, null, "left");

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
        doc.text('µg.', 15, 56, null, null, "left");
        doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 56, null, null, "center");
        doc.text('UvKvi cwigvb', 120, 56, null, null, "center");
        doc.text('Li‡Pi LvZ', 145, 56, null, null, "center");
        doc.text('e¨q cÖ¯ÍveKvix', 180, 54, null, null, "center");
        doc.text('wefvM/ Kg©KZ©v', 180, 60, null, null, "center");

        doc.text('†gvU:', 30, 187, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('†gvU UvKv (K_vq) :', 16, 196, null, null, "left");


        doc.setFont("SutonnyMJ", "bold");
        doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
        doc.text('   "    Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

        doc.text('†Pqvig¨vb', 16, 280, null, null, "left");
    },
    tourplan1({ doc }) {
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text('dig -2', 195, 12, null, null, "right"); // cmes
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('wmGgBGm', 105, 20.5, null, null, "center"); // cmes
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(20);
        doc.text('ågY cwiKíbv QK', 105, 27.5, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(12);
        doc.text('(GB QK cÖ¯ÍveK Kg©KZ©vi mnvqZvq ågYKvix wb‡R c~iY Ki‡eb)', 105, 32, null, null, "center"); // cmes
        doc.setFontSize(14);

        doc.text('cÖ‡R‡±i bvgt...............................................................', 17, 42, null, null, "left");
        doc.text('1. ågYKvixi bvgt........................................................ c`ext .........................................', 17, 52, null, null, "left");
        doc.text('2. BDwbU ev BDwbU mg~nt..............................................................................................................', 17, 62, null, null, "left");
        doc.text('3. c~Y© ågY Kvjt.........................................................†_‡K................................................. ch©šÍ', 17, 72, null, null, "left");
        doc.text('4. åg‡Yi D‡Ïk¨t', 17, 82, null, null, "left");
        doc.setFontSize(12);
        doc.text('†Kvb wel‡q we‡kl Ae‡jvKb (hw` _v‡K)', 105, 95, null, null, "left");
        doc.text('(me åg‡Yi m‡½B mvaviY Ae‡jvKb AšÍf‚©³ _vK‡e)', 105, 102, null, null, "left");

        doc.setFontSize(14);
        let lnt = 80;
        let lng = 6.5;

        doc.setFontSize(14);
        doc.text('5. cÖ¯ÍvweZ ågY m~Pxt', 17, 110, null, null, "left");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('ZvwiL       †Kv_v n‡Z       mgq      †Kvb ch©šÍ (¯’vb)    mgq                   Kvh© m¤úv`b', 22, 120, null, null, "left");

        doc.line(17, 114, 195, 114) // horizontal line
        doc.line(17, 122, 195, 122) // horizontal line
        doc.line(17, 275, 195, 275) // horizontal line

        doc.line(17, 114, 17, 275) // vertical line
        doc.line(35, 114, 35, 275) // vertical line
        doc.line(60, 114, 60, 275) // vertical line
        doc.line(78, 114, 78, 275) // vertical line
        doc.line(110, 114, 110, 275) // vertical line
        doc.line(127, 114, 127, 275) // vertical line
        doc.line(195, 114, 195, 275) // vertical line
    },
    tourplan2({ doc }) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text('dig -2', 195, 12, null, null, "right"); // cmes

        doc.setFont("SutonnyMJ", "bold");
        doc.text('ZvwiL       †Kv_v n‡Z       mgq      †Kvb ch©šÍ (¯’vb)    mgq                   Kvh© m¤úv`b', 22, 26, null, null, "left");

        doc.line(17, 20, 195, 20) // horizontal line
        doc.line(17, 28, 195, 28) // horizontal line
        doc.line(17, 82, 195, 82) // horizontal line

        doc.line(17, 20, 17, 82) // vertical line
        doc.line(35, 20, 35, 82) // vertical line
        doc.line(60, 20, 60, 82) // vertical line
        doc.line(78, 20, 78, 82) // vertical line
        doc.line(110, 20, 110, 82) // vertical line
        doc.line(127, 20, 127, 82) // vertical line
        doc.line(195, 20, 195, 82) // vertical line

        doc.setFont("SutonnyMJ", "normal");
        doc.text('6. Aby‡gv`bt', 17, 98, null, null, "left");
        doc.text('Aby‡gv`bKvix                                              bvg                              ¯^vÿi           gšÍe¨ (hw` _v‡K)', 17, 110, null, null, "left");
        doc.text('K) cÖ¯ÍveK Kg©KZ©v', 17, 122, null, null, "left");
        doc.text('(ågYKvix wb‡RI n‡Z cv‡i)', 17, 128, null, null, "left");
        doc.text('L) ågYKvix mswkøó', 17, 140, null, null, "left");
        doc.text('wefvMxq Kg©KZ©v', 17, 146, null, null, "left");
        doc.text('(wcGg ev wcI)', 17, 152, null, null, "left");
        doc.text('M) cÖ‡R± †Kv-AwW©‡bUi', 17, 164, null, null, "left");
        doc.text('N) wbe©vnx cwiPvjK', 17, 176, null, null, "left");
        doc.text('* cÖ‡R± †Kv-AwW©‡bUi, †WcywU cÖ‡R± †Kv-AwW©‡bUi I †cÖvMÖvg g¨v‡bRvi‡`i †ÿ‡Î ïay wbe©vnx cwiPvj‡Ki Aby‡gv`b', 17, 188, { charSpace: '-0.02' });
        doc.text('cÖ‡qvRb n‡e|', 17, 194, null, null, "left");
        doc.text('* Ab¨vb¨‡`i †ÿ‡Î me¸‡jv Aby‡gv`b cÖ‡qvRb n‡e, Z‡e Riæix †ÿ‡Î (K) I(L) wb‡q P‡j hvIqv hv‡e | (K) I (L)', 17, 200, { charSpace: '-0.05' });
        doc.text('  Aby‡gv`bKvixi cÖ_g my‡hv‡MB (M) I (N) Aby‡gv`‡bi Rb¨ AewnZ Ki‡eb|', 17, 206, null, null, "left");
        // doc.text('* K, L Ges M Aby‡gv`b nevi ci cwiKíbv cÖkvm‡b Rgv w`‡Z n‡e| cÖkvm‡b cÖ‡qvRbxq Z_¨ w`‡q wb/c Aby‡gv`‡bi', 17, 212, null, null, "left");
        doc.text('* K, L Ges M Aby‡gv`b nevi ci cwiKíbv cÖkvm‡b Rgv w`‡Z n‡e| cÖkvm‡b cÖ‡qvRbxq Z_¨ w`‡q wb/c', 17, 212, { charSpace: '0.15' });

        doc.text(' Aby‡gv`‡bi Rb¨ †cÖiY  Ki‡eb|', 17, 218, null, null, "left");


        doc.text('`ªóe¨t GB Q‡Ki Kwc åg‡Y hvÎv Kivi Av‡MB ågYKvix‡K mswkøó wefvMxq Kg©KZ©v, wbe©vnx cwiPvjK, wnmve Kg©KZ©v', 17, 232, { charSpace: '-0.04' });
        doc.text('I cÖ‡R± †Kv-AwW©‡bU‡ii Kv‡Q w`‡Z n‡e| cÖ‡R± †Kv-AwW©‡bUi me åg‡Yi LwZqvb iÿv Ki‡ebG QK c‡i mswkøó', 17, 238, null, null, "left");
        doc.text('ågY m¤úv`b Q‡Ki m‡½ hy³ n‡e| åg‡Y hvÎvi Av‡M ågYKvix Aek¨B ågY cwiKíbv QK, m¤úv`b Ges BDwbU', 17, 244, { charSpace: '0.01' });
        doc.text('Ae‡jvKb QK I Z_¨ †Rbv‡ij Awdm I †m‡µUvwi‡qU gwbUwis Awdm †_‡K msMÖn Ki‡eb Ges Zv e¨envi Ki‡eb|', 17, 250, { charSpace: '-0.01' });
        doc.text('ågY cwiKíbv I m¤úv`b wZb Kwc K‡i wnmve Ges †m‡µUvwi‡qU gwbUwis Awd‡m GK Kwc Rgv w`‡q wb‡Ri wbKU', 17, 256, { charSpace: '-0.01' });
        doc.text('GK Kwc ivL‡eb|', 17, 262, null, null, "left");

    },
    tourexecution1({ doc }) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text('dig -3', 195, 12, null, null, "right"); // cmes
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('wmGgBGm', 105, 20.5, null, null, "center"); // cmes
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(20);
        doc.text('ågY m¤úv`b QK', 105, 27.5, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(12);
        doc.text('(GB QK ågY †k‡l ågYKvix c~iY Ki‡eb)', 105, 32, null, null, "center"); // cmes
        doc.setFontSize(14);

        doc.text('cÖ‡R‡±i bvgt...............................................................', 17, 42, null, null, "left");
        doc.text('1. ågYKvixi bvgt........................................................ c`ext .........................................', 17, 52, null, null, "left");
        doc.text('2. BDwbU ev BDwbU mg~nt..............................................................................................................', 17, 62, null, null, "left");
        doc.text('3. c~Y© ågY Kvjt.........................................................†_‡K................................................. ch©šÍ', 17, 72, null, null, "left");
        doc.text('4. ågYm~Px I m¤úvw`Z KvRt', 17, 82, null, null, "left");

        doc.setFont("SutonnyMJ", "bold");
        doc.text('ZvwiL       †Kv_v n‡Z       mgq      †Kvb ch©šÍ (¯’vb)    mgq                m¤úvw`Z KvR (ms‡ÿ‡c)', 22, 90, null, null, "left");

        doc.line(17, 85, 195, 85) // horizontal line
        doc.line(17, 92, 195, 92) // horizontal line
        doc.line(17, 275, 195, 275) // horizontal line

        doc.line(17, 85, 17, 275) // vertical line
        doc.line(35, 85, 35, 275) // vertical line
        doc.line(60, 85, 60, 275) // vertical line
        doc.line(78, 85, 78, 275) // vertical line
        doc.line(110, 85, 110, 275) // vertical line
        doc.line(127, 85, 127, 275) // vertical line
        doc.line(195, 85, 195, 275) // vertical line
    },
    tourexecution2({ doc }) {
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text('dig -3', 195, 12, null, null, "right"); // cmes

        doc.setFont("SutonnyMJ", "bold");
        doc.text('ZvwiL       †Kv_v n‡Z       mgq      †Kvb ch©šÍ (¯’vb)    mgq                 m¤úvw`Z KvR (ms‡ÿ‡c)', 22, 26, null, null, "left");

        doc.line(17, 20, 195, 20) // horizontal line
        doc.line(17, 28, 195, 28) // horizontal line
        doc.line(17, 82, 195, 82) // horizontal line

        doc.line(17, 20, 17, 82) // vertical line
        doc.line(35, 20, 35, 82) // vertical line
        doc.line(60, 20, 60, 82) // vertical line
        doc.line(78, 20, 78, 82) // vertical line
        doc.line(110, 20, 110, 82) // vertical line
        doc.line(127, 20, 127, 82) // vertical line
        doc.line(195, 20, 195, 82) // vertical line

        doc.setFont("SutonnyMJ", "normal");
        doc.text('5. ågY cwiKíbvi m‡½ Awgj n‡j Zvi KviYt', 17, 98, null, null, "left");
        doc.text('6. GB ågY m¤ú‡K© gšÍe¨ I mycvwik (hw` _v‡K)', 17, 140, null, null, "left");


        doc.text('¯^vÿi', 120, 186, null, null, "left");
        doc.text('ZvwiL', 120, 198, null, null, "left");



        doc.text('`ªóe¨t GB Q‡Ki Kwc ågY †k‡l ågYKvix‡K  †m‡µUvwi‡qU Awdm I GKvD›U wefvM‡K w`‡Z n‡e| GB Kwc mswkøó', 17, 232, { charSpace: '0.01' });
        doc.text('ågY cwiKíbv Q‡Ki m‡½ mshy³ n‡e| ågY m¤úv`b QK I BDwbU Ae‡jvKb QK †divi ciciB †m‡µUvwi‡qU', 17, 238, { charSpace: '0.09' });
        doc.text('gwbUwis Awd‡m Rgv w`‡Z n‡e| ågY m¤úv`b Q‡Ki Dci Ae‡jvKb QK Rgv †`qv n‡q‡Q GB g‡g©  cÖ‡R±', 17, 244, { charSpace: '0.17' });
        doc.text('†Kv-AwW©‡bUi I †m‡µUvwi‡qU gwbUwis Awdm wefv‡Mi cÖZ¨qb †c‡j Z‡eB wnmve wefvM wUG/wWG wej MÖnY Ki‡eb |', 17, 250, { charSpace: '-0.04' });
        doc.text('GK Kwc K‡i wUG/wWG we‡ji m‡½ wej K‡i wb‡Z n‡e|', 17, 256, { charSpace: '-0.01' });
    },
    localmovement({ doc }) {
        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 12, 12, 10, 15);
        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 159.95, 12, 10, 15);

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('†m›Uvi di g¨vm GWz‡Kkb Bb mv‡qÝ (wmGgBGm)', 74.25, 20.5, null, null, "center"); // cmes
        doc.text('†m›Uvi di g¨vm GWz‡Kkb Bb mv‡qÝ (wmGgBGm)', 222.75, 20.5, null, null, "center"); // cmes
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(16);
        doc.text('mvwf©m †m›Uvi ågY welqK QK', 74.25, 27.5, null, null, "center");
        doc.text('mvwf©m †m›Uvi ågY welqK QK', 222.75, 27.5, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text('ZvwiL: .........................', 12, 40, null, null, "left");
        doc.text('ZvwiL: .........................', 160.5, 40, null, null, "left");

        doc.text('eivei,', 12, 50, null, null, "left");
        doc.text('eivei,', 160.5, 50, null, null, "left");
        doc.text('wbe©vnx cwiPvjK', 12, 56, null, null, "left");
        doc.text('wbe©vnx cwiPvjK', 160.5, 56, null, null, "left");
        doc.text('wmGgBGm', 12, 62, null, null, "left");
        doc.text('wmGgBGm', 160.5, 62, null, null, "left");



        doc.text('welq: wgwUs /†Uªwbs /IqvK©kc /†mwgbvi /µqmsµvšÍ / Ab¨vb¨.................Kv‡R', 12, 72, null, null, "left");
        doc.text('        hvevi ZvrÿwYK Aby‡gv`b I AewnZKiY cÖm‡½|', 12, 78, null, null, "left");

        doc.text('welq: wgwUs /†Uªwbs /IqvK©kc /†mwgbvi /µqmsµvšÍ / Ab¨vb¨.................Kv‡R', 160.5, 72, null, null, "left");
        doc.text('        hvevi ZvrÿwYK Aby‡gv`b I AewnZKiY cÖm‡½|', 160.5, 78, null, null, "left");


        doc.text('Kv‡Ri ¯’vb:', 15, 95, null, null, "left");
        doc.text('wVKvbv:', 15, 105, null, null, "left");
        doc.text('D‡Ïk¨ :', 15, 115, null, null, "left");
        doc.text('mgqmxgv:', 15, 125, null, null, "left");

        doc.text('Kv‡Ri ¯’vb:', 163.5, 95, null, null, "left");
        doc.text('wVKvbv:', 163.5, 105, null, null, "left");
        doc.text('D‡Ïk¨ :', 163.5, 115, null, null, "left");
        doc.text('mgqmxgv:', 163.5, 125, null, null, "left");

        doc.line(12, 88, 136.5, 88) // vertical line
        doc.line(12, 98, 136.5, 98) // vertical line
        doc.line(12, 108, 136.5, 108) // vertical line
        doc.line(12, 118, 136.5, 118) // vertical line
        doc.line(12, 128, 136.5, 128) // vertical line


        doc.line(160.5, 88, 285, 88) // vertical line
        doc.line(160.5, 98, 285, 98) // vertical line
        doc.line(160.5, 108, 285, 108) // vertical line
        doc.line(160.5, 118, 285, 118) // vertical line
        doc.line(160.5, 128, 285, 128) // vertical line


        doc.line(12, 88, 12, 128) // vertical line
        doc.line(40, 88, 40, 128) // vertical line
        doc.line(136.5, 88, 136.5, 128) // vertical line

        doc.line(160.5, 88, 160.5, 128) // vertical line
        doc.line(188.5, 88, 188.5, 128) // vertical line
        doc.line(285, 88, 285, 128) // vertical line


        doc.text('webxZ,', 12, 154, null, null, "left");
        doc.text('¯^vÿi:.........................................................', 12, 171, null, null, "left");
        doc.text('bvg:...........................................................', 12, 178, null, null, "left");
        doc.text('wefvM/DBs:..................................................', 12, 185, null, null, "left");

        doc.text('Aby‡gv`bKvix', 136.5, 185, null, null, "right");


        doc.text('webxZ,', 160.5, 154, null, null, "left");
        doc.text('¯^vÿi:.........................................................', 160.5, 171, null, null, "left");
        doc.text('bvg:...........................................................', 160.5, 178, null, null, "left");
        doc.text('wefvM/DBs:..................................................', 160.5, 185, null, null, "left");

        doc.text('Aby‡gv`bKvix', 285, 185, null, null, "right");


        doc.line(148.5, 0, 148.5, 5) // vertical line  
        doc.line(148.5, 102.5, 148.5, 107.5) // vertical line
        doc.line(148.5, 205, 148.5, 210) // vertical line

    },
    gatepass({ doc }) {

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 38, 13, 10, 15);
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);

        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 105, 20, null, null, "center");
        doc.setFontSize(13);
        doc.text("evwo-5/4, eøK-Gd, jvjgvwUqv, XvKv-1207,†dvbt 02-223310143", 105, 26, null,
            null, "center");
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(24);
        doc.text("†MU cvk", 105, 35, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);

        doc.text("ZvwiLt.................", 13, 46, null, null, "left");
        doc.text("cÖavb Kvh©vjq", 197, 46, null, null, "right");
        doc.line(13, 48, 197, 48);
        doc.line(13, 75, 197, 75);
        doc.line(13, 48, 13, 118);
        doc.line(26, 48, 26, 118);
        doc.line(100, 48, 100, 118);
        doc.line(140, 48, 140, 118);
        doc.line(197, 48, 197, 118);
        doc.line(13, 118, 197, 118);
        doc.text("µwgK", 15, 54, null, null, "left");
        doc.text("bs", 17, 61, null, null, "left");
        doc.text("gvjvgv‡ji weeiY", 45, 54, null, null, "left");
        doc.text("wK D‡Ï‡k¨ †bIqv", 105, 54, null, null, "left");
        doc.text("gvjvgvj c~Yivq †dir Avbv|", 168, 54, null, null, "center");
        doc.text("fvj Ae¯’vq ey‡S †cj wKbv Zv", 168, 60, null, null, "center");
        doc.text("Zv mv‡mi MÖnYKvix gšÍe¨ mn", 168, 66, null, null, "center");
        doc.text("¯^vÿi Ki‡eb", 168, 72, null, null, "center");
        doc.text("gvjvgvj MÖnYKvixi", 28, 139, null, null, "center");
        doc.text("bvg I ¯^vÿi", 28, 144, null, null, "center");
        doc.text("gvjvgvj mieivnKvixi", 107, 139, null, null, "center");
        doc.text("bvg I ¯^vÿi", 107, 144, null, null, "center");
        doc.text("Aby‡gv`bKvixi", 185, 139, null, null, "center");
        doc.text("bvg I ¯^vÿi", 185, 144, null, null, "center");

        //-------------------------------------
        doc.line(0, 148.5, 5, 148.5);
        doc.line(102.5, 148.5, 107.5, 148.5);
        doc.line(205, 148.5, 210, 148.5);
        //-------------------------------------

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 38, 161.5, 10, 15);
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);

        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 105, 168.5, null, null, "center");

        doc.setFontSize(13);
        doc.text("evwo-5/4, eøK-Gd, jvjgvwUqv, XvKv-1207, †dvbt 02-223310143", 105, 174.5, null,
            null, "center");
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(24);
        doc.text("†MU cvk", 105, 183.5, null, null, "center");
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);

        doc.text("ZvwiLt.................", 13, 194.5, null, null, "left");
        doc.text("cÖavb Kvh©vjq", 197, 194.5, null, null, "right");
        doc.line(13, 196.5, 197, 196.5);
        doc.line(13, 223.5, 197, 223.5);
        doc.line(13, 196.5, 13, 266.5);
        doc.line(26, 196.5, 26, 266.5);
        doc.line(100, 196.5, 100, 266.5);
        doc.line(140, 196.5, 140, 266.5);
        doc.line(197, 196.5, 197, 266.5);
        doc.line(13, 266.5, 197, 266.5);
        doc.text("µwgK", 15, 202.5, null, null, "left");
        doc.text("bs", 17, 61, null, null, "left");
        doc.text("gvjvgv‡ji weeiY", 45, 202.5, null, null, "left");
        doc.text("wK D‡Ï‡k¨ †bIqv", 105, 202.5, null, null, "left");
        doc.text("gvjvgvj c~Yivq †dir Avbv|", 168, 202.5, null, null, "center");
        doc.text("fvj Ae¯’vq ey‡S †cj wKbv Zv", 168, 208.6, null, null, "center");
        doc.text("Zv mv‡mi MÖnYKvix gšÍe¨ mn", 168, 214.5, null, null, "center");
        doc.text("¯^vÿi Ki‡eb", 168, 220.5, null, null, "center");
        doc.text("gvjvgvj MÖnYKvixi", 28, 287.5, null, null, "center");
        doc.text("bvg I ¯^vÿi", 28, 292.5, null, null, "center");
        doc.text("gvjvgvj mieivnKvixi", 107, 287.5, null, null, "center");
        doc.text("bvg I ¯^vÿi", 107, 292.5, null, null, "center");
        doc.text("Aby‡gv`bKvixi", 185, 287.5, null, null, "center");
        doc.text("bvg I ¯^vÿi", 185, 292.5, null, null, "center");
    },
    chalan({ doc }) {

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 10, 5, 10, 15);
        doc.setFont("SutonnyMJ", "bold");
        doc.text("Pvjvb / K¨vk †g‡gv", 74.25, 10, null, null, "center");
        doc.setFontSize(16);
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(21);
        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 80, 18, null, null, "center");

        doc.setFontSize(14);
        doc.text("evwo-5/4, eøK-Gd, jvjgvwUqv, XvKv-1207, †dvbt 02-223310143", 80, 24, null, null, "center");

        doc.text("bs............", 10, 35, null, null, "left");
        doc.text("ZvwiLt.........................", 138.5, 35, null, null, "right");
        doc.text("bvgt..................................................................................................", 10, 45, null, null, "left");
        doc.text("wVKvbvt...............................................................................................", 10, 53, null, null, "left");

        doc.line(10, 58, 138.5, 58); // hr
        doc.line(10, 66, 138.5, 66); // hr
        doc.line(10, 175, 138.5, 175); // hr
        doc.line(10, 181, 138.5, 181); // hr

        doc.line(10, 58, 10, 181); // vr
        doc.line(22, 58, 22, 181); // vr
        doc.line(83, 58, 83, 181); // vr
        doc.line(99, 58, 99, 181); // vr
        doc.line(115, 58, 115, 181); // vr
        doc.line(138.5, 58, 138.5, 181); // vr


        doc.text("µt bs", 11, 64, null, null, "left");
        doc.text("weeiY", 45, 64, null, null, "left");
        doc.text("cwigvb", 85, 64, null, null, "left");
        doc.text("`i", 105, 64, null, null, "left");
        doc.text("UvKv", 122, 64, null, null, "left");
        doc.setFont("SutonnyMJ", "bold");
        doc.text("†gvU UvKv", 45, 180, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");

        doc.text("†gvU UvKv K_vqt...................................................................................", 10, 188, null, null, "left");
        doc.text("MÖnbKvixi ¯^vÿi", 10, 205, null, null, "left");
        doc.text("wmGgBGm c‡ÿ ¯^vÿi", 138.5, 205, null, null, "right");


        //*******************************
        doc.line(148.5, 0, 148.5, 5);
        doc.line(148.5, 102.5, 148.5, 107.5);
        doc.line(148.5, 205, 148.5, 210);
        //------------------------------------

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", 158.5, 5, 10, 15);
        doc.setFont("SutonnyMJ", "bold");
        doc.text("Pvjvb / K¨vk †g‡gv", 222.75, 10, null, null, "center");  /// Center
        doc.setFontSize(16);
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(21);
        doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 228.5, 18, null, null, "center");

        doc.setFontSize(14);
        doc.text("evwo-5/4, eøK-Gd, jvjgvwUqv, XvKv-1207, †dvbt 02-223310143", 228.5, 24, null, null, "center");

        doc.text("bs............", 158.5, 35, null, null, "left"); /// Left

        doc.text("ZvwiLt.........................", 287, 35, null, null, "right");
        doc.text("bvgt..................................................................................................", 158.5, 45, null, null, "left");
        doc.text("wVKvbvt...............................................................................................", 158.5, 53, null, null, "left");

        doc.line(158.5, 58, 287, 58); // hr
        doc.line(158.5, 66, 287, 66); // hr
        doc.line(158.5, 175, 287, 175); // hr
        doc.line(158.5, 181, 287, 181); // hr

        doc.line(158.5, 58, 158.5, 181); // vr
        doc.line(170.5, 58, 170.5, 181); // vr
        doc.line(231.5, 58, 231.5, 181); // vr
        doc.line(247.5, 58, 247.5, 181); // vr
        doc.line(263.5, 58, 263.5, 181); // vr
        doc.line(287, 58, 287, 181); // vr

        doc.text("µt bs", 159.5, 64, null, null, "left");
        doc.text("weeiY", 193.5, 64, null, null, "left");
        doc.text("cwigvb", 233.5, 64, null, null, "left");
        doc.text("`i", 253.5, 64, null, null, "left");
        doc.text("UvKv", 270.5, 64, null, null, "left");

        doc.setFont("SutonnyMJ", "bold");
        doc.text("†gvU UvKv", 193.5, 180, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("†gvU UvKv K_vqt...................................................................................", 158.5, 188, null, null, "left");
        doc.text("MÖnbKvixi ¯^vÿi", 158.5, 205, null, null, "left");
        doc.text("wmGgBGm c‡ÿ ¯^vÿi", 287, 205, null, null, "right");
    },
    slippad({ doc }) {
        doc.addImage("/images/slip_pad/slip_pad.png", "PNG", 7, 10, 90, 15);
        doc.addImage("/images/slip_pad/slip_pad.png", "PNG", (7 + 105), 10, 90, 15);
        doc.addImage("/images/slip_pad/slip_pad.png", "PNG", 7, (10 + 148.5), 90, 15);
        doc.addImage("/images/slip_pad/slip_pad.png", "PNG", (7 + 105), (10 + 148.5), 90, 15);

        doc.line(105, 0, 105, 10);
        doc.line(105, 287, 105, 297);
        doc.line(105, 143.5, 105, 153.5);

        doc.line(100, 148.5, 110, 148.5);
        doc.line(0, 148.5, 10, 148.5);
        doc.line(200, 148.5, 210, 148.5);
    },
    bearer({ doc }) {
        doc.setFont("times", "normal");
        doc.setFontSize(18);
        doc.text('Centre for Mass Education in Science (CMES)', 105, 19.5, null, null, "center");
        doc.setFontSize(13);
        doc.text('House# 5/4, Block# F, Lalmatia, Dhaka - 1207', 105, 26, null, null, "center");
        doc.setFont("times", "bold");
        doc.setFontSize(18);
        doc.text('Request for Bearer Cheque', 105, 33, null, null, "center");
        doc.setFont("times", "normal");
        doc.setFontSize(13);
        doc.text('Project: .................', 105, 42, null, null, "center");
        doc.text('To', 20, 50, null, null, "left");
        doc.text('Date: ........................', 190, 50, null, null, "right");
        doc.text('The Chairman', 20, 56, null, null, "left");
        doc.text('CMES', 20, 62, null, null, "left");

        doc.text('Subject:', 20, 72, null, null, "left");
        doc.setFont("times", "bold");
        doc.text('               Request for the approval of Bearer Cheque', 20, 72, null, null, "left");


        doc.setFont("times", "normal");
        doc.text('Dear Sir,', 20, 82, null, null, "left");

        let splText = doc.splitTextToSize("We would like to request you to give an approval for issuing a Bearer Cheque in the name of Mr./Ms................................................................................. nominated by Executive Director. The reason for this request is given below:", 170);
        doc.text(splText, 20, 88, null, null, "left");

        doc.line(20, 106, 190, 106) // horizontal line
        doc.line(20, 114, 190, 114) // horizontal line

        doc.line(20, 242, 190, 242) // horizontal line
        doc.line(20, 250, 190, 250) // horizontal line  

        doc.line(20, 106, 20, 250) // vertical line
        doc.line(30, 106, 30, 250) // vertical line
        doc.line(105, 106, 105, 250) // vertical line
        doc.line(135, 106, 135, 250) // vertical line
        doc.line(190, 106, 190, 250) // vertical line


        doc.setFont("times", "normal");

        doc.text('SL', 25, 112, null, null, "center");
        doc.text('Reasons for Bearer Cheque', 67.5, 112, null, null, "center");
        doc.text('Amount/Taka', 120, 112, null, null, "center");
        doc.text('Head of Accounts', 162.5, 112, null, null, "center");
        doc.setFont("times", "bold");
        doc.text('Total', 35, 248, null, null, "left");
        doc.setFont("times", "normal");
        doc.text('Inword:', 20, 255, null, null, "left");

        doc.text('Chairman', 20, 287, null, null, "left");
        doc.text('Executive Director', 90, 287, null, null, "center");

        doc.text('Date:.................', 145, 287, null, null, "left");
        doc.text('Signature:', 145, 281, null, null, "left");
        doc.text('Name:', 145, 275, null, null, "left");
        doc.text('Requester', 145, 269, null, null, "left");

    },
    torunit({ doc }) {

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(16);
        doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
        doc.setFontSize(20);
        doc.text('MÖvgxY cÖhyw³ ‡K›`ª', 105, 30, null, null, "center");

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text("BDwbUt ...........................................................", 13, 42, null, null, "left");
        doc.text("ZvwiLt ............................................................", 13, 49, null, null, "left");

        doc.setFont("times", "bold");
        doc.setFontSize(16);
        doc.text('TOR', 105, 58, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(14);

        doc.text("1. welqt ..............................................................", 13, 67, null, null, "left");
        doc.text("2. D‡Ïk¨t ............................................................", 13, 74, null, null, "left");

        doc.text("3. `icÎ msMÖn KwgwUi bvg I ¯^v¶it.", 13, 81, null, null, "left");
        doc.setFont("SutonnyMJ", "normal");
        doc.text("    K) Rbve ...........................................................", 13, 88, null, null, "left");
        doc.text("    L) Rbve ...........................................................", 13, 95, null, null, "left");
        doc.text("    M) Rbve ...........................................................", 13, 102, null, null, "left");

        doc.text("4. `icÎ msMÖ‡ni ZvwiLt .........................", 13, 109, null, null, "left");
        doc.setFont("SutonnyMJ", "bold");
        doc.text("5. `icÎ we‡kølYt", 13, 116, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.line(13, 118, 200, 118) // horizontal line
        doc.line(13, 132, 200, 132) // horizontal line

        doc.line(13, 146, 200, 146) // horizontal line
        doc.line(13, 160, 200, 160) // horizontal line

        doc.line(13, 174, 200, 174) // horizontal line
        doc.line(13, 188, 200, 188) // horizontal line

        doc.line(13, 118, 13, 188) // vertical line
        doc.line(25, 118, 25, 188) // vertical line
        doc.line(86, 118, 86, 188) // vertical line
        doc.line(110, 118, 110, 188) // vertical line
        doc.line(130, 118, 130, 188) // vertical line
        doc.line(172, 118, 172, 188) // vertical line
        doc.line(200, 118, 200, 188) // vertical line

        doc.text('µg.', 15, 127, null, null, "left");
        doc.text('`i`vZv cÖwZôv‡bi bvg I wVKvbv', 55, 127, null, null, "center");
        doc.text('weeiY', 98, 127, null, null, "center");
        doc.text('GKK g~j¨', 120, 127, null, null, "center");
        doc.text('wbe©vwPZ cÖwZôv‡bi bvg', 151, 123, null, null, "center");
        doc.text('Aby‡gv`bKvixi', 186, 123, null, null, "center");

        doc.text('I wVKvbv', 151, 130, null, null, "center");
        doc.text('¯^v¶i', 186, 130, null, null, "center");

        doc.text('1.', 19, 140, null, null, "center");
        doc.text('2.', 19, 154, null, null, "center");
        doc.text('3.', 19, 168, null, null, "center");
        doc.text('4.', 19, 182, null, null, "center");

        doc.setFont("SutonnyMJ", "bold");
        doc.text("6. g~j¨ cwi‡kva c×wZt", 13, 196, null, null, "left");
        doc.text("7. †Wwjfvwi c×wZt", 13, 203, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text("†P‡Ki/GKvD›U †c/bM` g~‡j¨", 60, 196, null, null, "left");
        doc.text("µq KwgwU wbR `vwq‡Z¡/†`vKvb`vi wbR `vwq‡Z¡ †cŠu‡Q w`‡eb", 60, 203, null, null, "left");

        doc.setFont("SutonnyMJ", "bold");
        doc.text("8. µq KwgwUt", 13, 210, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text("    K) Rbve ...........................................................", 13, 217, null, null, "left");
        doc.text("    L) Rbve ...........................................................", 13, 224, null, null, "left");
        doc.text("    M) Rbve ...........................................................", 13, 231, null, null, "left");

        doc.setFont("SutonnyMJ", "bold");
        doc.text("9. g~j¨vqb KwgwUi bvgt", 13, 238, null, null, "left");

        doc.setFont("SutonnyMJ", "normal");
        doc.text("    K) Rbve ...........................................................", 13, 245, null, null, "left");
        doc.text("    L) Rbve ...........................................................", 13, 252, null, null, "left");
        doc.text("    M) Rbve ...........................................................", 13, 259, null, null, "left");

    },
    requisition({ doc }, marginLeft) {

        // const marginLeft = 10;
        // const marginLeft = 158;
        const marginTop = 8;

        doc.addImage("/images/cmes_logo/cmes.png", "PNG", marginLeft + 44, marginTop, 9, 13.5);

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(26);
        doc.text("wmGgBGm", marginLeft + 72, marginTop + 11.5, null, null, "center");
        doc.setFont("SutonnyMJ", "bold");
        doc.setFontSize(18);
        doc.text("wiKzBwRkb dig", marginLeft + 64.25, marginTop + 21, null, null, "center");
        doc.line(marginLeft + 46, marginTop + 22, marginLeft + 83, marginTop + 22)

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text("ZvwiL:.............................", marginLeft, marginTop + 29.5, null, null, "left");
        doc.text("mgq :....................", marginLeft + 124, marginTop + 29.5, null, null, "right");

        doc.text("A`¨ wbgœwjwLZ †PKeB¸wj I †iwR÷vi mg~n †ei Kiv nj:", marginLeft + 64.25, marginTop + 36, null, null, "center");
        doc.text("K) †cwUK¨vk †iwR÷vi", marginLeft + 42, marginTop + 43, null, null, "left");
        doc.text("L) †PK †iwR÷vi", marginLeft + 42, marginTop + 50, null, null, "left");

        doc.setFont("times", "normal");
        doc.text("FDR:", marginLeft, marginTop + 56.5, null, null, "left");

        // ---------------------------
        doc.line(297.000 / 2, 0, 297.000 / 2, 10);
        doc.line(297.000 / 2, 100, 297.000 / 2, 110);
        doc.line(297.000 / 2, 200, 297.000 / 2, 210);
        //----------------------------

        doc.setFont("SutonnyMJ", "normal");
        doc.text("1.  ..................................................................................", marginLeft + 18, marginTop + 60.5, null, null, "left");
        doc.text("2.  ..................................................................................", marginLeft + 18, marginTop + 66.5, null, null, "left");
        doc.text("3.  ..................................................................................", marginLeft + 18, marginTop + 72.5, null, null, "left");
        doc.text("4.  ..................................................................................", marginLeft + 18, marginTop + 78.5, null, null, "left");
        doc.text("5.  ..................................................................................", marginLeft + 18, marginTop + 84.5, null, null, "left");
        doc.text("6.  ..................................................................................", marginLeft + 18, marginTop + 90.5, null, null, "left");

        doc.text("†PK eB:", marginLeft, marginTop + 96.5, null, null, "left");
        doc.text("1.  ..................................................................................", marginLeft + 18, marginTop + 102.5, null, null, "left");
        doc.text("2.  ..................................................................................", marginLeft + 18, marginTop + 108.5, null, null, "left");
        doc.text("3.  ..................................................................................", marginLeft + 18, marginTop + 114.5, null, null, "left");
        doc.text("4.  ..................................................................................", marginLeft + 18, marginTop + 120.5, null, null, "left");
        doc.text("5.  ..................................................................................", marginLeft + 18, marginTop + 126.5, null, null, "left");
        doc.text("6.  ..................................................................................", marginLeft + 18, marginTop + 132.5, null, null, "left");

        doc.text("7.  ..................................................................................", marginLeft + 18, marginTop + 138.5, null, null, "left");
        doc.text("8.  ..................................................................................", marginLeft + 18, marginTop + 144.5, null, null, "left");
        doc.text("9.  ..................................................................................", marginLeft + 18, marginTop + 150.5, null, null, "left");

        doc.text("¯^v¶i", marginLeft + 18, marginTop + 171, null, null, "left");
        doc.text("¯^v¶i", marginLeft + 125, marginTop + 171, null, null, "right");

        doc.text("w`‡bi †k‡l Dc‡iv³ †PKeB I †iwR÷vi mg~n eywSqv cvBjvg", marginLeft + 73, marginTop + 178, null, null, "center");

        doc.text("¯^v¶i", marginLeft + 18, marginTop + 192, null, null, "left");
        doc.text("¯^v¶i", marginLeft + 125, marginTop + 192, null, null, "right");
    }



}