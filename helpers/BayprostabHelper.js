
export const BayprostabPage1 = ({ doc }) => {
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(20);
    doc.text('wmGgBGm', 105, 20.5, null, null, "center");
    doc.setFontSize(16);
    doc.text('†K›`ªxq e¨q', 105, 26, null, null, "center");
    doc.text('cÖ‡R±:', 178.438, 26, null, null, "left");

    let lnt = 34;
    let lng = 6.5;

    doc.setFontSize(14);
    doc.text('e¨q cÖ¯Íve', 13, (lnt + (lng * 0)), null, null, "left");
    doc.text('e¨q cÖ¯ÍveKvixi bvgt', 13, (lnt + (lng * 1)), null, null, "left");
    doc.text('LvZt', 13, (lnt + (lng * 2)), null, null, "left");
    doc.text('welqt', 13, (lnt + (lng * 3)), null, null, "left");


    doc.text('ZvwiLt ', 133, (lnt + (lng * 0)), null, null, "left");
    doc.text('e¨qcÖ¯Íve bs t', 133, (lnt + (lng * 1)), null, null, "left");
    doc.text('BwZg‡a¨ m¤úvw`Z e¨q t  ', 133, (lnt + (lng * 4)), null, null, "left");

    doc.text('cwiKíbv m~Î (bs mn)', 13, (lnt + (lng * 5)), null, null, "left");
    doc.text('cÖv°wjZ e¨q', 13, (lnt + (lng * 6)), null, null, "left");
    doc.text('(cÖvmw½K KvMRcÎ ms‡hvwhZ Kiæb)', 105, (lnt + (lng * 6)), null, null, "center");

    doc.line(13, (lnt + 2 + (lng * 6)), 200, (lnt + 2 + (lng * 6))) // horizontal line
    doc.line(13, (lnt + 21 + (lng * 6)), 200, (lnt + 21 + (lng * 6))) // horizontal line
    doc.line(13, (lnt + 155 + (lng * 6)), 200, (lnt + 155 + (lng * 6))) // horizontal line
    doc.line(13, (lnt + 162 + (lng * 6)), 200, (lnt + 162 + (lng * 6))) // horizontal line

    doc.line(13, (lnt + 2 + (lng * 6)), 13, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(85, (lnt + 2 + (lng * 6)), 85, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(108, (lnt + 2 + (lng * 6)), 108, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(124, (lnt + 2 + (lng * 6)), 124, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(148, (lnt + 2 + (lng * 6)),148, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(164, (lnt + 2 + (lng * 6)), 164, (lnt + 162 + (lng * 6))) // vertical line
    doc.line(200, (lnt + 2 + (lng * 6)), 200, (lnt + 162 + (lng * 6))) // vertical line

  
    doc.text('`ªe¨/mvwf©m', 42.071, 83.781, null, null, "center");
    doc.text('BDwbU', 97, 83.781, null, null, "center");
    doc.text('BDwbU', 116, 83.781, null, null, "center");
    doc.text('†gvU', 136, 83.781, null, null, "center");
    doc.text('cÖ¯ÍvweZ', 156, 83.781, null, null, "center"); //
    doc.text('mieivnkZ©/‡Kv‡Ukb', 182, 83.781, null, null, "center");


    doc.text('(†¯úwmwd‡Kkb)', 42.071, 87.618, null, null, "center");
    doc.text('g~j¨', 97, 87.618, null, null, "center");
    doc.text('msL¨v', 116, 87.618, null, null, "center");
    doc.text('g~j¨', 136, 87.618, null, null, "center");
    doc.text('mieivn', 156, 87.618, null, null, "center");
    doc.text('b¨vh¨ g~j¨ wbwðZKiY', 182, 87.618, null, null, "center"); //
  
    doc.text('Drm', 156, 91.657, null, null, "center");
    doc.text('mieivn c×vZ', 182, 91.657, null, null, "center");
 
    doc.text('†gvU', 42.071, 218 + 15, null, null, "center");
    doc.text('†gvU cÖv°wjZ e¨q (K_vq)t', 13, 226.144 + 15, null, null, "left");

    doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 135, 237.957 + 15, null, null, "left");
    doc.text('mnvqZvKvix t', 135, 244.217 + 15, null, null, "left");
    doc.text('cÖ¯ÍveKvix t', 135, 250.073 + 15, null, null, "left");

    doc.text('†Pqvig¨vb', 13.930, 280.767 + 5, null, null, "left");
    doc.text('¯^vÿi', 105, 276.728 + 5, null, null, "center");
    doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767 + 5, null, null, "center");
}

export const BayprostabPage2 = ({ doc }) => {
    doc.text('cÖ‡R±:', 178.438, 26, null, null, "left");
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
    doc.line(85, 72,85, 237) // vertical line
    doc.line(108, 72, 108, 237) // vertical line
    doc.line(124, 72, 124, 237) // vertical line
   
    doc.line(148, 72, 148, 237) // vertical line
    doc.line(200, 72, 200, 237) // vertical line

   



    doc.text('`ªe¨/mvwf©m', 42.071, 84, null, null, "center");
    doc.text('(†¯úwmwd‡Kkb)', 42.071, 90, null, null, "center");

    doc.text('BDwbU', 97, 84, null, null, "center");
    doc.text('g~j¨', 97, 90, null, null, "center");

    doc.text('BDwbU', 116, 84, null, null, "center");
    doc.text('msL¨v', 116, 90, null, null, "center");

    doc.text('†gvU', 136, 84, null, null, "center");
    doc.text('g~j¨', 136, 90, null, null, "center");

   
    doc.text('gšÍe¨ (cÖvwß, †KvqvwjwU,', 175, 78, null, null, "center");
    doc.text('g~‡j¨I b¨vh¨Zv) ms¯’vcb', 175, 84, null, null, "center");
    doc.text('I wn‡me wefvM', 175, 90, null, null, "center");


    // †gvU 226.803

    // ok 
    doc.text('†gvU', 42.544, 235, null, null, "center");
    doc.text('†gvU e¨q (K_vq)t', 13, 241, null, null, "left");
    doc.text('e¨q cÖ¯ÍveKvixi gšÍe¨ I ¯^vÿi t', 130.991, 248, null, null, "left");
    doc.text('AwMÖg mgš^q Ki‡Yi ZvwiLt', 13, 248, null, null, "left");

    // ok
    doc.text('¯^vÿi', 105, 271.729, null, null, "center");
    doc.text('wbe©vnx cwiPvjK', 13, 277.729, null, null, "left");
    doc.text('wnmve Kg©KZ©v', 105, 277.729, null, null, "center");
    doc.text('µq m¤úv`K', 200, 277.729, null, null, "right");

}

export const BayprostabPage3 = ({ doc }) => {
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(20);
    doc.text('wmGgBGm', 105, 20.583, null, null, "center");
    doc.setFontSize(16);
    doc.text('m¤ú~Y© Kg© e¨q cwiKíbv', 105, 27.357, null, null, "center");
    doc.text('cÖ‡R±:', 160, 27.357, null, null, "left");

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
    doc.line(13, 222.063 + 14, 200, 222.063 + 14) // horizontal line
    doc.line(13, 229.063 + 14, 200, 229.063 + 14) // horizontal line

    doc.line(13, 80.911, 13, 229.063 + 14) // vertical line
    doc.line(85, 80.911, 85, 229.063 + 14) // vertical line
    doc.line(108, 80.911, 108, 229.063 + 14) // vertical line
    doc.line(124, 80.911,124, 229.063 + 14) // vertical line
    doc.line(148, 80.911, 148, 229.063 + 14) // vertical line
    doc.line(200, 80.911, 200, 229.063 + 14) // vertical line
    

    doc.text('BDwbU', 97, 90.402, null, null, "center");
    doc.text('BDwbU', 116, 90.402, null, null, "center"); //
    doc.text('†gvU', 135, 90.402, null, null, "center");//
    doc.text('m¤¢ve¨ mieivn Drm', 173, 90.402, null, null, "center");//

    doc.text('AvB‡Ug', 57, 94.845, null, null, "center");
    doc.text('g~j¨', 97, 94.845, null, null, "center");
    doc.text('msL¨v', 116, 94.845, null, null, "center"); //
    doc.text('g~j¨', 135, 94.845, null, null, "center"); //
    doc.text('I g~j¨ Abygv‡bi wfwË‡Z', 173, 94.845, null, null, "center"); //


    doc.text('†gvU', 42.544, 241, null, null, "center");
    doc.text('AvbygvwbK †gvU cÖv°wjZ e¨q ev †gvU g~j¨t', 13, 229.063 + 20, null, null, "left");
    doc.text('wnmve Kg©KZ©vi ev‡RU', 130.991, 239.429 + 16, null, null, "left");
    doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429 + 21, null, null, "left");



    doc.text('¯^vÿi', 105, 271.729 + 10, null, null, "center");
    doc.text('†Pqvig¨vb', 13, 277.729 + 10, null, null, "left");
    doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729 + 10, null, null, "center");
    doc.text('g~L¨ cwiKíbvKvix', 200, 277.729 + 10, null, null, "right");
}

export const Go = ({ doc }) => {

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
    doc.text("ZvwiLt  ", 160, 42, null, null, "left");



    doc.line(13, 47, 200, 47) // horizontal line
    doc.line(13, 62, 200, 62) // horizontal line

    doc.line(13, 180, 200, 180) // horizontal line
    doc.line(13, 190, 200, 190) // horizontal line

    doc.line(13, 47, 13, 190) // vertical line
    doc.line(25, 47, 25, 190) // vertical line
    doc.line(105, 47, 105, 190) // vertical line
    doc.line(133, 47, 133, 190) // vertical line
    doc.line(164, 47, 164, 190) // vertical line
    doc.line(200, 47, 200, 190) // vertical line


    doc.setFont("SutonnyMJ", "bold");
    doc.text('µg.', 15, 54, null, null, "left");
    doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 54, null, null, "center");
    doc.text('UvKvi cwigvb', 120, 54, null, null, "center");
    doc.text('Li‡Pi LvZ', 148, 54, null, null, "center");
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

}

export const Bearer = ({ doc }) => {

    // doc.setFont("SutonnyMJ", "normal");
    // doc.setFontSize(20);

    doc.setFont("times", "normal");
    doc.setFontSize(16);


    doc.text('Centre for Mass Education in Science (CMES)', 105, 18, null, null, "center");
    doc.setFontSize(10);
    doc.text('House-5/4, Block-F, Lalmatia, Dhaka-1207', 105, 22.5, null, null, "center");
    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text('Request for Bearer Cheque', 105, 29, null, null, "center");

    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text('Project: ...............', 105, 36, null, null, "center");
    doc.text('Date: .........................', 200, 45, null, null, "right");

    doc.text("To", 13, 45, null, null, "left");
    doc.text("The Chairman", 13, 49.5, null, null, "left");
    doc.text("CMES", 13, 54, null, null, "left");
    doc.setFont("times", "bold");
    doc.text("Subject: Request for the approval of Bearer Cheque", 13, 64, null, null, "left");
    doc.setFont("times", "normal");
    doc.text("Dear Sir,", 13, 74, null, null, "left");

    doc.text("We would like to request you to give an approval for issuing a Bearer Cheque in the name", 13, 78, { charSpace: '0.275' });
    doc.text("of Mr./Ms...................................................................... nominated by Executive Director", 13, 85, { charSpace: '0.275' });
    doc.text("The reason for this request is given below:", 13, 92, { charSpace: '0.275' });
    doc.text("Excepted date of Settlement:", 13, 99, null, null, "left");



    doc.line(13, 105, 200, 105) // horizontal line
    doc.line(13, 112, 200, 112) // horizontal line

    doc.line(13, 208, 200, 208) // horizontal line
    doc.line(13, 215, 200, 215) // horizontal line

    doc.line(13, 105, 13, 215) // vertical line
    doc.line(25, 105, 25, 215) // vertical line
    doc.line(140, 105, 140, 215) // vertical line
    doc.line(169, 105, 169, 215) // vertical line
    doc.line(200, 105, 200, 215) // vertical line   


    doc.text('SL', 18, 110.5, null, null, "center");
    doc.text('Reasons for Bearer Cheque', 84, 110.5, null, null, "center");
    doc.text('Taka', 155, 110.5, null, null, "center");
    doc.text('Budget Head', 183, 110.5, null, null, "center");

    doc.text('Total', 33, 213, null, null, "left");
    doc.text('Inword: ', 13, 221, null, null, "left");

    doc.text('Chairman', 13, 280, null, null, "left");
    doc.text('Executive Director', 105, 280, null, null, "center");
    doc.text('Date: ', 155, 280, null, null, "left");
    doc.text('Signature: ', 155, 273, null, null, "left");
    doc.text('Name: ', 155, 266, null, null, "left");
    doc.text('Requester: ', 155, 259, null, null, "left");

}

export const initialData = [
    {
        "id": 1663496139597,
        "detail": "mv‡m",
        "rate": "10.30",
        "qty": "5",
        "bhead": "Miscellaneous"
    },
    {
        "id": 1663496163436,
        "detail": "mv‡m",
        "rate": "50",
        "qty": "2",
        "bhead": "Postage"
    },
    {
        "id": 1663496170580,
        "detail": "mv‡m",
        "rate": "3",
        "qty": "20",
        "bhead": "Miscellaneous"
    },
    {
        "id": 1663496178236,
        "detail": "mv‡m",
        "rate": "20",
        "qty": "2",
        "bhead": "Tax"
    },
    {
        "id": 1663496184212,
        "detail": "mv‡m",
        "rate": "15.25",
        "qty": "25",
        "bhead": "Tax"
    },
    {
        "id": 1663496192404,
        "detail": "mv‡m",
        "rate": "30.14",
        "qty": "17",
        "bhead": "Other Operation Cost"
    },
    {
        "id": 1663496201948,
        "detail": "mv‡m",
        "rate": "8300",
        "qty": "200",
        "bhead": "Transport and TA_DA"
    },
    {
        "id": 1663496210364,
        "detail": "mv‡m",
        "rate": "20",
        "qty": "3",
        "bhead": "Tax"
    },
];

export const bHead = [
    {
        id: 1665245865909,
        bhead: "Rent",
    },
    {
        id: 1663499725936,
        bhead: "Tax And Insurance",
    },
    {
        id: 1663499994290,
        bhead: "Transport",
    },
    {
        id: 1663500003545,
        bhead: "Other Operation",
    },
    {
        id: 1663500011545,
        bhead: "Legel",
    },
    {
        id: 1663500019721,
        bhead: "Postage",
    },
    {
        id: 1663500028889,
        bhead: "Miscellaneous",
    },
    {
        id: 1663646958959,
        bhead: "Utilities",
    },
    {
        id: 1663649127969,
        bhead: "Maintenance",
    }
];


export const Project = [
    {
        id: 1663499725936,
        project: "CORE"
    },
    {
        id: 1663499994290,
        project: "IDCOL"
    },
    {
        id: 1663500003545,
        project: "MC"
    },
    {
        id: 1663500011545,
        project: "COL"
    },
    {
        id: 1663500019721,
        project: "UNICEF"
    }
];


export const bayprostabGetAll = ({ datas }) => {
    let result = [];
    for (let i = 0; i < bHead.length; i++) {
        const getOne = datas.filter((t) => t.bhead === bHead[i].bhead);
        if (getOne.length > 0) {
            result.push({
                "id": Date.now(),
                "detail": bHead[i].bhead,
                "rate": "0",
                "qty": "0",
                "total": "0"
            });
            for (let j = 0; j < getOne.length; j++) {
                result.push({
                    "id": Date.now(),
                    "detail": getOne[j].detail,
                    "rate": parseFloat(getOne[j].rate).toFixed(2),
                    "qty": getOne[j].qty,
                    "total": (parseFloat(getOne[j].rate) * parseFloat(getOne[j].qty)).toFixed(2)
                });
            }
        }
    }
    return result;
}



