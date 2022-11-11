import { asLib} from "../../util/asLib";


export const Page1 = ({doc},m, y) => {

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

  doc.text('ZvwiLt  ' + asLib.util.dateFormat(new Date(), "."), 133, 40.600, null, null, "left");
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
  doc.text('-- 30,000    15%', 15, 124, null, null, "left");

  doc.line(35, 121.5, 37, 123.5); // Multiply
  doc.line(37, 121.5, 35, 123.5); // Multiply

  doc.text('32,000/-', 90, 106, null, null, "right");
  doc.text('1,080/-', 90, 112, null, null, "right");
  doc.text('4,500/-', 90, 124, null, null, "right");

  doc.text('2', 103, 106, null, null, "right");
  doc.text('1', 103, 112, null, null, "right");
  doc.text('1', 103, 124, null, null, "right");

  doc.text('64,000/-', 132, 106, null, null, "right");
  doc.text('1,080/-', 132, 112, null, null, "right");
  doc.text('4,500/-', 132, 124, null, null, "right");

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
  doc.text("bv‡g 4,500/- †eqvivi †PK", 174.347, 185, null, null, "center");  
  doc.text("n‡e|", 174.347,190, null, null, "center");  
  
  
  


  doc.setFont("SutonnyMJ", "bold");
  doc.text('†gvU', 42.071, 219.228, null, null, "center");
  doc.text('69,580/-', 132, 219.228, null, null, "right");
  doc.setFont("SutonnyMJ", "normal");


  doc.text('†gvU cÖv°wjZ e¨q (K_vq)t  DbmËi nvRvi cuvPkZ Avwk UvKv gvÎ', 13, 226.144, null, null, "left");
  doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
  doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
  doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

  doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
  doc.text('¯^vÿi', 105, 276.728, null, null, "center");
  doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");
 
}