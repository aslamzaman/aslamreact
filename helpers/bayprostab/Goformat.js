import { asLib } from "../../util/asLib";



export const Goformat = ({doc},m, y) => {

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
    doc.text('ZvwiLt  ' + asLib.util.dateFormat(new Date(),"."), 160, 42, null, null, "left");
   


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

    doc.text('ms¯’cb', 170, 70, null, null, "left");
    
    
    doc.text(`- ${m} ${y} evwo fvov`,30, 77, null, null, "left");  
    doc.text("64,000/-",130, 77, null, null, "right"); 

    doc.text("- M¨vm wej",30, 84, null, null, "left");  
    doc.text("1,080/-",130, 84, null, null, "right"); 

    doc.text("--f¨vU (†Rbv‡ij Acv‡ikb)",30, 91, null, null, "left");  
    doc.text("-- f¨vU 15%",60, 98, null, null, "left");  
    doc.text("4,500/-",130, 98, null, null, "right"); 


    doc.setFont("times", "normal");
    doc.text('Rent', 145, 70, null, null, "center");
    
    doc.setFont("SutonnyMJ", "bold");
    doc.text('†gvU:', 30, 187, null, null, "left");
    doc.text('69,580/-', 130, 187, null, null, "right");
    doc.setFont("SutonnyMJ", "normal");
    doc.text('†gvU UvKv (K_vq) : DbmËi nvRvi cuvPkZ Avwk UvKv gvÎ', 16, 196, null, null, "left");


    doc.setFont("SutonnyMJ", "bold");
    doc.text('wmGm KwgwUi mycvwik:', 16, 220, null, null, "left");
    doc.setFont("SutonnyMJ", "normal");
    doc.text('Rbve †gv. Igi dviæK nvq`vi - - - - - - - - - - - - - - - - - - - - - - - ', 16, 228, null, null, "left");
    doc.text('  ""  Ac~e© ivq - - - - - -  - - - - - - - - - - - - - - - - - - - -- - - - - ', 16, 238, null, null, "left");

    doc.text('†Pqvig¨vb', 16, 280, null, null, "left");

}