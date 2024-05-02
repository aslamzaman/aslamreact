export const Lib = {
    construction: {
        price: {
            brick: 12.0,
            cement: 550.0,
            sand: 25.0,
            khoa: 115.0,
            rod: 100.0,
            paint: 1500.0,
            tiles: 80.0,
            flatbar: 105.0,
            anglebar: 105.0,
            mason: 550.0,
            labour: 400.0
        }
    },
    landArea: {
        convertToSft(opt, value) {

            switch (opt) {
                case "sf":
                    return (parseFloat(value) * 1);
                    break;
                case "sm":
                    return (parseFloat(value) * 10.7639);
                    break;
                case "sc":
                    return (parseFloat(value) * 4356);
                    break;
                case "ojutangsho":
                    return (parseFloat(value) * 4.356);
                    break;
                case "shotok":
                    return (parseFloat(value) * 435.6);
                    break;
                case "katha":
                    return (parseFloat(value) * 720);
                    break;
                case "bigha":
                    return (parseFloat(value) * 14400);
                    break;
                case "kani":
                    return (parseFloat(value) * 17280);
                    break;
                case "acre":
                    return (parseFloat(value) * 43560);
                    break;
                case "hectare":
                    return (parseFloat(value) * 107639);
                    break;
                case "gonda":
                    return (parseFloat(value) * 864);
                    break;
                case "kora":
                    return (parseFloat(value) * 653.4);
                    break;
                case "kranti":
                    return (parseFloat(value) * 72);
                    break;
                case "til":
                    return (parseFloat(value) * 3.6);
                    break;
                case "slink":
                    return (parseFloat(value) * 0.4356);
                    break;
                default:
                    console.log(`Sorry, we are out of ${expr}.`);
            }

        },
        get(opt, value) {
            let result = 0;
            let x = this.convertToSft(opt, value);
            switch (opt) {
                case "sf":
                    result = x;
                    break;
                case "sm":
                    result = (x / 10.7639);
                    break;
                case "sc":
                    result = (x / 4356);
                    break;
                case "ojutangsho":
                    result = (x / 4.356);
                    break;
                case "shotok":
                    result = (x / 435.6);
                    break;
                case "katha":
                    result = (x / 720);
                    break;
                case "bigha":
                    result = (x / 14400);
                    break;
                case "kani":
                    result = (x / 17280);
                    break;
                case "acre":
                    result = (x / 43560);
                    break;
                case "hectare":
                    result = (x / 107639);
                    break;
                case "gonda":
                    result = (x / 864);
                    break;
                case "kora":
                    result = (x / 653.4);
                    break;
                case "kranti":
                    result = (x / 72);
                    break;
                case "til":
                    result = (x / 3.6);
                    break;
                case "slink":
                    result = (x / 0.4356);
                    break;
                default:
                    result = 0;
            }
            return result;
        }
    },
    rajuk: {
        conv_sft(s1, s2, d, opt) {
            var sft = 0;
            if (opt == "0") {
                sft = (parseFloat(s1) + parseFloat(s2)) * 435.6;
            }
            if (opt == "1") {
                sft = (parseFloat(s1) + parseFloat(s2)) * 720;
            }
            if (opt == "2") {
                sft = (parseFloat(s1) + parseFloat(s2));
            }
            return sft;
        },
        get_mgc(s1, s2, d, opt) {
            let mgc = 0;
            let far = 0;
            let mgc_ratio = 0;

            let total_sft = this.conv_sft(s1, s2, d, opt);
            let katha = parseFloat(total_sft / 720);

            if ((katha >= 0.001) && (katha < 2)) {
                mgc = total_sft * 3.15;
                far = 3.15;
                mgc_ratio = 67.5;
            }
            else if ((katha >= 2) && (katha < 3)) {
                mgc = total_sft * 3.35;
                far = 3.35;
                mgc_ratio = 65.0;
            }
            else if ((katha >= 3) && (katha < 5)) {
                mgc = total_sft * 3.50;
                far = 3.50;
                mgc_ratio = 62.5;
            }
            else if ((katha >= 5) && (katha < 7)) {
                mgc = total_sft * 3.75;
                far = 3.75;
                mgc_ratio = 60.0;
            }
            else if ((katha >= 7) && (katha < 9)) {
                mgc = total_sft * 4.00;
                far = 4.00;
                mgc_ratio = 60.0;
            }
            else if ((katha >= 9) && (katha < 10)) {
                mgc = total_sft * 4.25;
                far = 4.25;
                mgc_ratio = 57.5;

            }
            else if ((katha >= 10) && (katha < 12)) {
                mgc = total_sft * 4.50;
                far = 4.50;
                mgc_ratio = 57.50;

            }
            else if ((katha >= 12) && (katha < 14)) {
                mgc = total_sft * 4.75;
                far = 4.75;
                mgc_ratio = 55.00;

            }
            else if ((katha >= 14) && (katha < 16)) {
                mgc = total_sft * 5.00;
                far = 5.00;
                mgc_ratio = 52.50;

            }
            else if ((katha >= 16) && (katha < 18)) {
                mgc = total_sft * 5.25;
                far = 5.25;
                mgc_ratio = 52.50;

            }
            else if ((katha >= 18) && (katha < 20)) {
                mgc = total_sft * 5.25;
                far = 5.25;
                mgc_ratio = 50.00;

            }
            else {
                mgc = total_sft * 5.50;
                far = 5.50;
                mgc_ratio = 50.00;

            };



            /** ---------------------------  */

            let x = {
                result_mgc: mgc,
                result_far: far,
                result_mgc_ratio: mgc_ratio
            };

            return x;
        },
        shareing(s1, s2, d, opt) {

            let w = parseFloat(this.get_mgc(s1, s2, d, opt).result_mgc);

            let ds = (parseFloat(w) * (parseFloat(d) / 100));
            let s1s = (((parseFloat(w) - parseFloat(ds)) / (parseFloat(s1) + parseFloat(s2))) * parseFloat(s1));
            let s2s = (((parseFloat(w) - parseFloat(ds)) / (parseFloat(s1) + parseFloat(s2))) * parseFloat(s2));
            let x = {
                developer_sft: ds,
                share1_sft: s1s,
                share2_sft: s2s
            };

            return x;
        }
    },
    util: {
        blankPictureBase64: {
            data: "data:image/jpeg;base64,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"
        },
        daysArray: [
            "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ],
        monthEnArr: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        monthBnArr: [
            "Rvbyqvix",
            "†deªæqvix",
            "gvP©",
            "GwcÖj",
            "†g",
            "Ryb",
            "RyjvB",
            "AvMó",
            "†m‡Þ¤^i",
            "A‡±vei",
            "b‡f¤^i",
            "wW‡m¤^i"
        ],
        monthsObj: [
            { bn: "Rvbyqvix", en: "January" },
            { bn: "†deªæqvix", en: "February" },
            { bn: "gvP©", en: "March" },
            { bn: "GwcÖj", en: "April" },
            { bn: "†g", en: "May" },
            { bn: "Ryb", en: "June" },
            { bn: "RyjvB", en: "July" },
            { bn: "AvMó", en: "August" },
            { bn: "†m‡Þ¤^i", en: "September" },
            { bn: "A‡±vei", en: "October" },
            { bn: "b‡f¤^i", en: "November" },
            { bn: "wW‡m¤^i", en: "December" }
        ],
        yearObj: [
            { yr: 2023 },
            { yr: 2024 },
            { yr: 2025 },
            { yr: 2026 },
            { yr: 2027 },
            { yr: 2028 },
            { yr: 2029 },
            { yr: 2030 },
            { yr: 2031 },
            { yr: 2032 },
            { yr: 2033 },
            { yr: 2034 },
            { yr: 2035 },
            { yr: 2036 },
            { yr: 2037 },
            { yr: 2038 },
            { yr: 2039 },
            { yr: 2040 }
        ],
        /**
         * 
         * @param {Date} dt 
         * @param {String} format 
         * @returns 
         */
        dateFormat(dt, format) {
            // *** date_format:("2010-06-25",".")      result= 25.06.2010
            var d = new Date(dt);
            if (format === "-") {
                return d.getFullYear() + "-" + this.daysArray[d.getMonth() + 1] + "-" + this.daysArray[d.getDate()];
            } else if (format === "long") {
                return this.monthEnArr[d.getMonth()] + " " + this.daysArray[d.getDate()] + ", " + d.getFullYear();
            } else {
                return this.daysArray[d.getDate()] + "." + this.daysArray[d.getMonth() + 1] + "." + d.getFullYear();
            }
        },
        dateTimeFormat(dt) {
            var d = new Date(dt);
            return d.getFullYear() + "-" + this.daysArray[d.getMonth() + 1] + "-" + this.daysArray[d.getDate()] + " | " + this.daysArray[d.getHours() + 1] + ":" + this.daysArray[d.getMinutes() + 1] + ":" + this.daysArray[d.getSeconds() + 1];
        },
        dateFormatBn(dt) {
            var d = new Date(dt);
            return this.daysArray[d.getDate()] + " " + this.monthBnArr[d.getMonth()] + ", " + d.getFullYear();
        },
        yearsMontshDays(d1, d2) {
            let a = new Date(d1).getTime();
            let b = new Date(d2).getTime();
            let days = (b - a) / 86400000; // days

            let y = Math.floor(days / 365); // yrs
            let yrsToDays = days % 365; // days

            let m = Math.floor(yrsToDays / 30); // months
            let d = yrsToDays % 30; // days

            let ret = y + "yrs. " + m + "months " + d + "days";
            return ret;
        },
        lastDayInMonth(yyyy, m) {
            // example (2021, 0) = 31 ; (2021, 1) = 28;
            let dt = new Date(yyyy, (parseInt(m) + 1), 0);
            return dt.getDate();
        },
        Age(dt) {
            let d1 = new Date(dt);
            let d2 = d1.getTime();
            let d3 = new Date();
            let d4 = d3.getTime();
            let d5 = (d4 - d2) / (1000 * 60 * 60 * 24 * 365);
            return d5.toFixed(2);
        },
        dateDiff(dt1, dt2, add_one_day) {
            let d1 = new Date(dt1);
            let d2 = d1.getTime();
            let d3 = new Date(dt2);
            let d4 = d3.getTime();
            let d5 = 0;
            if (add_one_day === 1) {
                d5 = ((d4 - d2) + (3600000 * 24)) / (3600000 * 24);
            } else {
                d5 = (d4 - d2) / (3600000 * 24);
            }
            return d5;
        },
        titleCase(str) {
            return str
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(" ");
        },
        dateAdd(dt, days) {
            let d1 = new Date(dt);
            let dt_to_time = d1.getTime();
            let days_to_time = days * 86400 * 1000;
            let total_time = parseInt(dt_to_time) + parseInt(days_to_time);
            let date_add = new Date(total_time);
            return date_add;
        },
        manulalDateDiff(d1, d2) {
            var d1 = new Date(d1);
            var d2 = new Date(d2);

            let dt1 = d1.getFullYear() + "-" + this.daysArray[d1.getMonth() + 1] + "-" + this.daysArray[d1.getDate()];
            let dt2 = d2.getFullYear() + "-" + this.daysArray[d2.getMonth() + 1] + "-" + this.daysArray[d2.getDate()];

            let sp1 = dt1.split("-");
            let sp2 = dt2.split("-");

            let extMonth = 0;
            let d = 0;
            let extYrs = 0;
            let m = 0;
            let y = 0;

            // Days 
            if (parseInt(sp2[2]) < parseInt(sp1[2])) {
                extMonth = 1;
                d = ((parseInt(sp2[2]) + 30) - parseInt(sp1[2]));
            } else {
                extMonth = 0;
                d = (parseInt(sp2[2]) - parseInt(sp1[2]));
            }

            // Months 
            if (parseInt(sp2[1]) < (parseInt(sp1[1]) + extMonth)) {
                extYrs = 1;
                m = ((parseInt(sp2[1]) + 12) - (parseInt(sp1[1]) + extMonth));
            } else {
                extYrs = 0;
                m = (parseInt(sp2[1]) - (parseInt(sp1[1]) + extMonth));
            }

            // Years 
            y = (parseInt(sp2[0]) - (parseInt(sp1[0]) + extYrs));

            let result = y + " years " + m + " months " + d + " days";
            return result;
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        uniqueArr(x) {
            let unique = x.filter((item, index) => {
                return x.indexOf(item) === index;
            })
            return unique;
        },
        sort: {
            arr(data, n) {
                return `${n === 1 ? data.sort() : data.sort().reverse()}`;
            },
            obj: {
                val(data, n) {
                    return data.sort((a, b) => `${n === 1 ? (a.value - b.value) : (b.value - a.value)}`);
                }
            }
        },
        inword: {
            en(num) {
                let a = [
                    "",
                    "one ",
                    "two ",
                    "three ",
                    "four ",
                    "five ",
                    "six ",
                    "seven ",
                    "eight ",
                    "nine ",
                    "ten ",
                    "eleven ",
                    "twelve ",
                    "thirteen ",
                    "fourteen ",
                    "fifteen ",
                    "sixteen ",
                    "seventeen ",
                    "eighteen ",
                    "nineteen ",
                ];
                let b = [
                    "",
                    "",
                    "twenty",
                    "thirty",
                    "forty",
                    "fifty",
                    "sixty",
                    "seventy",
                    "eighty",
                    "ninety",
                ];

                if ((num = num.toString()).length > 9) return "overflow";
                let n = ("000000000" + num)
                    .substr(-9)
                    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                if (!n) return;
                var str = "";
                str +=
                    n[1] != 0
                        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
                        : "";
                str +=
                    n[2] != 0
                        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
                        : "";
                str +=
                    n[3] != 0
                        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
                        : "";
                str +=
                    n[4] != 0
                        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
                        : "";
                str +=
                    n[5] != 0
                        ? (str != "" ? "and " : "") +
                        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]])
                        : "";
                return str;
            },
            bn(number) {
                let num_to_bd = [
                    'k~b¨',
                    'GK',
                    '`yB',
                    'wZb',
                    'Pvi',
                    'cvuP',
                    'Qq',
                    'mvZ',
                    'AvU',
                    'bq',
                    '`k',
                    'GMvi',
                    'evi',
                    '‡Zi',
                    '‡PŠÏ',
                    'c‡bi',
                    '‡lvj',
                    'm‡Zi',
                    'AvVvi',
                    'Ewbk',
                    'wek',
                    'GKyk',
                    'evBk',
                    '‡ZBk',
                    'PweŸk',
                    'cuwPk',
                    'QvweŸk',
                    'mvZvk',
                    'AvVvk',
                    'EbwÎk',
                    'wÎk',
                    'GKwÎk',
                    'ewÎk',
                    '‡ZwÎk',
                    '‡PŠwÎk',
                    'cuh়wÎk',
                    'QwÎk',
                    'mvuBwÎk',
                    'AvUwÎk',
                    'EbPwjøk',
                    'Pwjøk',
                    'GKPwjøk',
                    'weqvwjøk',
                    '‡ZZvwjøk',
                    'Pyqvwjøk',
                    'cuqZvwjøk',
                    '‡QPwjøk',
                    'mvZPwjøk',
                    'AvUPwjøk',
                    'EbcÂvk',
                    'cÂvk',
                    'GKvbœ',
                    'evqvbœ',
                    'wZàvbœ',
                    'Pyqvbœ',
                    'cÂvbœ',
                    'Qvàvbœ',
                    'mvZvbœ',
                    'AvUvbœ',
                    'EblvU',
                    'lvU',
                    'GKlwÆ',
                    'evlwÆ',
                    '‡ZlwÆ',
                    '‡PŠlwÆ',
                    'cuqlwÆ',
                    '‡QlwÆ',
                    'mvZlwÆ',
                    'AvUlwÆ',
                    'EbmËi',
                    'mËi',
                    'GKvËi',
                    'evnvËi',
                    'wZqvËi',
                    'PyqvËi',
                    'cuPvËi',
                    'wQqvËi',
                    'mvZvËi',
                    'AvUvËi',
                    'EbAvwk',
                    'Avwk',
                    'GKvwk',
                    'weivwk',
                    'wZivwk',
                    'Pyivwk',
                    'cuPvwk',
                    'wQqvwk',
                    'mvZvwk',
                    'AvUvwk',
                    'EbbeŸB',
                    'beŸB',
                    'GKvbeŸB',
                    'weivbeŸB',
                    'wZivbeŸB',
                    'PyivbeŸB',
                    'cuPvbeŸB',
                    'wQqvbeŸB',
                    'mvZvbeŸB',
                    'AvUvbeŸB',
                    'wbivbeŸB'
                ];

                let num = parseInt(number);
                //00,00,20,000
                let n = "000000000000" + num.toString();
                let n1 = n.substring((n.length - 9), n.length);
                let n2 = n1.toString();
                let n3 = n2.split("");

                let c1 = parseInt(n3[0] + n3[1]);
                let c2 = parseInt(n3[2] + n3[3]);
                let c3 = parseInt(n3[4] + n3[5]);
                let c4 = parseInt(n3[6]);
                let c5 = parseInt(n3[7] + n3[8]);

                let st1 = "";
                let st2 = "";
                let st3 = "";
                let st4 = "";
                let st5 = "";

                if (c1 === 0) {
                    st1 = "";
                } else {
                    st1 = num_to_bd[c1] + " †KvwU ";
                }

                if (c2 === 0) {
                    st2 = "";
                } else {
                    st2 = num_to_bd[c2] + " j¶ ";
                }

                if (c3 === 0) {
                    st3 = "";
                } else {
                    st3 = num_to_bd[c3] + " nvRvi ";
                }


                if (c4 === 0) {
                    st4 = "";
                } else {
                    st4 = num_to_bd[c4] + " kZ ";
                }

                if (c5 === 0) {
                    st5 = "";
                } else {
                    st5 = num_to_bd[c5];
                }

                if (number.length > 9) {
                    return "Amxg";
                } else {
                    return st1 + st2 + st3 + st4 + st5;
                }
            }
        },
        landarea: {
            sft(area, opt) {
                let sft = 0;
                let expr = opt;
                switch (expr) {
                    case "sf":
                        return (parseFloat(area) * 1);
                        break;
                    case "sm":
                        return (parseFloat(area) * 10.7639);
                        break;
                    case "sc":
                        return (parseFloat(area) * 4356);
                        break;
                    case "ojutangsho":
                        return (parseFloat(area) * 4.356);
                        break;
                    case "shotok":
                        return (parseFloat(area) * 435.6);
                        break;
                    case "katha":
                        return (parseFloat(area) * 720);
                        break;
                    case "bigha":
                        return (parseFloat(area) * 14400);
                        break;
                    case "kani":
                        return (parseFloat(area) * 17280);
                        break;
                    case "acre":
                        return (parseFloat(area) * 43560);
                        break;
                    case "hectare":
                        return (parseFloat(area) * 107639);
                        break;
                    case "gonda":
                        return (parseFloat(area) * 864);
                        break;
                    case "kora":
                        return (parseFloat(area) * 653.4);
                        break;
                    case "kranti":
                        return (parseFloat(area) * 72);
                        break;
                    case "til":
                        return (parseFloat(area) * 3.6);
                        break;
                    case "slink":
                        return (parseFloat(area) * 0.4356);
                        break;
                    default:
                        console.log(`Sorry, we are out of ${expr}.`);
                }
                return sft;
            },
            result(area, opt) {
                let x = this.sft(area, opt);
                let obj = {
                    sft: x.toFixed(3),
                    sm: (x / 10.7639).toFixed(3),
                    sc: (x / 4356).toFixed(3),
                    ojutangsho: (x / 4.356).toFixed(3),
                    shotok: (x / 435.6).toFixed(3),
                    katha: (x / 720).toFixed(3),
                    bigha: (x / 14400).toFixed(3),
                    kani: (x / 17280).toFixed(3),
                    acre: (x / 43560).toFixed(3),
                    hectare: (x / 107639).toFixed(3),
                    gonda: (x / 864).toFixed(3),
                    kora: (x / 653.4).toFixed(3),
                    kranti: (x / 72).toFixed(3),
                    til: (x / 3.6).toFixed(3),
                    link: (x / 0.4356).toFixed(3)
                }
                return obj
            }
        }
    },
    cmes: {
        format: {
            leave({ doc }) {
                doc.addImage("/images/cmes_logo/cmes.png", "PNG", 20, 10, 10, 15);
                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(24);

                doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 105, 20, null, null, "center");
                doc.text("QywUi dig", 105, 30, null, null, "center");
                doc.setFontSize(14);
                doc.text("ZvwiL: ..........................", (210 - 12), 40, null, null, "right");
                doc.text("bvg: .................................................. c`ex:................................................. cÖ‡R±:.....................", 20, 50, null, null, "left");
                doc.text("QywUi KviY/weeiY: .......................................................................................................................", (20), 60, null, null, "left");
                doc.text("cÖv_©xZ QzwUi mgqKvj: ........................ ZvwiL †_‡K ....................... ZvwiL ch©šÍ ........... w`b........... N›Uv", 20, 70, null, null, "left");

                doc.text("eivei", (20), 85, null, null, "left");
                doc.text("wbe©vnx cwiPvjK", 20, 92, null, null, "left");
                doc.text("wmGgBGm, XvKv", 20, 99, null, null, "left");
                doc.text("wcÖq g‡nv`q,", 20, 113, null, null, "left");


                doc.text("webxZ wb‡e`K                    ", 198, 200, null, null, "right");
                doc.text("¯^v¶i:                             ", 198, 210, null, null, "right");  // sakhkhor


                doc.text("PjwZ eQ‡i †fvMK…Z QzwUi cÖK…wZ:", 20, 223, null, null, "left");
                doc.text("QywUi Z_¨:                         ", 198, 223, null, null, "right");

                doc.line(20, 219, 198, 219) // horizontal line

                doc.text("‰bwgwËK QzwU (    )= ........ w`b", 20, 230, null, null, "left");
                doc.text("1g, 2q, 3q I 4_© †KvqvU©v‡i cÖvc¨ QywU =........w`b             ", 198, 230, null, null, "right");


                doc.text("AwR©Z QzwU (    )=  .......... w`b", 20, 237, null, null, "left");
                doc.text("BwZc~‡e© †fvMK…Z QzwU =........w`b             ", 198, 237, null, null, "right");

                doc.setFont('courier', 'normal');
                doc.text("CL", 42, 230, null, null, "left");
                doc.text("EL", 39, 237, null, null, "left");

                doc.setFont("SutonnyMJ", "normal");
                doc.text("Av‡e`bK…Z QzwU = ............ w`b......... N›Uv", 20, 244, null, null, "left");
                doc.text("Av‡e`bK…Z QzwU = ........w`b....... N›Uv", 198, 244, null, null, "right");
                doc.line(20, 245, 93, 245) // horizontal line
                doc.line(125, 245, 198, 245) // horizontal line

                doc.text("†gvU QywU = ..................... w`b......... N›Uv", 20, 252, null, null, "left");
                doc.text("Aewkó/AwZwi³ QywU =.........w`b....... N›Uv", 198, 252, null, null, "right");


                doc.text("Aby‡gv`bKvixi ¯^v¶i: ", 20, 277, null, null, "left");
                doc.text("¯^v¶i:                          ", 198, 277, null, null, "right");

                doc.text("wbe©vnx cwiPvjK", 20, 284, null, null, "left");
                doc.text("cÖkvmb DBs.....................", 198, 284, null, null, "right");
            },
            localTaUp({ doc }) {
                let tm = 18;
                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(20);

                doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 105, tm, null, null, "center");
                doc.text("¯’vbxq ågY fvZv wej", 105, tm + 7, null, null, "center");

                doc.setFontSize(14);
                doc.text("ågYKvixi bvg I c`ex t....................................................................", 12, tm + 19, null, null, "left");
                doc.text("ZvwiL t................................", 199, tm + 18, null, null, "right");
                doc.text("åg‡Yi D‡Ïk¨ t...............................................................................", 12, tm + 27, null, null, "left");
                doc.text("Ae¯’vb t...............................", 199, tm + 27, null, null, "right");

                doc.line(12, tm + 31, 199, tm + 31); // horizontal line
                doc.line(12, tm + 37, 199, tm + 37); // horizontal line
                doc.line(12, tm + 43, 199, tm + 43); // horizontal line
                doc.line(12, tm + 91, 199, tm + 91); // horizontal line
                doc.line(12, tm + 97, 199, tm + 97); // horizontal line

                doc.line(12, tm + 31, 12, tm + 97); // vertical line
                doc.line(42, tm + 37, 42, tm + 91); // vertical line
                doc.line(55, tm + 31, 55, tm + 91); // vertical line
                doc.line(84, tm + 37, 84, tm + 91); // vertical line
                doc.line(99, tm + 31, 99, tm + 91); // vertical line
                doc.line(114, tm + 37, 114, tm + 91); // vertical line
                doc.line(144, tm + 37, 144, tm + 91); // vertical line
                doc.line(157, tm + 37, 157, tm + 97); // vertical line
                doc.line(176, tm + 31, 176, tm + 97); // vertical line
                doc.line(199, tm + 31, 199, tm + 97); // vertical line

                //-------------------------------------
                doc.line(0, 148.5, 5, 148.5);
                doc.line(102.5, 148.5, 107.5, 148.5);
                doc.line(205, 148.5, 210, 148.5);
                //-------------------------------------

                doc.text("cÖ¯’vb", 32, tm + 35.5, null, null, "center"); // prosthan
                doc.text("Dcw¯’Z", 78, tm + 35.5, null, null, "center");  // uposthit
                doc.text("hvbevnb I fvZv (UvKv)", 137, tm + 35.5, null, null, "center");  // janbahon o vata taka
                doc.text("†gvU UvKv", 188, tm + 35.5, null, null, "center");  // mote taka

                doc.text("¯’vb", 27, tm + 41.5, null, null, "center"); // sthan
                doc.text("mgq", 48, tm + 41.5, null, null, "center"); // somoy
                doc.text("¯’vb", 69, tm + 41.5, null, null, "center"); // sthan
                doc.text("mgq", 92, tm + 41.5, null, null, "center"); // somoy
                doc.text("evm", 107, tm + 41.5, null, null, "center"); // bas
                doc.text("wmGbwR", 130, tm + 41.5, null, null, "center"); // cng 
                doc.text("wi·v", 151.5, tm + 41.5, null, null, "center"); // autorikshaw 
                doc.text("Ab¨vb¨", 167, tm + 41.5, null, null, "center"); // onnaono

                doc.text("UvKv (K_vq)t", 24, tm + 95.5, null, null, "center"); //  taka kothay
                doc.text("†gvU UvKv", 166, tm + 95.5, null, null, "center"); // mote taka

                doc.text("ågYKvixi ¯^vÿi", 12, tm + 116.5, null, null, "left"); // vromonkarir sakkhor
                doc.text("cÖwZ ¯^vÿi", 78, tm + 116.5, null, null, "center"); // proti sakkhor
                doc.text("wefvMxq cÖavb/mwPe", 135, tm + 116.5, null, null, "center"); // bivagio prodhan/ sochib
                doc.text("wnmve wefvM", 199, tm + 116.5, null, null, "right"); // hisab bivag

                doc.line(12, tm + 111.5, 38, tm + 111.5); // horizontal line 
                doc.line(68, tm + 111.5, 88, tm + 111.5); // horizontal line   
                doc.line(119, tm + 111.5, 150.5, tm + 111.5); // horizontal line  
                doc.line(179, tm + 111.5, 199, tm + 111.5); // horizontal line  
            },
            localTaDn({ doc }) {
                let tm = 18;

                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(20);

                doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 105, tm + 148, null, null, "center");
                doc.text("¯’vbxq ågY fvZv wej", 105, tm + 7 + 148, null, null, "center");

                doc.setFontSize(14);
                doc.text("ågYKvixi bvg I c`ex t....................................................................", 12, tm + 19 + 148, null, null, "left");
                doc.text("ZvwiL t................................", 199, tm + 18 + 148, null, null, "right");
                doc.text("åg‡Yi D‡Ïk¨ t...............................................................................", 12, tm + 27 + 148, null, null, "left");
                doc.text("Ae¯’vb t...............................", 199, tm + 27 + 148, null, null, "right");

                doc.line(12, tm + 31 + 148, 199, tm + 31 + 148); // horizontal line
                doc.line(12, tm + 37 + 148, 199, tm + 37 + 148); // horizontal line
                doc.line(12, tm + 43 + 148, 199, tm + 43 + 148); // horizontal line
                doc.line(12, tm + 91 + 148, 199, tm + 91 + 148); // horizontal line
                doc.line(12, tm + 97 + 148, 199, tm + 97 + 148); // horizontal line

                doc.line(12, tm + 31 + 148, 12, tm + 97 + 148); // vertical line    
                doc.line(42, tm + 37 + 148, 42, tm + 91 + 148); // vertical line
                doc.line(55, tm + 31 + 148, 55, tm + 91 + 148); // vertical line
                doc.line(84, tm + 37 + 148, 84, tm + 91 + 148); // vertical line
                doc.line(99, tm + 31 + 148, 99, tm + 91 + 148); // vertical line
                doc.line(114, tm + 37 + 148, 114, tm + 91 + 148); // vertical line
                doc.line(144, tm + 37 + 148, 144, tm + 91 + 148); // vertical line
                doc.line(157, tm + 37 + 148, 157, tm + 97 + 148); // vertical line
                doc.line(176, tm + 31 + 148, 176, tm + 97 + 148); // vertical line
                doc.line(199, tm + 31 + 148, 199, tm + 97 + 148); // vertical line

                doc.text("cÖ¯’vb", 32, tm + 35.5 + 148, null, null, "center"); // prosthan
                doc.text("Dcw¯’Z", 78, tm + 35.5 + 148, null, null, "center");  // uposthit
                doc.text("hvbevnb I fvZv (UvKv)", 137, tm + 35.5 + 148, null, null, "center");  // janbahon o vata taka
                doc.text("†gvU UvKv", 188, tm + 35.5 + 148, null, null, "center");  // mote taka

                doc.text("¯’vb", 27, tm + 41.5 + 148, null, null, "center"); // sthan
                doc.text("mgq", 48, tm + 41.5 + 148, null, null, "center"); // somoy
                doc.text("¯’vb", 69, tm + 41.5 + 148, null, null, "center"); // sthan
                doc.text("mgq", 92, tm + 41.5 + 148, null, null, "center"); // somoy
                doc.text("evm", 107, tm + 41.5 + 148, null, null, "center"); // bas
                doc.text("wmGbwR", 130, tm + 41.5 + 148, null, null, "center"); // cng 
                doc.text("wi·v", 151.5, tm + 41.5 + 148, null, null, "center"); // autorikshaw 
                doc.text("Ab¨vb¨", 167, tm + 41.5 + 148, null, null, "center"); // onnaono

                doc.text("UvKv (K_vq)t", 24, tm + 95.5 + 148, null, null, "center"); //  taka kothay
                doc.text("†gvU UvKv", 166, tm + 95.5 + 148, null, null, "center"); // mote taka

                doc.text("ågYKvixi ¯^vÿi", 12, tm + 116.5 + 148, null, null, "left"); // vromonkarir sakkhor
                doc.text("cÖwZ ¯^vÿi", 78, tm + 116.5 + 148, null, null, "center"); // proti sakkhor
                doc.text("wefvMxq cÖavb/mwPe", 135, tm + 116.5 + 148, null, null, "center"); // bivagio prodhan/ sochib
                doc.text("wnmve wefvM", 199, tm + 116.5 + 148, null, null, "right"); // hisab bivag

                doc.line(12, tm + 111.5 + 148, 38, tm + 111.5 + 148); // horizontal line 
                doc.line(68, tm + 111.5 + 148, 88, tm + 111.5 + 148); // horizontal line   
                doc.line(119, tm + 111.5 + 148, 150.5, tm + 111.5 + 148); // horizontal line  
                doc.line(179, tm + 111.5 + 148, 199, tm + 111.5 + 148); // horizontal line

            },
            localtaDbl({ doc }) {
                this.localTaUp({ doc });
                this.localTaDn({ doc });
            },
            taBill({ doc }) {
                let tm = 25;
                //doc.addImage("/images/format/TA BILL.png", "PNG", 0, 0, 210, 297);

                doc.addImage("/images/cmes_logo/cmes.png", "PNG", 25, 15, 10, 15);

                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(26.5);

                doc.text("†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)", 112, tm, null, null, "center");
                doc.setFontSize(16);
                doc.text("evwo bs- 5/4, eøK - Gd, jvjgvwUqv, XvKv- 1207", 112, tm + 8, null, null, "center");
                doc.setFontSize(26.5);
                doc.text("hvZvqvZ wej", 105, tm + 28, null, null, "center");

                doc.setFontSize(14);
                doc.text("ågYKvixi bvg t......................................................................", 12, tm + 45, null, null, "left");
                doc.text("c`ex t................................", 199, tm + 45, null, null, "right");
                doc.text("Ae¯’vbt mv‡m/BDwbU t..............................................................", 12, tm + 53, null, null, "left");
                doc.text("cÖKí t................................", 199, tm + 53, null, null, "right");

                doc.line(12, tm + 62.5, 202, tm + 62.5); // horizontal line
                doc.line(12, tm + 69.5, 202, tm + 69.5); // horizontal line
                doc.line(12, tm + 198, 202, tm + 198); // horizontal line
                doc.line(12, tm + 205, 202, tm + 205); // horizontal line
                doc.line(12, tm + 212, 202, tm + 212); // horizontal line

                doc.line(12, tm + 62.5, 12, tm + 212); // vertical line
                doc.line(25, tm + 62.5, 25, tm + 205); // vertical line
                doc.line(45, tm + 62.5, 45, tm + 198); // vertical line
                doc.line(57, tm + 62.5, 57, tm + 198); // vertical line
                doc.line(77, tm + 62.5, 77, tm + 198); // vertical line
                doc.line(90, tm + 62.5, 90, tm + 198); // vertical line
                doc.line(150, tm + 62.5, 150, tm + 198); // vertical line
                doc.line(163, tm + 62.5, 163, tm + 198); // vertical line
                doc.line(183, tm + 62.5, 183, tm + 198); // vertical line
                doc.line(202, tm + 62.5, 202, tm + 212); // vertical line

                doc.text("ZvwiL", 18, tm + 68, null, null, "center");
                doc.text("†Kv_v n‡Z", 34, tm + 68, null, null, "center");
                doc.text("mgq", 51, tm + 68, null, null, "center");
                doc.text("†Kvb ch©šÍ", 66.5, tm + 68, null, null, "center");
                doc.text("mgq", 83, tm + 68, null, null, "center");
                doc.text("D‡Ïk¨", 116, tm + 68, null, null, "center");
                doc.text("evnb", 156, tm + 68, null, null, "center");
                doc.text("UvKv", 173, tm + 68, null, null, "center");
                doc.text("gšÍe¨", 194, tm + 68, null, null, "center");

                doc.text("wW.G.c~Y©w`b/ Aa©w`b t", 44, tm + 203, null, null, "center");
                doc.text("†gvU UvKv (K_vq) t", 30, tm + 210, null, null, "center");

                doc.text("wnmve wefvM", 12, tm + 240, null, null, "left");
                doc.text("ågYKvixi ¯^vÿi t   ", 199, tm + 240, null, null, "right");
                doc.text("ZvwiL t................", 199, tm + 247, null, null, "right");
            },
            bayprostab({ doc }) {
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
                doc.line(13, (lnt + 140 + (lng * 6)), 200, (lnt + 140 + (lng * 6))) // horizontal line
                doc.line(13, (lnt + 147 + (lng * 6)), 200, (lnt + 147 + (lng * 6))) // horizontal line


                doc.line(69.681, (lnt + 2 + (lng * 6)), 69.681, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(13, (lnt + 2 + (lng * 6)), 13, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(92.099, (lnt + 2 + (lng * 6)), 92.099, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(111.661, (lnt + 2 + (lng * 6)), 111.661, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(133.222, (lnt + 2 + (lng * 6)), 133.222, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(149.499, (lnt + 2 + (lng * 6)), 149.499, (lnt + 147 + (lng * 6))) // vertical line
                doc.line(200, (lnt + 2 + (lng * 6)), 200, (lnt + 147 + (lng * 6))) // vertical line


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

                doc.text('†gvU', 42.071, 218, null, null, "center");
                doc.text('†gvU cÖv°wjZ e¨q (K_vq)t', 13, 226.144, null, null, "left");

                doc.text('g‡bvbxZ µq m¤úv`‡Ki bvg t', 110.930, 237.957, null, null, "left");
                doc.text('mnvqZvKvix t', 110.930, 244.217, null, null, "left");
                doc.text('cÖ¯ÍveKvix t', 110.930, 250.073, null, null, "left");

                doc.text('†Pqvig¨vb', 13.930, 280.767, null, null, "left");
                doc.text('¯^vÿi', 105, 276.728, null, null, "center");
                doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 280.767, null, null, "center");


                //************************************************************************** */
                doc.addPage("a4", "p");

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


                /***************************************************************************** */
                doc.addPage("a4", "p");

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

                doc.text('gšÍe¨ I ¯^vÿi', 130.991, 239.429, null, null, "left");
                doc.text('UvKv (K_vq)t', 13, 239.429, null, null, "left");



                doc.text('¯^vÿi', 105, 271.729, null, null, "center");
                doc.text('†Pqvig¨vb', 13, 277.729, null, null, "left");
                doc.text('KwgwU m`m¨MY/mgš^qKvix', 105, 277.729, null, null, "center");
                doc.text('g~L¨ cwiKíbvKvix', 200, 277.729, null, null, "right");
            },
            bayexecution({ doc }) {
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
            },
            go({ doc }) {
                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(20);
                doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20.583, null, null, "center");
                doc.setFontSize(16);
                doc.text('evwo bs- 5/4, eøK- Gd, jvjgvwUqv, XvKv  1207', 105, 27.357, null, null, "center");

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
                doc.line(98, 47, 98, 190) // vertical line
                doc.line(125, 47, 125, 190) // vertical line
                doc.line(165, 47, 165, 190) // vertical line
                doc.line(200, 47, 200, 190) // vertical line


                doc.setFont("SutonnyMJ", "bold");
                doc.text('µg.', 15, 54, null, null, "left");
                doc.text('cÖ¯ÍvweZ Li‡Pi KviY', 63, 54, null, null, "center");
                doc.text('UvKvi cwigvb', 112, 54, null, null, "center");
                doc.text('Li‡Pi LvZ', 145, 54, null, null, "center");
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
            tourPlan({ doc }) {
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



                doc.addPage("a4", "p");

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
            tourExecution({ doc }) {
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



                doc.addPage("a4", "p");

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
            localMovement({ doc }) {

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
            gatePass({ doc }) {
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
            }
        },
        staff: {
            sc: [
                {
                    nm_un: "মোঃ মফিজুল হক",
                    nm_en: "Md. Mofigul Huq",
                    gender: "Male",
                    nm_bn: "†gvt gwdRyj nK",
                    deg_en: "PM",
                    deg_ful: "Program Manager",
                    deg_bn: "†cÖvMÖvg g¨v‡bRvi",
                    dt: "1997-09-08",
                    sal: "26250",
                    prj: "CORE"
                },
                {
                    nm_un: "আসলাম জামান",
                    nm_en: "Aslam Zaman",
                    gender: "Male",
                    nm_bn: "Avmjvg Rvgvb",
                    deg_en: "SPO",
                    deg_ful: "Senior Program Organizer",
                    deg_bn: "wmwbqi †cÖvMÖvg AM©vbvBRvi",
                    dt: "1993-05-01",
                    sal: "37289",
                    prj: "CORE"
                },
                {
                    nm_un: "মোঃ সাইফুল আলম",
                    nm_en: "Md. Saiful Alam",
                    gender: "Male",
                    nm_bn: "†gvt mvBdzj Avjg",
                    deg_en: "PO",
                    deg_ful: "Program Organizer",
                    deg_bn: "†cÖvMÖvg AM©vbvBRvi (wnmve)",
                    dt: "2008-06-08",
                    sal: "26250",
                    prj: "CORE"
                },
                {
                    nm_un: "অমিত কুমার মহুরী",
                    nm_en: "Amit Kumare Mohury",
                    gender: "Male",
                    nm_bn: "AwgZ Kzgvi gûix",
                    deg_en: "PO",
                    deg_ful: "Program Organizer",
                    deg_bn: "†cÖvMÖvg AM©vbvBRvi (wnmve)",
                    dt: "2008-02-09",
                    sal: "12331",
                    prj: "CORE"
                },
                {
                    nm_un: "মো: আব্দুর রহমান",
                    nm_en: "Md. Abdur Rahman",
                    gender: "Male",
                    nm_bn: "†gv: Avãyi ingvb",
                    deg_en: "PO(Inc)",
                    deg_ful: "Program Organizer",
                    deg_bn: "wcI (BbPvR©)",
                    dt: "2002-07-21",
                    sal: "28147",
                    prj: "CORE"
                },
                {
                    nm_un: "মোহাম্মদ রেজাউল করিম",
                    nm_en: "Mohammad Rejaul Karim",
                    gender: "Male",
                    nm_bn: "†gvnv¤§` †iRvDj Kwig",
                    deg_en: "PO(Inc)",
                    deg_ful: "Program Organizer",
                    deg_bn: "wcI (BbPvR©)",
                    dt: "2002-07-21",
                    sal: "30765",
                    prj: "CORE"
                },
                {
                    nm_un: "মো: জামাল উদ্দিন",
                    nm_en: "Md. Jamal Uddin",
                    gender: "Male",
                    nm_bn: "†gv: Rvgvj DwÏb",
                    deg_en: "DRIVER",
                    deg_ful: "Driver",
                    deg_bn: "Mvox PvjK",
                    dt: "2015-10-21",
                    sal: "25527",
                    prj: "CORE"
                },
                {
                    nm_un: "মো: লিটন পাটোয়ারী",
                    nm_en: "Md. Liton Patuary",
                    gender: "Male",
                    nm_bn: "†gv: wjUb cv‡Uvqvix",
                    deg_en: "GA",
                    deg_ful: "General Assistant",
                    deg_bn: "mvavib mnKvix",
                    dt: "1992-08-01",
                    sal: "19845",
                    prj: "CORE"
                },
                {
                    nm_un: "মোছা: মর্জিনা খাতুন",
                    nm_en: "Ms. Marzina Khatun",
                    gender: "Female",
                    nm_bn: "†gvQv: gwR©bv LvZzb",
                    deg_en: "CLEANER",
                    deg_ful: "Cleaner",
                    deg_bn: "cwi”QbœZv Kg©©x",
                    dt: "2022-06-01",
                    sal: "4500",
                    prj: "CORE"
                },



                {
                    nm_un: "অপূর্ব রায়",
                    nm_en: "Apurbo Roy",
                    gender: "Male",
                    nm_bn: "Ac~e© ivq",
                    deg_en: "DPC",
                    deg_ful: "Deputy Project Co-ordinator",
                    deg_bn: "†WcywU cÖ‡R± †Kv-AwW©‡bUi",
                    dt: "1997-08-06",
                    sal: "66487",
                    prj: "MC"
                },
                {
                    nm_un: "শেখ সামছুজ্জামান",
                    nm_en: "Sk. Shamsuzzaman",
                    gender: "Male",
                    nm_bn: "†kL mvgQz¾vgvb",
                    deg_en: "SPM",
                    deg_ful: "Senior Program Manager",
                    deg_bn: "wmwbqi †cÖvMÖvg g¨v‡bRvi",
                    dt: "2012-07-01",
                    sal: "40793",
                    prj: "MC"
                },
                {
                    nm_un: "মো: আবুল কাসেম",
                    nm_en: "Md. Abul Kashem",
                    gender: "Male",
                    nm_bn: "†gv: Aveyj Kv‡mg",
                    deg_en: "SPO",
                    deg_ful: "Senior Program Organizer",
                    deg_bn: "wmwbqi †cÖvMÖvg AM©vbvBRvi",
                    dt: "2002-06-01",
                    sal: "34460",
                    prj: "MC"
                },
                {
                    nm_un: "দেওয়ান ইমরুল কায়েস",
                    nm_en: "Dewan Emrul Kayes",
                    gender: "Male",
                    nm_bn: "†`Iqvb Bgiæj Kv‡qm",
                    deg_en: "SPO",
                    deg_ful: "Senior Program Organizer",
                    deg_bn: "wmwbqi †cÖvMÖvg AM©vbvBRvi",
                    dt: "2008-02-01",
                    sal: "31973",
                    prj: "MC"
                },
                {
                    nm_un: "গীতা মিত্র",
                    nm_en: "Gita Mitra",
                    gender: "Female",
                    nm_bn: "MxZv wgÎ",
                    deg_en: "SPO",
                    deg_ful: "Senior Program Organizer",
                    deg_bn: "wmwbqi †cÖvMÖvg AM©vbvBRvi",
                    dt: "2004-07-01",
                    sal: "34926",
                    prj: "MC"
                },




                {
                    nm_un: "মো: ওমর ফারুক হায়দার",
                    nm_en: "Md. Omar Faruque Haider",
                    gender: "Male",
                    nm_bn: "†gv: Igi dviæK nvq`vi",
                    deg_en: "ED",
                    deg_ful: "Executive Director",
                    deg_bn: "wbe©vnx cwiPvjK",
                    dt: "2000-12-01",
                    sal: "66487",
                    prj: "IDCOL"
                },
                {
                    nm_un: "মো: হুমায়ুন কবির",
                    nm_en: "Md. Humaun Kabir",
                    gender: "Male",
                    nm_bn: "†gv: ûgvqyb Kwei",
                    deg_en: "PO",
                    deg_ful: "Program Organizer",
                    deg_bn: "†cÖvMÖvg AM©vbvBRvi (†mvjvi)",
                    dt: "2008-01-01",
                    sal: "30996",
                    prj: "IDCOL"
                },
                {
                    nm_un: "আল আমিন  হোসেন ",
                    nm_en: "Al Amin Hossain",
                    gender: "Male",
                    nm_bn: "Avj Avwgb †nv‡mb",
                    deg_en: "PA",
                    deg_ful: "Program Assistant",
                    deg_bn: "†cÖvMÖvg G¨vwm÷¨v›U (†mvjvi)",
                    dt: "2013-06-23",
                    sal: "24311",
                    prj: "IDCOL"
                },
                {
                    nm_un: "মো: তুহিন আক্তার",
                    nm_en: "Md. Tuhin Akter",
                    gender: "Male",
                    nm_bn: "†gv: Zzwnb Av³vi",
                    deg_en: "PA",
                    deg_ful: "Program Assistant",
                    deg_bn: "†cÖvMÖvg G¨vwm÷¨v›U (†mvjvi)",
                    dt: "2014-10-16",
                    sal: "20056",
                    prj: "IDCOL"
                },
                {
                    nm_un: "মো: আবুল বাশার",
                    nm_en: "Md. Abul Bashar",
                    gender: "Male",
                    nm_bn: "†gv: Aveyj evkvi",
                    deg_en: "DRIVER",
                    deg_ful: "Driver",
                    deg_bn: "Mvox PvjK",
                    dt: "2004-07-05",
                    sal: "26866",
                    prj: "IDCOL"
                },
                {
                    nm_un: "মো: জসিম উদ্দিন",
                    nm_en: "Md. Jasim Uddin",
                    gender: "Male",
                    nm_bn: "†gv: Rwmg DwÏb",
                    deg_en: "GA",
                    deg_ful: "General Assistant",
                    deg_bn: "mvavib mnKvix",
                    dt: "2016-08-01",
                    sal: "17535",
                    prj: "IDCOL"
                },
                {
                    nm_un: "মোহাম্মদ আফজাল হোসেন",
                    nm_en: "Mohammad Afzal Hossain",
                    gender: "Male",
                    nm_bn: "†gvnv¤§` AvdRvj †nv‡mb",
                    deg_en: "PM",
                    deg_ful: "Program Manager",
                    deg_bn: "†cÖvMÖvg g¨v‡bRvi",
                    dt: "2022-10-31",
                    sal: "42000",
                    prj: "COL"
                },
                {
                    nm_un: "মোঃ জহুরুল হক",
                    nm_en: "Md. Zohurul Haque",
                    gender: "Male",
                    nm_bn: "†gvt Rûiæj nK",
                    deg_en: "SPO",
                    deg_ful: "Senior Program Organizer",
                    deg_bn: "wmwbqi †cÖvMÖvg AM©vbvBRvi",
                    dt: "2022-10-31",
                    sal: "40000",
                    prj: "COL"
                },
                {
                    nm_un: "জাকিয়া আক্তার",
                    nm_en: "Zakia Akter",
                    gender: "Female",
                    nm_bn: "RvwKqv Av³vi",
                    deg_en: "PO",
                    deg_ful: "Program Organizer",
                    deg_bn: "†cÖvMÖvg AM©vbvBRvi",
                    dt: "2022-10-31",
                    sal: "340000",
                    prj: "COL"
                }


            ],
            field: {
                january23: [
                    {
                        name_en: "মোসা: ইসমত আরা নয়ন",
                        code: "¯§viK bs wmGgBGm/GBPAviwW/2021-",
                        name: "†gvmv: BmgZ Aviv bqb",
                        post: "BDwbU BbPvR©",
                        unit: "`vgKzov",
                        join: "30.04.17",
                        salary: "10000",
                        address1: "wmGgBGm, `vgKzov BDwbU",
                        address2: "`vgKzov, ivRkvnx"
                    },
                    {
                        name_en: "মো: আতিয়ার রহমান",
                        code: "¯§viK bs wmGgBGm/GBPAviwW/2021-",
                        name: "†gv: AvwZqvi ingvb",
                        post: "BDwbU BbPvR©",
                        unit: "bqvw`qvox",
                        join: "30.04.17",
                        salary: "5000",
                        address1: "wmGgBGm, bqvw`qvwo BDwbU",
                        address2: "bqvw`qvwo, PvcvBbeveMÄ"
                    },
                    {
                        name_en: "মো: পলাশ উদ্দিন",
                        code: "¯§viK bs wmGgBGm/GBPAviwW/2021-",
                        name: "†gv: cjvk DwÏb",
                        post: "BDwbU BbPvR©",
                        unit: "GjvBcyi",
                        join: "30.04.17",
                        salary: "5000",
                        address1: "wmGgBGm, GjvBcyi BDwbU",
                        address2: "GjvBcyi, PuvcvBbeveMÄ"
                    },
                    {
                        name_en: "মো: ফরহাদ আলী",
                        code: "¯§viK bs wmGgBGm/GBPAviwW/2021-",
                        name: "†gv: dinv` Avjx",
                        post: "BDwbU BbPvR©",
                        unit: "bvwjZvevox",
                        join: "06.08.17",
                        salary: "5000",
                        address1: "wmGgBGm, bvwjZvevwo BDwbU",
                        address2: "bvwjZvevwo, †kicyi"
                    },
                    {
                        name_en: "মো: গোলাম মোস্তফা",
                        code: "¯§viK bs wmGgBGm/GBPAviwW/2021-",
                        name: "†gv: †Mvjvg †gv¯Ídv",
                        post: "BDwbU BbPvR©",
                        unit: "gvjMvov",
                        join: "01.03.19",
                        salary: "7000",
                        address1: "wmGgBGm, gvjMvov BDwbU",
                        address2: "gvjMvov, jvjgwbinvU"
                    }

                ],
                july23: [],
                january24: [],
                july24: [],
                january25: [],
                july25: [],
                january26: [],
                july26: [],
                january27: [],
                july27: [],
                january28: [],
                july28: []
            }
        },
        project: [
            {
                id: 1,
                name: "GO",
            },
            {
                id: 2,
                name: "CORE",
            },
            {
                id: 3,
                name: "IDCOL",
            },
            {
                id: 4,
                name: "MC",
            },
            {
                id: 5,
                name: "Catering",
            },
            {
                id: 6,
                name: "MOWCA",
            }
        ],
        unit: {
            bn: [
                {
                    id: 1,
                    name: "AvjxbMi"
                },
                {
                    id: 2,
                    name: "AvgZjx"
                },
                {
                    id: 3,
                    name: "Avgyqv"
                },
                {
                    id: 4,
                    name: "eKwkMÄ"
                },
                {
                    id: 5,
                    name: "`vgKzov"
                },
                {
                    id: 6,
                    name: "†`DwZ"
                },
                {
                    id: 7,
                    name: "GjvBcyi"
                },
                {
                    id: 8,
                    name: "dzjevwo"
                },
                {
                    id: 9,
                    name: "N›UvNi"
                },
                {
                    id: 10,
                    name: "†MveivZjv"
                },
                {
                    id: 11,
                    name: "nvjyqvNvU"
                },
                {
                    id: 12,
                    name: "RjXvKv"
                },
                {
                    id: 13,
                    name: "‰RšÍvcyi"
                },
                {
                    id: 14,
                    name: "Kv‡qZcvov"
                },
                {
                    id: 15,
                    name: "Lv‡minvU"
                },
                {
                    id: 16,
                    name: "Kzwocvov"
                },
                {
                    id: 17,
                    name: "gvjMvov"
                },
                {
                    id: 18,
                    name: "bvwjZvevwo"
                },
                {
                    id: 19,
                    name: "bqvw`qvwo"
                },
                {
                    id: 20,
                    name: "cv_iNvUv"
                },
                {
                    id: 21,
                    name: "ivbxie›`i"
                },
                {
                    id: 22,
                    name: "mvZevwoqv"
                },
                {
                    id: 23,
                    name: "mwLcyi"
                },
                {
                    id: 24,
                    name: "myiæR"
                },
                {
                    id: 25,
                    name: "Dwjcyi"
                },
                {
                    id: 26,
                    name: "fvUcvov"
                },
                {
                    id: 27,
                    name: "m¨vK"
                }
            ],
            en: [
                {
                    id: 1,
                    name: "Alinagar"
                },
                {
                    id: 2,
                    name: "Amtoli"
                },
                {
                    id: 3,
                    name: "Amua"
                },
                {
                    id: 4,
                    name: "Bakshiganj"
                },
                {
                    id: 5,
                    name: "Damkura"
                },
                {
                    id: 6,
                    name: "Deuty"
                },
                {
                    id: 7,
                    name: "Elaipur"
                },
                {
                    id: 8,
                    name: "Fulbari"
                },
                {
                    id: 9,
                    name: "Ghontaghar"
                },
                {
                    id: 10,
                    name: "Gobratola"
                },
                {
                    id: 11,
                    name: "Haluaghat"
                },
                {
                    id: 12,
                    name: "Jaldhaka"
                },
                {
                    id: 13,
                    name: "Jointiapur"
                },
                {
                    id: 14,
                    name: "Kayetpara"
                },
                {
                    id: 15,
                    name: "Khasherhat"
                },
                {
                    id: 16,
                    name: "Kuripara"
                },
                {
                    id: 17,
                    name: "Malgara"
                },
                {
                    id: 18,
                    name: "Nalitabari"
                },
                {
                    id: 19,
                    name: "Noyadiary"
                },
                {
                    id: 20,
                    name: "Patharghata"
                },
                {
                    id: 21,
                    name: "Ranirbandor"
                },
                {
                    id: 22,
                    name: "Satbaria"
                },
                {
                    id: 23,
                    name: "Shokhipur"
                },
                {
                    id: 24,
                    name: "Suruj"
                },
                {
                    id: 25,
                    name: "Ulipur"
                },
                {
                    id: 26,
                    name: "Vatpara"
                },
                {
                    id: 27,
                    name: "SAC"
                },
                {
                    id: 28,
                    name: "SC"
                }
            ]
        },
        honda: [
            {
                "id": 1,
                "registration": "DHAKA METRO-HA-29-6340",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47554",
                "engine": "HA10EA89E66781",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Alinagar",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-09-18",
                        "name": "Md .Mominul Islam",
                        "desig": "CM",
                        "mobile": "01736680174",
                        "location": "Alinagar",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/ckEk7Qu.jpg,https://i.imgur.com/sjVc1Bd.jpg,https://i.imgur.com/eC8Gvj1.jpg,https://i.imgur.com/GxgEuDz.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-02-08",
                        "name": "Md .Mominul Islam",
                        "desig": "CM",
                        "mobile": "01736680174",
                        "location": "Alinagar",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/4tmJxth.jpg,https://i.imgur.com/qx7ANEQ.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 2,
                "registration": "DHAKA METRO-HA-29-6334",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47539",
                "engine": "HA10EA89E67432",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "-",
                "unit": "Amtoli",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2011-01-12",
                        "name": "Md. Shohidul Islam",
                        "desig": "Solar At",
                        "mobile": "00",
                        "location": "Amtoli",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/9sKzQ6q.jpg,https://i.imgur.com/hx2L48K.jpg,https://i.imgur.com/6tb6TE6.jpg",
                        "remarks": "Lost"
                    },
                    {
                        "id": 2,
                        "dt": "2014-10-28",
                        "name": "Md Zahidul Islam",
                        "desig": "UO",
                        "mobile": "01736399702",
                        "location": "Amtoli",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/RAuQtJ9.jpg",
                        "remarks": "Lose"
                    }
                ]
            },
            {
                "id": 3,
                "registration": "DHAKA METRO-HA-29-6333",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47632",
                "engine": "HA10EA89E47632",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Amua",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2020-08-10",
                        "name": "Sameer Ranjan Sil",
                        "desig": "CM",
                        "mobile": "01724497018",
                        "location": "Amua",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/BKXAAwo.jpg,https://i.imgur.com/Cp0IDvH.jpg,https://i.imgur.com/sGv27uY.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 4,
                "registration": "DHAKA METRO-HA-41-1638",
                "reg_dt": "2011-10-20",
                "chassis": "MBLAHA10EYB9G00161",
                "engine": "HA10EFB9G00698",
                "cc": 100,
                "seat": 2,
                "made_year": 2011,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Bakshiganj",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2011-10-20",
                        "name": "Rabiul",
                        "desig": "Computer Traineer",
                        "mobile": "01727936912",
                        "location": "Bakshiganj",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/OKsvtUc.jpg,https://i.imgur.com/Rfvzwif.jpg,https://i.imgur.com/EUyIhZK.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 5,
                "registration": "DHAKA METRO-HA-29-6336",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47596",
                "engine": "HA10EA89E66555",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Damkura",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-15",
                        "name": "Md. Shoriful Alam",
                        "desig": "RM",
                        "mobile": "1",
                        "location": "Damkura",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/DBTo7OH.jpg,https://i.imgur.com/dFYky0v.jpg,https://i.imgur.com/TwguiU1.jpg,https://i.imgur.com/wixowWL.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-01-22",
                        "name": "Md. Shoriful Alam",
                        "desig": "RM",
                        "mobile": "1",
                        "location": "Rajshahi Region",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/48HInX8.jpg,https://i.imgur.com/RULvA3C.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 6,
                "registration": "DHAKA METRO-HA-29-6328",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47511",
                "engine": "HA10EA89E67311",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Deuty",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-09-23",
                        "name": "Md. Mairur Islam",
                        "desig": "CM",
                        "mobile": "0",
                        "location": "Deuty",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/EJER9Iz.jpg,https://i.imgur.com/vNaEZMq.jpg,https://i.imgur.com/2N74B5t.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-02-01",
                        "name": "Md. Belal Hossain",
                        "desig": "LW",
                        "mobile": "1",
                        "location": "Jhaldhaka",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/VAXz21j.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 7,
                "registration": "DHAKA METRO-HA-29-6341",
                "reg_dt": "2008-06-29",
                "chassis": "MLHA10EE89E47535",
                "engine": "HA10EAB9E67418",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Elaipur",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-08",
                        "name": "Kishor Kumar Nandi",
                        "desig": "CM",
                        "mobile": "01715139073",
                        "location": "Elipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/XkLEoxa.jpg,https://i.imgur.com/iTwoOOV.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-02-08",
                        "name": "Kishor Kumar Nandi",
                        "desig": "CM",
                        "mobile": "01715139073",
                        "location": "Elipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/5wV7xAQ.jpg,https://i.imgur.com/dWNxqDb.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 8,
                "registration": "DHAKA METRO-HA-29-6342",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47578",
                "engine": "HA10EA89E66601",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Fulbari",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2020-02-23",
                        "name": "Md. Habubur Rahman",
                        "desig": "Computer Traineer",
                        "mobile": "01719857204",
                        "location": "Fulbari",
                        "project": "Commonwealth",
                        "doc_pic_link": "https://i.imgur.com/53ffaBS.jpg,https://i.imgur.com/50UE7gV.jpg,https://i.imgur.com/r98hi0c.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 9,
                "registration": "DHAKA METRO-HA-33-9090",
                "reg_dt": "2010-01-10",
                "chassis": "MBLHA10EE99L01834",
                "engine": "HA10EA99L16493",
                "cc": 100,
                "seat": 2,
                "made_year": 2009,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Ghontaghar",
                "project": "EDM",
                "location": [
                    {
                        "id": 1,
                        "dt": "2019-11-08",
                        "name": "Md. Moazzem Hossain",
                        "desig": "Technical Traineer- Fashion Garments",
                        "mobile": "01302474729",
                        "location": "Ghontaghar",
                        "project": "Commonwealth",
                        "doc_pic_link": "https://i.imgur.com/KmMlzqQ.jpg,https://i.imgur.com/ZprSKlD.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 10,
                "registration": "DHAKA METRO-HA-29-6338",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47503",
                "engine": "HA10EA89E67105",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Gobratola",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-10-04",
                        "name": "Md. Babul Mia",
                        "desig": "CM",
                        "mobile": "0",
                        "location": "Gobratola",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/NhIt4Mo.jpg,https://i.imgur.com/voY0amh.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-01-21",
                        "name": "Md. Jamal Uddin",
                        "desig": "ACM",
                        "mobile": "01799557771",
                        "location": "Gobratola",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/bNK2ETd.jpg,https://i.imgur.com/2tlinKq.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 11,
                "registration": "MYMENSINGH-HA-12-7798",
                "reg_dt": "2014-06-02",
                "chassis": "MBLHA10EZC9F00538",
                "engine": "HA10EFC9F00536",
                "cc": 100,
                "seat": 2,
                "made_year": 2014,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "GOOD",
                "unit": "Haluaghat",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-15",
                        "name": "Nikhil Chandra Acharjya",
                        "desig": "CM",
                        "mobile": "01736218711",
                        "location": "Alipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/hbDFTth.jpg,https://i.imgur.com/OjBNA4R.jpg",
                        "remarks": "Taxtoken not avilable"
                    },
                    {
                        "id": 2,
                        "dt": "2020-03-05",
                        "name": "Md. Zahidul Islam",
                        "desig": "RM",
                        "mobile": "01736399702",
                        "location": "Khaserhat",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/OzFQTVw.jpg,https://i.imgur.com/A1EOiOF.jpg,https://i.imgur.com/j8SdqDA.jpg",
                        "remarks": "https://i.imgur.com/OzFQTVw.jpg"
                    }
                ]
            },
            {
                "id": 12,
                "registration": "DHAKA METRO-HA-33-9091",
                "reg_dt": "2010-01-10",
                "chassis": "MBLHA10EE99L06093",
                "engine": "HA10EA99L15247",
                "cc": 100,
                "seat": 2,
                "made_year": 2009,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Jaldhaka",
                "project": "YSES",
                "location": [
                    {
                        "id": 1,
                        "dt": "2015-12-03",
                        "name": "Md. Akkas Ali",
                        "desig": "ACM",
                        "mobile": "1",
                        "location": "Jhaldhaka",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/g49vqOj.jpg,https://i.imgur.com/0Dj0GuA.jpg,https://i.imgur.com/uGZPIEn.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2017-12-18",
                        "name": "Bibekanando Roy",
                        "desig": "CM",
                        "mobile": "01728720799",
                        "location": "Jhaldhaka",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/lzLMNVN.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 13,
                "registration": "SYLHET-HA-13-6511",
                "reg_dt": "2013-09-05",
                "chassis": "MBLHA10EYD9B00196",
                "engine": "HA10EFD9B00449",
                "cc": 100,
                "seat": 2,
                "made_year": 2012,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "GOOD",
                "unit": "Jointiapur",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-08-18",
                        "name": "Md. Aynul Haque",
                        "desig": "CM",
                        "mobile": "01722540731",
                        "location": "Rajabari",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/qwiLCFR.jpg,https://i.imgur.com/1N74YdI.jpg,https://i.imgur.com/fTcAnzH.jpg,https://i.imgur.com/K531vr1.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 14,
                "registration": "DHAKA METRO HA-29-6326",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE59F02120",
                "engine": "HA10EA89F05072",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "GOOD",
                "unit": "Kayetpara",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2011-01-10",
                        "name": "Md. Ilias Hosen",
                        "desig": "Solar Organizer",
                        "mobile": "1",
                        "location": "Kayetpara",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/sgqFNgX.jpg,https://i.imgur.com/pB6WC4E.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2017-01-14",
                        "name": "Md. Moinul Hosen",
                        "desig": "AC",
                        "mobile": "1",
                        "location": "Kayetpara",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/aGQgdxY.jpg",
                        "remarks": "Lose"
                    },
                    {
                        "id": 3,
                        "dt": "2020-09-02",
                        "name": "Md. Anwar Hossain",
                        "desig": "CM",
                        "mobile": "01737208672",
                        "location": "Kayetpara",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/RwMzPrn.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 15,
                "registration": "DHAKA METRO-HA-29-6332",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47502",
                "engine": "HA10EA89E66628",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Khasherhat",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2018-03-01",
                        "name": "Md. Mizanur Rahman",
                        "desig": "CM",
                        "mobile": "1",
                        "location": "Khaserhat",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/rMjs7tI.jpg,https://i.imgur.com/18lwbWp.jpg,https://i.imgur.com/iNKZerM.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 16,
                "registration": "DHAKA METRO-HA-29-6331",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47547",
                "engine": "HA10EA89E67638",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Kuripara",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-10-04",
                        "name": "Md. Harun Ar Rashid",
                        "desig": "CM",
                        "mobile": "1",
                        "location": "Kuripara",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/D9563Vs.jpg,https://i.imgur.com/X8dNtH9.jpg,https://i.imgur.com/UOONR7G.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2017-12-31",
                        "name": "Md. Bellal Hossain",
                        "desig": "CM",
                        "mobile": "01710798105",
                        "location": "Kuripara",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/OgCH2yI.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 17,
                "registration": "DHAKA METRO-HA-33-9089",
                "reg_dt": "2010-01-10",
                "chassis": "MBLHA10EE99L06105",
                "engine": "HA10EA99L15164",
                "cc": 100,
                "seat": 2,
                "made_year": 2009,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Malgara",
                "project": "YSES",
                "location": [
                    {
                        "id": 1,
                        "dt": "2018-08-30",
                        "name": "Md. Saiful Alam",
                        "desig": "RM",
                        "mobile": "01718673426",
                        "location": "Deuty",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/2Dg3iMA.jpg,https://i.imgur.com/JhpNFo1.jpg,https://i.imgur.com/zMSiv1l.jpg,https://i.imgur.com/jZYtl6Y.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2018-12-09",
                        "name": "Md. Rashidul Islam ***",
                        "desig": "Upazila Coordinator",
                        "mobile": "1",
                        "location": "Kalapara",
                        "project": "Kishori Abhijan",
                        "doc_pic_link": "https://i.imgur.com/Q7R5mWV.jpg,https://i.imgur.com/Nijz771.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 3,
                        "dt": "2020-04-18",
                        "name": "Md. Harun Ar Rashid",
                        "desig": "CM",
                        "mobile": "01753736550",
                        "location": "Amtoli Unit",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/irJkDBs.jpg",
                        "remarks": "Take from Al Nahian Kalapara Unit K/A"
                    }

                ]
            },
            {
                "id": 18,
                "registration": "SHERPUR-HA-11-2628",
                "reg_dt": "2012-05-22",
                "chassis": "MBLHA10EYB9G-00547",
                "engine": "HA10EFB9G-02901",
                "cc": 100,
                "seat": 2,
                "made_year": 2011,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Nalitabari",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-09-28",
                        "name": "Sheikh Shahidul Islam",
                        "desig": "CM",
                        "mobile": "1",
                        "location": "Amtoli",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/fFMMFP9.jpg,https://i.imgur.com/rlXCXBb.jpg",
                        "remarks": "Good"
                    },
                    {
                        "id": 2,
                        "dt": "2020-03-24",
                        "name": "Md. Harun-or-Rashid",
                        "desig": "CM",
                        "mobile": "01753736550",
                        "location": "Amtoli",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/fgvJOdS.jpg,https://i.imgur.com/SRjBZFF.jpg,https://i.imgur.com/0OXfX43.jpg,https://i.imgur.com/9nwFhdj.jpg,https://i.imgur.com/OpT1gbr.jpg,https://i.imgur.com/Lu6kzSw.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 19,
                "registration": "DHAKA METRO-HA-29-6339",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47588",
                "engine": "HA10EA89E67442",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Noyadiary",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-08",
                        "name": "Md. Rejaul Karim",
                        "desig": "CM",
                        "mobile": "01734235615",
                        "location": "Noyadiari",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/VVnG5fF.jpg,https://i.imgur.com/xdgv6mH.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-02-04",
                        "name": "Md. Rejaul Karim",
                        "desig": "CM",
                        "mobile": "01734235615",
                        "location": "Noyadiari",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/QEEEhSo.jpg,https://i.imgur.com/yPh0nzK.jpg,https://i.imgur.com/1v6bhgm.jpg,https://i.imgur.com/2fDRufH.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 20,
                "registration": "DHAKA METRO-HA-29-6335",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47608",
                "engine": "HA10EA89E67454",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Patharghata",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-07-01",
                        "name": "Md. Shahinur Rahman",
                        "desig": "CM",
                        "mobile": "01770802838",
                        "location": "Patharghata",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/wJCGpRC.jpg,https://i.imgur.com/tOijRe0.jpg,https://i.imgur.com/MQgie6R.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 21,
                "registration": "DHAKA METRO-HA-29-6330",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47518",
                "engine": "HA10EA89E67393",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Ranirbandor",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-09",
                        "name": "Sudhangshu Shekhor Hawlader",
                        "desig": "CM",
                        "mobile": "1",
                        "location": "Ghontaghar",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/ZnYMXuw.jpg,https://i.imgur.com/5N7sw1Y.jpg,https://i.imgur.com/DBE5WXp.jpg,https://i.imgur.com/UzSTMHg.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2019-10-31",
                        "name": "Md. Rafiqul Islam",
                        "desig": "CM",
                        "mobile": "01718025949",
                        "location": "Ghontaghar",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/0C7qvkU.jpg,https://i.imgur.com/t1O5Y55.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 22,
                "registration": "DHAKA METRO-HA-29-6327",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47514",
                "engine": "HA10EA89E66976",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Diary",
                "unit": "Satbaria",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-11-13",
                        "name": "Md. Moniruzzaman",
                        "desig": "CM",
                        "mobile": "01784689409",
                        "location": "Satbaria",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/PKaxoCO.jpg,https://i.imgur.com/LcwP5Kg.jpg,https://i.imgur.com/yClEQzl.jpg,https://i.imgur.com/Oik00fp.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 23,
                "registration": "DHAKA METRO-HA-29-6329",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47525",
                "engine": "HA10EA89E67374",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Shokhipur",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-10-05",
                        "name": "Md. Rafiqul Islam",
                        "desig": "CM",
                        "mobile": "01785948241",
                        "location": "Shokhipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/mRwqfLz.jpg,https://i.imgur.com/cfuHsN3.jpg,https://i.imgur.com/V3jnQMv.jpg,https://i.imgur.com/dw0WzYU.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 24,
                "registration": "DHAKA METRO-HA-29-6325",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89F02111",
                "engine": "HA10EA89F05962",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Suruj",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2020-07-26",
                        "name": "Liton Mollik",
                        "desig": "Unit Incharge",
                        "mobile": "01740624531",
                        "location": "Suruj",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/ZiP9vFU.jpg,https://i.imgur.com/1aSkdcy.jpg,https://i.imgur.com/PUbRp7b.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 25,
                "registration": "DHAKA METRO-HA-29-6343",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE59E47611",
                "engine": "HA10EA99E67303",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Loss",
                "unit": "Ulipur",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2011-09-12",
                        "name": "Md. Zakir Hosen",
                        "desig": "Solar Organizer",
                        "mobile": "1",
                        "location": "Deuty",
                        "project": "SDC & SIDA",
                        "doc_pic_link": "https://i.imgur.com/enPzdy7.jpg,https://i.imgur.com/XnXmmGa.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2014-02-08",
                        "name": "Bimol Chandra Roy",
                        "desig": "UO",
                        "mobile": "01717727293",
                        "location": "Ulipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/ytCy4C6.jpg",
                        "remarks": "Lose"
                    }
                ]
            },
            {
                "id": 26,
                "registration": "DHAKA METRO-HA-29-6337",
                "reg_dt": "2008-06-29",
                "chassis": "MBLHA10EE89E47594",
                "engine": "HA10EA89E66815",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "Original",
                "unit": "Vatpara",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2020-01-21",
                        "name": "Md. Motiur Rahman",
                        "desig": "CM",
                        "mobile": "1",
                        "location": "Damkura",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/mgx2KPf.jpg,https://i.imgur.com/ezUGj34.jpg,https://i.imgur.com/CCVeqrE.jpg,https://i.imgur.com/IQO3vOf.jpg",
                        "remarks": ""
                    },
                    {
                        "id": 2,
                        "dt": "2020-01-26",
                        "name": "Md. Nazmul Huda",
                        "desig": "LW",
                        "mobile": "1",
                        "location": "Vatpara",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/VGrvmgp.jpg",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 27,
                "registration": "RANGPUR-HA-12-9827",
                "reg_dt": "2020-02-04",
                "chassis": "",
                "engine": "",
                "cc": 97,
                "seat": 2,
                "made_year": 2008,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "OK",
                "unit": "Ulipur",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2017-09-16",
                        "name": "Md. Kamruzzaman",
                        "desig": "CM",
                        "mobile": "01725874030",
                        "location": "Ulipur",
                        "project": "Microcredit",
                        "doc_pic_link": "https://i.imgur.com/apcul4W.jpg",
                        "remarks": "Smart card has gotten"
                    }
                ]
            },
            {
                "id": 28,
                "registration": "GAZIPUR-HA-11-1760",
                "reg_dt": "2018-09-11",
                "chassis": "",
                "engine": "",
                "cc": 97,
                "seat": 2,
                "made_year": 2018,
                "company": "MOTOR CYCLE HERO HONDA MOTOR CO.",
                "status": "OK",
                "unit": "Kayetpara",
                "project": "SDC & SIDA",
                "location": [
                    {
                        "id": 1,
                        "dt": "2018-09-11",
                        "name": "Md. Anwar Hossen",
                        "desig": "CM",
                        "mobile": "",
                        "location": "Kayetpara",
                        "project": "Microcredit",
                        "doc_pic_link": "https://imgur.com/RwMzPrn",
                        "remarks": "Registration card apply"
                    }
                ]
            }
        ],
        land: [
            {
                "id": 1,
                "unit": "Alinagar",
                "school": [
                    {
                        "school": "Bangabari",
                        "qty": "8.00",
                        "reg_dt": "2012-01-03",
                        "donors": "nill",
                        "remarks": "nill"
                    },
                    {
                        "school": "RTC",
                        "qty": "65.00",
                        "reg_dt": "1994-02-01",
                        "donors": "Hazi Jillur (50=01.02.1994, 15= 13.02.1994)",
                        "remarks": ""
                    },
                    {
                        "school": "Brojnathpur",
                        "qty": "10.00",
                        "reg_dt": "1999-02-04",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 2,
                "unit": "Amtoli",
                "school": [
                    {
                        "school": "Patakata",
                        "qty": "8.00",
                        "reg_dt": "1998-03-18",
                        "donors": "",
                        "remarks": "Mouja: Patakata"
                    },
                    {
                        "school": "Krishnanagar",
                        "qty": "15.00",
                        "reg_dt": "1999-03-01",
                        "donors": "",
                        "remarks": "Mouja: Krishnonagar"
                    },
                    {
                        "school": "RTC",
                        "qty": "76.00",
                        "reg_dt": "1992-11-08",
                        "donors": "Md Abdul Mazid Miah",
                        "remarks": "Mouja: Ghotkhali"
                    },
                    {
                        "school": "Chandra",
                        "qty": "10.00",
                        "reg_dt": "1998-11-23",
                        "donors": "",
                        "remarks": "Mouja: Chandra"
                    },
                    {
                        "school": "Raoga",
                        "qty": "24.00",
                        "reg_dt": "1999-08-31",
                        "donors": "",
                        "remarks": "Mouja: Uttarb Baria"
                    }
                ]
            },
            {
                "id": 3,
                "unit": "Amua",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "76.00",
                        "reg_dt": "1991-09-16",
                        "donors": "1. Abdul Mazed Mollah, 2. Md. Fazlul Haque Mollah, 3. Md. Abdul Sattar Mollah",
                        "remarks": "CMES buy 7 decimal, Donation 69 decimal"
                    },
                    {
                        "school": "Amua",
                        "qty": "16.00",
                        "reg_dt": "1999-03-09",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Jhorkhali",
                        "qty": "15.00",
                        "reg_dt": "1998-08-13",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Lakshipur",
                        "qty": "8.50",
                        "reg_dt": "1997-07-31",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Morichbunia",
                        "qty": "20.00",
                        "reg_dt": "1999-03-01",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 4,
                "unit": "Bakshiganj",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "45.00",
                        "reg_dt": "2011-07-10",
                        "donors": "Md. Yakub Ali, Zarina Begum",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 5,
                "unit": "Damkura",
                "school": [
                    {
                        "school": "Fulbari",
                        "qty": "12.00",
                        "reg_dt": "1999-01-31",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "85.00",
                        "reg_dt": "1991-10-19",
                        "donors": "Md. Moslem Uddin",
                        "remarks": "Land: Damkkura hat bohumukhi high school"
                    },
                    {
                        "school": "Horisardying",
                        "qty": "8.00",
                        "reg_dt": "1997-08-10",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 6,
                "unit": "Deuty",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "50.00",
                        "reg_dt": "1988-04-24",
                        "donors": "1. Md. Mozammel Hossen, 2. Md. Mahfuzar Rahman, 3. Mostafizar Rahman, 4. Mokhlesar Rahman",
                        "remarks": ""
                    },
                    {
                        "school": "Nagdah",
                        "qty": "10.00",
                        "reg_dt": "1997-08-20",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Sayedpur",
                        "qty": "10.00",
                        "reg_dt": "1999-03-11",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Sharifsadar",
                        "qty": "10.00",
                        "reg_dt": "1999-03-24",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Parul",
                        "qty": "10.00",
                        "reg_dt": "1998-11-05",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 7,
                "unit": "Elaipur",
                "school": [
                    {
                        "school": "Kendobona",
                        "qty": "10.00",
                        "reg_dt": "1998-01-12",
                        "donors": "",
                        "remarks": "Contact"
                    },
                    {
                        "school": "RTC",
                        "qty": "66.00",
                        "reg_dt": "1994-02-01",
                        "donors": "Batasu Mandal",
                        "remarks": ""
                    },
                    {
                        "school": "Mundikhoir",
                        "qty": "10.00",
                        "reg_dt": "1998-11-15",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 8,
                "unit": "Fulbari",
                "school": [
                    {
                        "school": "Charshimulbari",
                        "qty": "27.00",
                        "reg_dt": "2008-04-13",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Grokmondol",
                        "qty": "20.00",
                        "reg_dt": "2008-06-29",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "98.00",
                        "reg_dt": "2007-12-02",
                        "donors": "Mis. Nurzahan Beoa",
                        "remarks": ""
                    },
                    {
                        "school": "Chandrakhana",
                        "qty": "20.00",
                        "reg_dt": "2008-07-25",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 9,
                "unit": "Ghontaghar",
                "school": [
                    {
                        "school": "Laldighi",
                        "qty": "20.00",
                        "reg_dt": "2000-11-02",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "30.00",
                        "reg_dt": "2000-11-01",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Kushalpur",
                        "qty": "30.00",
                        "reg_dt": "2001-11-18",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 10,
                "unit": "Gobratola",
                "school": [
                    {
                        "school": "Diardhainagar",
                        "qty": "9.00",
                        "reg_dt": "1991-04-24",
                        "donors": "",
                        "remarks": "Conditional"
                    },
                    {
                        "school": "RTC",
                        "qty": "94.00",
                        "reg_dt": "1991-04-24",
                        "donors": "Md. Ansar Ali",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 11,
                "unit": "Haluaghat",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "30.00",
                        "reg_dt": "2014-03-31",
                        "donors": "Faruque Ahmed",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 12,
                "unit": "Jaldhaka",
                "school": [
                    {
                        "school": "Rotherbazar",
                        "qty": "24.00",
                        "reg_dt": "2000-11-08",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Noljhuri",
                        "qty": "20.00",
                        "reg_dt": "2000-10-19",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "65.00",
                        "reg_dt": "2002-02-13",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 13,
                "unit": "Jointiapur",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "43.55",
                        "reg_dt": "2013-03-14",
                        "donors": "Md. Rahel Ahmed,Md. Ebadur Rahman, Md. Joynal Uddin",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 14,
                "unit": "Kayetpara",
                "school": [
                    {
                        "school": "Vitipara",
                        "qty": "14.00",
                        "reg_dt": "1997-08-31",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Vitipara (Rajabari)",
                        "qty": "13.00",
                        "reg_dt": "2002-01-01",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Kuriadi",
                        "qty": "21.00",
                        "reg_dt": "1998-11-01",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "50.00",
                        "reg_dt": "1984-02-13",
                        "donors": "Mohammad Chan Mia",
                        "remarks": ""
                    },
                    {
                        "school": "Rajabari (Noagaon)",
                        "qty": "35.00",
                        "reg_dt": "2001-01-29",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Proholadpur (Rajabari)",
                        "qty": "20.00",
                        "reg_dt": "2000-12-03",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Palaid",
                        "qty": "15.00",
                        "reg_dt": "1999-06-01",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 15,
                "unit": "Khasherhat",
                "school": [
                    {
                        "school": "Morichbunia ",
                        "qty": "15.00",
                        "reg_dt": "2001-01-24",
                        "donors": "",
                        "remarks": "(Non Construction)"
                    },
                    {
                        "school": "Keoabunia",
                        "qty": "20.00",
                        "reg_dt": "1998-09-20",
                        "donors": "",
                        "remarks": "Mouja: Poschim Keoabunia"
                    },
                    {
                        "school": "Bashtola",
                        "qty": "18.00",
                        "reg_dt": "1998-11-30",
                        "donors": "",
                        "remarks": "Mouja: Hortokibaria"
                    },
                    {
                        "school": "Bazarghona",
                        "qty": "22.50",
                        "reg_dt": "1999-02-07",
                        "donors": "",
                        "remarks": "Mouja: Bazarghona"
                    },
                    {
                        "school": "Gochkhali",
                        "qty": "18.00",
                        "reg_dt": "1997-06-19",
                        "donors": "",
                        "remarks": "Mouja: Kolagachia"
                    },
                    {
                        "school": "RTC",
                        "qty": "85.00",
                        "reg_dt": "1990-09-16",
                        "donors": "1. Abdul Sottar Pada, 2. Abdul Zabbar Pada, 3. Abdul Kasem Haoladar, 4. Md. Nazes Haoladar, 5. Md. Azimuddin Haoladar.",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 16,
                "unit": "Kuripara",
                "school": [
                    {
                        "school": "Kalikapur",
                        "qty": "10.00",
                        "reg_dt": "1998-11-30",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Charbetgari",
                        "qty": "10.00",
                        "reg_dt": "1999-03-25",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Beripotol",
                        "qty": "10.00",
                        "reg_dt": "1999-05-13",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Kuralia",
                        "qty": "10.00",
                        "reg_dt": "2001-01-28",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Mohisamura",
                        "qty": "10.00",
                        "reg_dt": "1998-09-15",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "89.00",
                        "reg_dt": "1990-01-15",
                        "donors": "Mis. Jamila Khatun Beoa, Golam Abu Abedin,",
                        "remarks": "Buy: by CMES 39 decimal and donation 50 decimal, Total 89 decimal"
                    }
                ]
            },
            {
                "id": 17,
                "unit": "Malgara",
                "school": [
                    {
                        "school": "Chandrapur",
                        "qty": "25.00",
                        "reg_dt": "2009-04-13",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Paikartary",
                        "qty": "18.00",
                        "reg_dt": "2006-06-04",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Harikhoa",
                        "qty": "20.00",
                        "reg_dt": "2006-04-09",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "70.00",
                        "reg_dt": "2006-02-06",
                        "donors": "A. K. M. Sirazul Islam",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 18,
                "unit": "Nalitabari",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "39.00",
                        "reg_dt": "2012-02-23",
                        "donors": "Md. Abdul Hamid",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 19,
                "unit": "Noyadiary",
                "school": [
                    {
                        "school": "Ranibari",
                        "qty": "10.00",
                        "reg_dt": "1999-03-24",
                        "donors": "",
                        "remarks": "Conditional"
                    },
                    {
                        "school": "Salalpur",
                        "qty": "10.00",
                        "reg_dt": "1999-03-24",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "66.00",
                        "reg_dt": "1991-12-24",
                        "donors": "1. Md. Kasem Udditn, 2. Md Aaesh Uddin , 3.Md. Abdul Kalam Azad, 4.Md.  Humayun Reja, 5. Md. Ala Uddin, 6. Md. Jalal Uddin, 7. Md. Jamal Uddin, 8. Md.",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 20,
                "unit": "Patharghata",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "100.00",
                        "reg_dt": "1992-03-25",
                        "donors": "Md. Ayub Ali Mallik",
                        "remarks": ""
                    },
                    {
                        "school": "Ruhita",
                        "qty": "25.00",
                        "reg_dt": "1999-04-04",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Motherkhal",
                        "qty": "20.00",
                        "reg_dt": "1999-03-22",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Gohorpur",
                        "qty": "25.00",
                        "reg_dt": "1999-03-16",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Haritana",
                        "qty": "23.00",
                        "reg_dt": "1999-01-01",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Purbaghutabacha",
                        "qty": "15.00",
                        "reg_dt": "1998-02-15",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Macherkhal",
                        "qty": "10.00",
                        "reg_dt": "1997-12-28",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 21,
                "unit": "Ranirbandor",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "52.00",
                        "reg_dt": "1990-08-16",
                        "donors": "1. Md Wali Ullah, 2. Md. Sohidullah, 3. Md. Ahsan Ullah",
                        "remarks": "CMES buy 2 decimal and donation 50 decimal"
                    },
                    {
                        "school": "Alokdihi",
                        "qty": "10.00",
                        "reg_dt": "1999-10-14",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Goaldihi",
                        "qty": "15.00",
                        "reg_dt": "1998-12-07",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Nashratpur",
                        "qty": "10.00",
                        "reg_dt": "1999-11-22",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Gochahar",
                        "qty": "10.00",
                        "reg_dt": "1999-03-11",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Hasimpur",
                        "qty": "6.00",
                        "reg_dt": "1997-07-28",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 22,
                "unit": "Satbaria",
                "school": [
                    {
                        "school": "RTC",
                        "qty": "50.00",
                        "reg_dt": "1985-08-07",
                        "donors": "1. Choudhury Md. Nurul Haque, 2. Advocate- Sirajul Haque,  3. Maolana Ahmod, Ullah, 4. Joynal Abedin, 5. Ashab Uddin,",
                        "remarks": ""
                    },
                    {
                        "school": "Hasondandi",
                        "qty": "12.00",
                        "reg_dt": "1998-11-02",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Boiltoli",
                        "qty": "16.00",
                        "reg_dt": "1998-09-19",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 23,
                "unit": "Shokhipur",
                "school": [
                    {
                        "school": "Solaprotima",
                        "qty": "10.00",
                        "reg_dt": "1998-11-18",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Gorgobindipur",
                        "qty": "12.00",
                        "reg_dt": "1997-12-08",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Baromousha ",
                        "qty": "12.00",
                        "reg_dt": "1999-11-11",
                        "donors": "",
                        "remarks": "No infrastructure"
                    },
                    {
                        "school": "RTC",
                        "qty": "85.00",
                        "reg_dt": "1990-01-08",
                        "donors": "1. Md. Usuf Ali, 2. Abdul Jalil Miah, 3. Md. Khalilur Rahman, 4. Md. Eshak Ali, 5. Md. Ejmot Ali, 6. Md. Ashmot Ali, 7. Md. Jobed Ali.",
                        "remarks": ""
                    },
                    {
                        "school": "SAC",
                        "qty": "150.00",
                        "reg_dt": "2006-05-14",
                        "donors": "Owned property purchased by CMES",
                        "remarks": "Forestry Land"
                    }
                ]
            },
            {
                "id": 24,
                "unit": "Suruj",
                "school": [
                    {
                        "school": "PSP (2nd Campus)",
                        "qty": "30.00",
                        "reg_dt": "1994-07-14",
                        "donors": "Sreemoti Jotsna Rani",
                        "remarks": ""
                    },
                    {
                        "school": "Atapara",
                        "qty": "24.00",
                        "reg_dt": "1998-10-21",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Vukta",
                        "qty": "20.00",
                        "reg_dt": "1999-03-26",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Joshihati",
                        "qty": "10.00",
                        "reg_dt": "1998-01-04",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "55.00",
                        "reg_dt": "1981-02-12",
                        "donors": "Syed Ahammad Hossen.",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 25,
                "unit": "Ulipur",
                "school": [
                    {
                        "school": "Bazra",
                        "qty": "15.00",
                        "reg_dt": "2011-07-17",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Gunaigach",
                        "qty": "20.00",
                        "reg_dt": "2008-06-05",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Mojaidanga",
                        "qty": "15.00",
                        "reg_dt": "2008-08-13",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "90.00",
                        "reg_dt": "2008-04-24",
                        "donors": "Alhaz Md. Abdul Hai Sarkar, Doctor Md. Maudud Hossen, Md. Khairul Islam ",
                        "remarks": ""
                    }
                ]
            },
            {
                "id": 26,
                "unit": "Vatpara",
                "school": [
                    {
                        "school": "Solua",
                        "qty": "10.00",
                        "reg_dt": "1999-01-05",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "RTC",
                        "qty": "144.00",
                        "reg_dt": "1991-11-10",
                        "donors": "Md. Mofiz Uddin Sarkar, Md. Mohsin Ali",
                        "remarks": "Land: Vatpara Masjid, Madrasa and Eidghah. Donors are the member of that committee."
                    },
                    {
                        "school": "Nimpara",
                        "qty": "10.00",
                        "reg_dt": "1998-05-15",
                        "donors": "",
                        "remarks": ""
                    },
                    {
                        "school": "Chaknimpara",
                        "qty": "10.00",
                        "reg_dt": "1999-01-10",
                        "donors": "",
                        "remarks": ""
                    }
                ]
            }
        ],
        doc: [
            {
                "id": "61cf024729c16115aceb5057",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Jm4jR1D/DSC05122.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb505c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jJkkgWH/DSC04539.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5066",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6ZFyzpz/DSC04626.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5069",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dJtWsYK/DSC04636.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb506f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4Yt1JP0/DSC04647.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5070",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vdqxstZ/DSC04651.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5076",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zx5pBMx/DSC04694.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5079",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TqwtzZj/DSC04701.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb507a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/8Kd3S6G/DSC04759.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb507b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VpN99PF/DSC04768.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb507f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2PR2ZFd/DSC04792.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5082",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/p0XqJkX/DSC04805.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5085",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Bz4Zf3N/DSC04836.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb5088",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VmD7RVt/DSC04846.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb508a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7rrTJDC/DSC04863.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb508b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vVYnh0d/DSC04872.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb508d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Y7Z0yzc/DSC04890.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5091",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QQL0dwQ/DSC04517.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb509c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VDhnzfC/DSC04557.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb509f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/bgZ4r81/DSC04581.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50a3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/j6cKCgQ/DSC04608.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50aa",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/N1JfrX1/DSC04662.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50bb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hcQdTvd/DSC04810.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50bc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/SDShSCr/DSC04813.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50bf",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QfFkbbZ/DSC04822.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/wSnCK8c/DSC04827.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3kHhbZn/DSC04842.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50cb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/wsjLn2h/DSC04909.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb50cf",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/9VJNkq5/DSC04938.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50d0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ww7FbTt/DSC04939.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50d6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1TLCL48/DSC04967.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50d7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/JjrZm9z/DSC05001.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50d8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nB86ddq/DSC05003.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50d9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2nCPmN8/DSC05006.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50db",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jGdKH5J/DSC05021.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/c6pWk7F/DSC05043.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/fY6xmv6/DSC04860.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4m1HmSm/DSC04885.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5101",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/j5hwzz0/DSC04918.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5105",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kyDdFff/DSC04949.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5109",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/xYbzcGC/DSC04957.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb510a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5T6ZbZt/DSC04962.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5111",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/q52RTz8/DSC05020.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb511b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7Cddz2c/DSC05075.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5124",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C2syTN9/DSC05115.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb512a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hYvFkMj/DSC04547.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb512b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Vxdp6BQ/DSC04549.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb512f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2Fhx9fC/DSC04576.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5133",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/wBh9L6N/DSC04603.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5138",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QNcB2PM/DSC04649.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5139",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/f0yQkK0/DSC04650.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb513a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YjCKTnD/DSC04653.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb513d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/txCtxYD/DSC04755.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb513e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ZMx1ZxN/DSC04766.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb513f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3yqJHMB/DSC04777.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5142",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GkzGH1s/DSC04794.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5143",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TK0pswZ/DSC04796.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5144",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Jtxmbh0/DSC04798.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5145",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/NW3QLjD/DSC04809.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb514a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/HzcsXxC/DSC04853.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb514c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vJfdtLV/DSC04865.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb514d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TBKZL7n/DSC04867.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb514f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CtvfX2m/DSC04877.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5155",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/J5Qh6Jj/DSC04913.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5156",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DQnSPSx/DSC04917.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5055",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pxFHfgc/DSC05109.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5056",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2dKZM7H/DSC05114.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb505a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RNSYYnm/DSC04524.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb505e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dLbZDSc/DSC04543.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb505f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/h75BMtT/DSC04550.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5060",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6PRRb9y/DSC04589.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5061",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0GmQTd6/DSC04595.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5063",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hMFsLs1/DSC04605.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5064",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qYmf108/DSC04609.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb506d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/WD2X11g/DSC04642.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5071",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/b26F6LW/DSC04656.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb507e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kqNzmnf/DSC04780.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5080",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/m8qdQ1r/DSC04795.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb508f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/y6WwVmD/DSC05121.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5090",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hXpMFw5/DSC05134.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5094",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0FqNj20/DSC04522.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb509a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tb0sVLq/DSC04554.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb509b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3mwjKD7/DSC04556.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb509e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hMsvKTb/DSC04562.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb50a2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/K5dcQVg/DSC04598.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50a4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0JFN1f5/DSC04614.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50a6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RQ4DzjR/DSC04628.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50a7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4V0zQ2V/DSC04645.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50a8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C5Rry6J/DSC04648.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50ab",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QmLSTmt/DSC04676.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb50ac",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/m4R7vdx/DSC04692.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50b0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kh1HvGg/DSC04757.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50b1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jvtqdMV/DSC04760.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb50b4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2MSHSgc/DSC04771.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50b5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/yVMx1pP/DSC04773.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50b7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/rm5HPJP/DSC04783.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50be",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VScTmxh/DSC04815.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb50c1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5BL9wqd/DSC04826.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/PZc2tqq/DSC04837.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ThMKtyQ/DSC04845.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/PrY8T4H/DSC04848.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RB760M2/DSC04856.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50ca",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/J76Twby/DSC04899.jpg",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50cc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GJs65F3/DSC04916.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb50ce",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RS23QvJ/DSC04933.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50d1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C6zJwfp/DSC04941.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50d3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1McWxxd/DSC04958.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50da",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kHp5F72/DSC05010.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50dc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CzjM2hX/DSC05023.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50de",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/L9zs5Nr/DSC05025.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50df",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6BDFHRs/DSC05026.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50e0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KbxDXF1/DSC05029.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/23K279j/DSC05050.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hVFzV7X/DSC05065.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C6cSzSs/DSC05074.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50ea",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1qjdgbj/DSC05077.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50ec",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/N1krVJX/DSC05084.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50ed",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/W5Zqh0C/DSC05086.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QvKCYMd/DSC04868.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Csp4jTC/DSC04886.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50f8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KW5tFNm/DSC04887.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50fc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pQSx1s9/DSC04895.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb50fd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dBV5Ynq/DSC04898.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5100",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Pr4p9Vt/DSC04912.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5104",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jJJZCyM/DSC04946.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5108",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/B4jgvB8/DSC04955.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5110",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ZMGk6FZ/DSC05016.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5115",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/D1MZQSm/DSC05057.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5117",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cQZ9tcY/DSC05068.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb511d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/WnKG05z/DSC05083.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb515a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1d4ndj4/DSC04928.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb515c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/rQj5m0H/DSC04932.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5169",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/PcDrV4t/DSC04995.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb516b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/PskGDBy/DSC05004.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb517a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vQgRm52/DSC05080.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5183",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Xxb5tx1/DSC05125.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5185",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dc2Y0Yg/DSC04527.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5186",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RbVWRN4/DSC04530.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5187",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0DrwPYr/DSC04531.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5188",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nR4gcPc/DSC04532.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5189",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/HqbhJKx/DSC04538.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb518b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YjtTgyw/DSC04552.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb518c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/M2bYMVb/DSC04560.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5198",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7vvjVkq/DSC04634.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb519e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CtDVhwP/DSC04681.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb519f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7bSTT2Y/DSC04682.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51a0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jDNBdyg/DSC04686.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51ab",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/stZmDCS/DSC04797.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51ae",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hRyVCtZ/DSC04801.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51b3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qnBTDKK/DSC04817.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb51b4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/mtRyfHt/DSC04819.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51b6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/z4d7yMC/DSC04828.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51b9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Vmq2Qtx/DSC04833.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51ba",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/xS2Fths/DSC04839.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51bc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/MsJnSLN/DSC04844.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51bf",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tY85nNs/DSC04857.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51c7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/125tFM2/DSC04924.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51c9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GPVr0js/DSC04930.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51cb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CwBv5nD/DSC04948.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51d5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LrszjNx/DSC05032.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51d6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Zx1DkwX/DSC05037.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51d9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Yb8kC3Q/DSC05044.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51db",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zfLJLKc/DSC05048.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51dd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1Zxg0Kq/DSC05059.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51e0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/W5ySHx1/DSC05078.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jLkX0X9/DSC05087.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51ec",
                "dt": "2021-12-28",
                "unit": "Mushroom",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00690.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51ee",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01017.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51ef",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01034.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51f0",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01049.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51fd",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01549.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51fe",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01584.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51ff",
                "dt": "2021-12-28",
                "unit": "Annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01608.JPG",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5209",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03002.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb520c",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03124.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb520e",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03287.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5215",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04173.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5216",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04190.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb521c",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10037.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb522e",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04221.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5237",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00962.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5242",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04635.JPG",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb524d",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-18.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb524f",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-21.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5256",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_fwg.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525c",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_rally_2.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525e",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_skill_training.JPG",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525f",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_survey.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5260",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_uthon_boithok_1.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5264",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/SAM_0466.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb511e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LY4dSZJ/DSC05091.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5126",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/N2SYKzq/DSC05117.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb512d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/sKbVFyk/DSC04568.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb512e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1LdSMGP/DSC04570.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5131",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RB3JM4T/DSC04593.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5135",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zZpVFYz/DSC04612.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb513b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/fqQNYRk/DSC04683.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5147",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/FxLW2Wz/DSC04824.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb5154",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/N6c1G8k/DSC04910.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5157",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C2CH1qT/DSC04919.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb515f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hfNfDPW/DSC04940.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5160",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3sHH2hb/DSC04943.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5162",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/f2HTYHD/DSC04961.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5167",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7rC9rPJ/DSC04991.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb516a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/XpGXk0n/DSC05000.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb516c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/FKzQSwg/DSC05014.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb516d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gVJ7zHy/DSC05015.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5173",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/SPPHs90/DSC05042.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5174",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7NBdhzD/DSC05046.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5175",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/mHQLfn9/DSC05056.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5178",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dGZBjJQ/DSC05064.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5182",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/THpjp95/DSC05118.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb518e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/x192k5s/DSC04571.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb518f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/S3FwpPG/DSC04573.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5192",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qmgkmG4/DSC04604.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5196",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/BskdqBr/DSC04625.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb519a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0nVymJk/DSC04665.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb519c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QrjCx18/DSC04671.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb519d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Xs8LGdz/DSC04673.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb51a2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kHrQnKL/DSC04704.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51a7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/NsCDwMD/DSC04774.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51a8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qy9ymB5/DSC04784.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51a9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6vF43Yn/DSC04788.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51b0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/9Wx9ZnT/DSC04807.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51b2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zbRxM5Q/DSC04816.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb51b5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Gx55Lfn/DSC04825.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51b8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ZJLNmsy/DSC04831.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51bb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0mzt0Rg/DSC04841.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51c0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1RvsF4y/DSC04858.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51c1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zXFGmHh/DSC04870.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51c2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Lpdb6SS/DSC04873.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51c5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cFvv78W/DSC04915.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51ce",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6m46B1P/DSC04973.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51d4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/z75BFrx/DSC05008.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51dc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/h9KKPmw/DSC05049.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/G7VNqzn/DSC05088.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gtCCBQx/DSC05092.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pnDxHzv/DSC05102.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51e8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4Z3CkXc/DSC05106.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51f1",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01057.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51f2",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01072.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51f3",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01077.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51f4",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01094.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51f7",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01155.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51fb",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01532.JPG",
                "cat": {
                    "id": "61cc271db3c8bc259cba0a8c",
                    "name": "Picture Electronices Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5201",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01943.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5202",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01958.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb5204",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02116.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5205",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02139.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61cf024729c16115aceb5207",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02481.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb520f",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03364.JPG",
                "cat": {
                    "id": "61cb50de370e5010280e65b5",
                    "name": "Picture Poultry"
                }
            },
            {
                "id": "61cf024729c16115aceb5210",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03379.JPG",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5213",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03489.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb521a",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04910.JPG",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5058",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6rvRvLk/DSC05126.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5059",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DCX29fw/DSC04523.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb505d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Hn3TGvj/DSC04542.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5062",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/L8Pyf7q/DSC04599.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb506e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/BrHzJrH/DSC04644.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5074",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Cwd3qsZ/DSC04675.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5075",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/xsc912V/DSC04688.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5078",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pZ0pLXG/DSC04700.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb507c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/sPykR0X/DSC04775.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb507d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Rv7dT9b/DSC04779.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5081",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/rsNfMQf/DSC04804.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5083",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VSC0LY4/DSC04808.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5089",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/L9mYq4S/DSC04862.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb508c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kSZVZrQ/DSC04884.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5095",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QmMwZRx/DSC04525.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5098",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Q6zw6xW/DSC04535.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5099",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/bHz45Th/DSC04548.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb509d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cxdX5hq/DSC04559.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb50a9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/S7QnLQn/DSC04659.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50ad",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1YcLFWS/DSC04698.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50b3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cQGRgcS/DSC04770.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50b6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/MRvp8nX/DSC04776.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50b8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ZT76yfn/DSC04787.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50c7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TtXN0zS/DSC04847.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50d2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tb1ntCt/DSC04942.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50d4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YNVpGR1/DSC04959.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pnWBsmb/DSC05031.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50e2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/mCps7QX/DSC05034.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/r0tbSdh/DSC05051.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DKtQBTL/DSC04875.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50f9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/RDnRy3N/DSC04889.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50fa",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/mJpsFGB/DSC04893.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50ff",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/mRyPkK6/DSC04911.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5102",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qm2ZRbZ/DSC04923.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5107",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/G5XWBpN/DSC04954.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb510e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QXpGHS5/DSC04979.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb510f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LxxTZnx/DSC05012.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5114",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/yBPnxbV/DSC05053.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5116",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DwsX30V/DSC05067.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb511a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3sspx8d/DSC05073.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb511f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/yXGwBFZ/DSC05093.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5121",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/47n59tc/DSC05108.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5122",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2qpqvWV/DSC05112.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5127",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/K9HkhKD/DSC05123.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5128",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/JcNLRrz/DSC04537.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5140",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4TGV9YT/DSC04781.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5148",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Ntj7WXR/DSC04830.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb5151",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/WyvP24m/DSC04896.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5153",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KGr4KyP/DSC04908.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5158",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VmZTX7K/DSC04921.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5163",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/s21vc00/DSC04963.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5165",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gJd7NKt/DSC04972.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5166",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Yp6Pg1s/DSC04990.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb516e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pzbt9jq/DSC05018.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5170",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qxhQB0L/DSC05027.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5171",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5Y9t5Rh/DSC05028.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5179",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VNs6VTv/DSC05069.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb517b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7Q22Bh5/DSC05082.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb517f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/8DnQ5jP/DSC05103.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5184",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/9qhqd8k/DSC05132.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5190",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1qqz7Rm/DSC04577.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5191",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LNTTQns/DSC04602.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5195",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pL4X7h9/DSC04615.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb519b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1MVNpWn/DSC04666.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb521b",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04973.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5222",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12760.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5223",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12814.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5224",
                "dt": "2021-12-28",
                "unit": "Annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12848.JPG",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5226",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01574.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5227",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01641.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5238",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00983.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5239",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01006.JPG",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb523b",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01182.JPG",
                "cat": {
                    "id": "61cb4f74370e5010280e65b3",
                    "name": "Picture Block Batik"
                }
            },
            {
                "id": "61cf024729c16115aceb523c",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01699.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb523d",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01999.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5245",
                "dt": "2021-12-28",
                "unit": "Annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12178.JPG",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5246",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12398.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5247",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12476.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5248",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12491.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5249",
                "dt": "2021-12-28",
                "unit": "Annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12784.JPG",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb524a",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12884.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb524b",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit%20-20.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb505b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/dg7zRZJ/DSC04528.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5065",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DWc5ZZ4/DSC04616.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5067",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/b3VQQWt/DSC04629.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5068",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GcPgwjX/DSC04635.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb506a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4P7wxGx/DSC04638.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb506b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0tfjLBR/DSC04639.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb506c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1Mx31J9/DSC04640.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5072",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/8BF02bs/DSC04667.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5073",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1Gz9Qpz/DSC04668.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5077",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tBy7MVb/DSC04699.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5084",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/DVpWx9F/DSC04818.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5086",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/L9TxbKM/DSC04838.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb5087",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cQgQJr0/DSC04840.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb508e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qmd65ch/DSC04891.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5092",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/56f5Qgc/DSC04520.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5093",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TcmZnPf/DSC04521.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5096",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/m4qHM4j/DSC04533.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5097",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/bJkBX07/DSC04534.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50a0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6nBT85Z/DSC04583.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50a1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/1Q6KQ8W/DSC04592.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb50a5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Jr0LbT7/DSC04623.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50ae",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/C5VtKg9/DSC04702.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb50b2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/g46Nj2n/DSC04769.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50b9",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/HTZxb9c/DSC04789.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50ba",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/BtY9N80/DSC04802.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50bd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/wYp9v20/DSC04814.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50c0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3v3xk3J/DSC04823.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50c5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/374rFfd/DSC04843.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb50cd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5kbVJZf/DSC04929.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50d5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vV5sM95/DSC04966.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb50dd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nknXZqD/DSC05024.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb50e3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hYnTT6x/DSC05036.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50e5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/s1RNwfL/DSC05047.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50eb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/F0nj7vY/DSC05081.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50ee",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/K0dFNYp/DSC05095.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50ef",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/djPgqt9/DSC05097.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nPgmzxz/DSC05105.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb50f2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/fnN9rgK/DSC04866.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50f4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tZzv8wb/DSC04869.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb50fb",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/JnhF9Q9/DSC04894.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb50fe",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/8KRHPzV/DSC04903.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5103",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/M2vyR29/DSC04934.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5106",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gFcX9d2/DSC04952.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb510b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/XjgXpw3/DSC04965.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb510c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jMPMfXn/DSC04974.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb510d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/HHXJtpr/DSC04975.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5112",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/WgNxNMd/DSC05030.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5113",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gD0KvP6/DSC05038.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5118",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/g68RBYF/DSC05071.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5119",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LrNkk13/DSC05072.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb511c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5vQ0Mtm/DSC05079.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5120",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/XZ58jrP/DSC05101.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5123",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7nrvgXL/DSC05113.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5125",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/ynNwJ2f/DSC05116.jpg",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5129",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/hgnsyjh/DSC04546.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb512c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/p3r0ZVB/DSC04551.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5130",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/18Lj8Qz/DSC04578.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5132",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/6tYSK84/DSC04596.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5134",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/5RWyXCx/DSC04611.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5136",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/G5WYhw4/DSC04630.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb5137",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/HqykVLR/DSC04631.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb513c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/z4GPX6p/DSC04689.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5141",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/pxjVK5C/DSC04791.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5146",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GktNVQm/DSC04820.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5149",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/McGSWpw/DSC04834.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51a4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gzcSDTS/DSC04761.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51aa",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/LJvwLKM/DSC04790.jpg",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51ac",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/G34JPTb/DSC04799.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51af",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/kmd1GV5/DSC04806.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51b7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cbmN5sq/DSC04829.jpg",
                "cat": {
                    "id": "61cd636cb48c1c1cec1d305c",
                    "name": "Picture Health"
                }
            },
            {
                "id": "61cf024729c16115aceb51bd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/NTy9TBV/DSC04851.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51be",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/fYZh6Lx/DSC04852.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51c3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zFw0Wc7/DSC04904.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51c6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Bn1N6M6/DSC04920.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb51c8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/cvQNFP0/DSC04927.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51cc",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CwMcR0p/DSC04951.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51cd",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/vJj6VCN/DSC04971.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51cf",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/TYBt5HK/DSC04992.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51d0",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/tJ2cyZ9/DSC04996.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51d1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/2nvcBHT/DSC04997.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51d3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zPyPBkb/DSC05005.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51d7",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/JrgRDRR/DSC05039.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51d8",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/0QVzDpb/DSC05041.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51de",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/QXzTcdd/DSC05060.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51df",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YPtW9Rm/DSC05076.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51e3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/9WbsbZx/DSC05090.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e9",
                "dt": "2021-12-26",
                "unit": "Bashar License -2",
                "picurl": "https://i.imgur.com/6vFapRj.jpg",
                "cat": {
                    "id": "61c6f34be23bcb091c5d3bc5",
                    "name": "Licence"
                }
            },
            {
                "id": "61cf024729c16115aceb51ea",
                "dt": "2021-12-28",
                "unit": "Carpentry Trade",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00511.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb51eb",
                "dt": "2021-12-28",
                "unit": "Block Batik",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00529.JPG",
                "cat": {
                    "id": "61cb4f74370e5010280e65b3",
                    "name": "Picture Block Batik"
                }
            },
            {
                "id": "61cf024729c16115aceb51ed",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00981.JPG",
                "cat": {
                    "id": "61cb50de370e5010280e65b5",
                    "name": "Picture Poultry"
                }
            },
            {
                "id": "61cf024729c16115aceb51f5",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01108.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51fa",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01520.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51fc",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01534.JPG",
                "cat": {
                    "id": "61cc271db3c8bc259cba0a8c",
                    "name": "Picture Electronices Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5206",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02175.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5208",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02753.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5212",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03456.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5214",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04167.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5218",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04531.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb521d",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10040.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb521f",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12460.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5220",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12497.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5225",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC16120.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb522c",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03323.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb5230",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10027.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb5231",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10401.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5235",
                "dt": "2021-12-28",
                "unit": "Vermi Compost",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00727.JPG",
                "cat": {
                    "id": "61cc0da6a0c9500c3c091982",
                    "name": "Picture Vermicompost"
                }
            },
            {
                "id": "61cf024729c16115aceb5236",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC00754.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb523e",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02483.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb523f",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02495.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5241",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03328.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb524e",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-19.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5250",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-22.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5251",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-25.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5252",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-31.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5253",
                "dt": "2021-12-30",
                "unit": "RTU Business",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_business.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5254",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_computer_training.JPG",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5258",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_job_counciling.JPG",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525a",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_lsg_2.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525b",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_rally_1.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5261",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_uthon_boithok_2.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5262",
                "dt": "2021-12-30",
                "unit": "Photo",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Photo.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5263",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/SAM_0460.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5265",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/SAM_0474.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb514b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Q836c9V/DSC04861.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb514e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/m6ZhBTQ/DSC04871.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5150",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YRM3F5f/DSC04878.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5152",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/gSndynk/DSC04900.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5159",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/VQpqZcT/DSC04922.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb515b",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/BCJX7TQ/DSC04931.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb515d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KFRmYTX/DSC04935.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb515e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nzktsmg/DSC04937.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5161",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YZPQw07/DSC04956.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5164",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/FXgkDfZ/DSC04970.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5168",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/JtKNHG1/DSC04993.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb516f",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/n7t8kWW/DSC05022.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5172",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/XbYvWPp/DSC05040.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5176",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/x8PbmgV/DSC05061.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5177",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/4jt6Ls2/DSC05062.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb517c",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/rGSCtWd/DSC05085.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb517d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/YfPY7Fw/DSC05089.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb517e",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KFZ8P60/DSC05098.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5180",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/xjpMYQM/DSC05104.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5181",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/GVnmzkZ/DSC05107.jpg",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb518a",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/WvrM9CW/DSC04545.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb518d",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/L1MJWPY/DSC04565.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5193",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/p1w9TMt/DSC04607.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5194",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/3yykghM/DSC04610.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5197",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CJ0RxGF/DSC04627.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb5199",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/9Z5qh6Y/DSC04655.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb51a1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/7nrgjvq/DSC04687.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51a3",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/nRkT17N/DSC04758.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51a5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zJyPc0k/DSC04762.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51a6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/Gc3r9Yx/DSC04772.jpg",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb51ad",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/qM7TSs9/DSC04800.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51b1",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/sghfT8C/DSC04812.jpg",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb51c4",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/CHn4LFZ/DSC04914.jpg",
                "cat": {
                    "id": "61d2ca5ec4f00400dc9c2789",
                    "name": "Adolescent Empowerment"
                }
            },
            {
                "id": "61cf024729c16115aceb51ca",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/zR8MrC5/DSC04944.jpg",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51d2",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/wWTDWyg/DSC05002.jpg",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb51da",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/jGqMJTc/DSC05045.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e5",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/8cGwky4/DSC05096.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51e6",
                "dt": "2021-12-25",
                "unit": "Bakshiganj Unit",
                "picurl": "https://i.ibb.co/KKykLfc/DSC05100.jpg",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb51f6",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01150.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb51f8",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01157.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb51f9",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01160.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5200",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01913.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5203",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02044.JPG",
                "cat": {
                    "id": "61cc04e6a0c9500c3c09197f",
                    "name": "Picture Garments Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb520a",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03003.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb520b",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03009.JPG",
                "cat": {
                    "id": "61cb5049370e5010280e65b4",
                    "name": "Picture Carpentry"
                }
            },
            {
                "id": "61cf024729c16115aceb520d",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03277.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5211",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03426.JPG",
                "cat": {
                    "id": "61cb54ef370e5010280e65b6",
                    "name": "Picture Mushroom"
                }
            },
            {
                "id": "61cf024729c16115aceb5217",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04322.JPG",
                "cat": {
                    "id": "61d1347290da3f2160f959ba",
                    "name": "Picture Out Door Class"
                }
            },
            {
                "id": "61cf024729c16115aceb521e",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10043.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb5221",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12584.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5228",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01803.JPG",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61cf024729c16115aceb5229",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01970.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb522a",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC02262.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb522b",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03275.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb522d",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03374.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb522f",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04872.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5232",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC10406.JPG",
                "cat": {
                    "id": "61cadf3828e4e126a868feee",
                    "name": "CMES All Picture"
                }
            },
            {
                "id": "61cf024729c16115aceb5233",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC12446.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb5234",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/SDC14913.JPG",
                "cat": {
                    "id": "61d136ac90da3f2160f959bb",
                    "name": "Picture Pre School"
                }
            },
            {
                "id": "61cf024729c16115aceb523a",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC01172.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5240",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC03308.JPG",
                "cat": {
                    "id": "61cc05a0a0c9500c3c091980",
                    "name": "Picture Welding Trade"
                }
            },
            {
                "id": "61cf024729c16115aceb5244",
                "dt": "2021-12-28",
                "unit": "annual report 2015",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC05101.JPG",
                "cat": {
                    "id": "61cc0771a0c9500c3c091981",
                    "name": "Picture Showroom/Mela"
                }
            },
            {
                "id": "61cf024729c16115aceb524c",
                "dt": "2021-12-30",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Edit-17.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61cf024729c16115aceb5255",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_cwc_meeting.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5257",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_garments_training.JPG",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb5259",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_lsg_1.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61cf024729c16115aceb525d",
                "dt": "2021-12-30",
                "unit": "RTU Project",
                "picurl": "https://aslamzaman.github.io/photogalary/RTU/rtu_rally_3.jpg",
                "cat": {
                    "id": "61cd77a8b48c1c1cec1d3066",
                    "name": "RTU Project"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc8",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010787.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc2",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010046.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc3",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010296.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc9",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010797.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cca",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010903.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9ccb",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010916.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9ccc",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011095.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9ccd",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011228.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9ccf",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011255.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd0",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011344.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd1",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011464.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc4",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010307.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc7",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010699.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc5",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010684.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cc6",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1010697.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd2",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011519.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd3",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011521.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd5",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011579.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cce",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011237.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d12e3f87c4fe1f740d9cd4",
                "dt": "2022-01-02",
                "unit": "Chairman",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/P1011544.JPG",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d1ce2da633911f68b80279",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/10. Udghatio DNA Utsarito Sombhabona (Mohabisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027b",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/12. Bisso Jalbayu Poribarton Gabesonagulo Ki (Sobar Jonno Sarboses Biggan).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80287",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/23. Dabol Helix.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80288",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/24. Ratvor Surjo.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028b",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/27. Khude Bigganir Project.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028d",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/29. Nutan Abas Nutan Porsir Khoje (Moha Bisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80290",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/31. Poribesh O Nagor Jibon.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80291",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/32. Pormanu Die Gora (Sobar Jonno Sarboses Biggan 3).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80292",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/33. Projukti Sonaton Theke Adhunik.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2ea633911f68b80298",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/6. Jibon Chritite Manush Desh Biggan (2nd part) Cover page.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2ea633911f68b8029b",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/9. Amra Kibhave Chinta Kori (Moha Bisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80284",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/20. Jal Pare Pata Nare.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80285",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/21. Satyndranath Basu.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80289",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/25. Pormanu O Konica Chitro.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028c",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/28. Mohabisser Bayos O Amader Mohajagotik Shikor (Moha Bisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028f",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/30. OI Akash Na Dakle.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80293",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/34. Sayomborar Rangin Pasondo.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80295",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/36. Soto Pran Soto Kotha.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2ea633911f68b80297",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/5. Prakritik drissopot.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2ea633911f68b80299",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/7. Jibon Chritite Manush 1st part.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80278",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/1. Quantum Tatter Ajob cover.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027a",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/11. Africa Theke Gani Amra (Sobar Jonno Sarboses Biggan).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027f",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/16. Bisso Bhubhone Ami Kothay.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80281",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/18. Charsato Koti Basorer Prithibi O Pran.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80282",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/19. Jibo Boichitro O Amader Bhobissot.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80283",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/2. Shikor.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80286",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/22.%20%20Biggan%20Barnali.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028a",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/26. Manusher Payer Awaj.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8028e",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/3. People and Science.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80294",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/35. Shkkha Biggan Darson.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80296",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/4. Biggan Jinisti Ki.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2ea633911f68b8029a",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/8. Bisso Jalbayu Poribarton Gabesonagulo Ki (Moha Bisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027c",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/13. Chirayoto and Boiplobik Biggan.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027d",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/14. Africa Theke Gani Amra (Moha Bisse Manush).jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b8027e",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/15. Biggan Ranna Ghare, Jadu Ghare.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1ce2da633911f68b80280",
                "dt": "2022-01-02",
                "unit": "Chairman Books",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/books/17. Bristi O Bajro.jpg",
                "cat": {
                    "id": "61d1ca9eca46b32b7c92c99a",
                    "name": "Chairman Books"
                }
            },
            {
                "id": "61d1d71bac35880c242157db",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC03384.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157d7",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/43392894_271424690168119_1966756178713116672_n.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e0",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0839.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157d8",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC00816.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157dd",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC07463.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157df",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC07514.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e6",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_1039.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e7",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_1132.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157d5",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/1.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157d6",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/15.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157da",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC02360.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157de",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC07500.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e1",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0892.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e5",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0980.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157d9",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC02128.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157dc",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC03411.JPG",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e2",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0917.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d1d71bac35880c242157e3",
                "dt": "2022-01-02",
                "unit": "Donors Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0948.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d27a9e5fe46e2dd0646928",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/YLLGsKb/page-4.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d27b7e5fe46e2dd0646929",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/4FPJZq4/page-1.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d27b8e5fe46e2dd064692a",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/qMPb1Nv/page-5.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d27ba45fe46e2dd064692b",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/gMTbq08/page-3.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d27bb35fe46e2dd064692c",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/Dp3QcW9/page-6.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d27bc65fe46e2dd064692d",
                "dt": "2022-01-03",
                "unit": "VAT & TAX",
                "picurl": "https://i.ibb.co/3Fy0515/page-3.jpg",
                "cat": {
                    "id": "61c7f7a2d8dc741e4ca41fa6",
                    "name": "VAT & TAX"
                }
            },
            {
                "id": "61d28d6fc4f00400dc9c2785",
                "dt": "2022-01-03",
                "unit": "Microbus Reg. 4936",
                "picurl": "https://ul88rzfeazzxue1pcrpszg-on.drv.tw/www.aslamzaman.com/vehicle/Microbus_registration_4936.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61d28de6c4f00400dc9c2787",
                "dt": "2022-01-03",
                "unit": "Microbus 4937 Registration",
                "picurl": "https://i.ibb.co/FD12hsd/MICROBUS-REG-4937.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61d2cf3dc4f00400dc9c278a",
                "dt": "2022-01-03",
                "unit": "Mobile Sim Card",
                "picurl": "https://aslamzaman.github.io/photogalary/Mobile_Sim/Mobile_Sim_BTRC.jpg",
                "cat": {
                    "id": "61c8018cd8dc741e4ca41fae",
                    "name": "Mobile Phones"
                }
            },
            {
                "id": "61d31d4638fe431560a1df2e",
                "dt": "2022-01-02",
                "unit": "Donor Visit",
                "picurl": "https://aslamzaman.github.io/photogalary/Donor Visit/DSC_0978.jpg",
                "cat": {
                    "id": "61d1d48a3933a113340fb0ff",
                    "name": "Donors Visit"
                }
            },
            {
                "id": "61d3217f38fe431560a1df30",
                "dt": "2022-01-03",
                "unit": "Local TA Bill",
                "picurl": "https://i.postimg.cc/hG9nV0pT/Local-TA-Bill.png",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61d3255a38fe431560a1df31",
                "dt": "2022-01-03",
                "unit": "TA Bill",
                "picurl": "https://i.ibb.co/WNCxWRn/TA-BILL.png[/img",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61d3e4d9ee25f71df837943b",
                "dt": "2022-01-04",
                "unit": "Aslam Zaman",
                "picurl": "https://i.ibb.co/fXFF5rS/black-white.jpg",
                "cat": {
                    "id": "61c6f361e23bcb091c5d3bc8",
                    "name": "NID"
                }
            },
            {
                "id": "61d6ae3b76da6d0bc41d7769",
                "dt": "2022-01-06",
                "unit": "Sir wife",
                "picurl": "https://aslamzaman.github.io/photogalary/Chairman/Sir%20wife%203.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61d6af9c76da6d0bc41d776a",
                "dt": "2022-01-06",
                "unit": "NGO Bureao",
                "picurl": "https://i.ibb.co/sqV3mQ9/NGOAB-Certificate-New.jpg",
                "cat": {
                    "id": "61c6f34be23bcb091c5d3bc5",
                    "name": "Licence"
                }
            },
            {
                "id": "61dc06cbc9ece12a70212edf",
                "dt": "2022-01-10",
                "unit": "fgsderfds",
                "picurl": "https://aslamzaman.github.io/photogalary/Annual_Report_15/DSC04705.JPG",
                "cat": {
                    "id": "61cd865857925002581be78e",
                    "name": "CMES Schooll Campus"
                }
            },
            {
                "id": "61dff4250bab511ec40c7491",
                "dt": "2022-01-13",
                "unit": "Bearer Cheque",
                "picurl": "https://i.ibb.co/ZXhRFsS/Bearer-Cheque.jpg",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61dff5100bab511ec40c7492",
                "dt": "2022-01-13",
                "unit": "GO",
                "picurl": "https://i.ibb.co/gZmspQ3/GO.jpg",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61dff6de0bab511ec40c7493",
                "dt": "2022-01-13",
                "unit": "IOU",
                "picurl": "https://i.ibb.co/jgnRQVq/IOU.jpg",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61dffb980bab511ec40c7494",
                "dt": "2022-01-13",
                "unit": "CMES PAD",
                "picurl": "https://i.ibb.co/ChCGpmb/CMES-PAD.png",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61e000230bab511ec40c7495",
                "dt": "2022-01-13",
                "unit": "Envalope",
                "picurl": "https://i.ibb.co/Bn9XjkD/Envalope.jpg",
                "cat": {
                    "id": "61d3214338fe431560a1df2f",
                    "name": "Format"
                }
            },
            {
                "id": "61e507a3cc05580de874d7eb",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399108710.gif",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e507fecc05580de874d7ec",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399133414.gif",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e5081ccc05580de874d7ed",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399154301.gif",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e50835cc05580de874d7ee",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399175014.jpg",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e5084dcc05580de874d7ef",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399188822.jpg",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e50867cc05580de874d7f0",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399201494.jpg",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e5087fcc05580de874d7f1",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399213086.jpg",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e50894cc05580de874d7f2",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399225223.JPG",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e508a8cc05580de874d7f3",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399238198.JPG",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e508becc05580de874d7f4",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399252942.JPG",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e508d9cc05580de874d7f5",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399270166.JPG",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e508f1cc05580de874d7f6",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399285270.JPG",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e50906cc05580de874d7f7",
                "dt": "2022-01-17",
                "unit": "Disadvantage",
                "picurl": "https://aslamzaman.github.io/photogalary/Disadvantage/1642399298054.jpg",
                "cat": {
                    "id": "61c6f368e23bcb091c5d3bc9",
                    "name": "Disadvantage Student"
                }
            },
            {
                "id": "61e8f30f0e47112930bae088",
                "dt": "2022-01-20",
                "unit": "Uttara House",
                "picurl": "https://i.ibb.co/TtzGCgx/Uttara.jpg",
                "cat": {
                    "id": "61cd6bfab48c1c1cec1d305d",
                    "name": "Chairman Sir Pic"
                }
            },
            {
                "id": "61ec37d2a1a93517000d58d5",
                "dt": "2022-01-22",
                "unit": "Pajero Registration",
                "picurl": "https://i.imgur.com/wtGyYx3.jpeg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f79c6946889805747a6d07",
                "dt": "2022-11-09",
                "unit": "Pajero Insurance",
                "picurl": "https://i.ibb.co/F6j5CB1/Pajero-Insurance.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f79e525cd28c237034a1f3",
                "dt": "2022-11-09",
                "unit": "Pajero Taxtoke",
                "picurl": "https://i.ibb.co/R6qdNkm/Tax-token-for-Pajero-Jeep.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f79eee5cd28c237034a1f4",
                "dt": "2022-11-09",
                "unit": "Microbus 4937 Insurance",
                "picurl": "https://i.ibb.co/ZT0kbfp/Insurance-53-4937.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f79f105cd28c237034a1f5",
                "dt": "2022-11-09",
                "unit": "Microbus 4937 Taxtoken",
                "picurl": "https://i.ibb.co/Gkc6t9N/Tax-Token-53-4937.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "1668016606526",
                "dt": "2022-11-09",
                "unit": "Microbus 4937 Fitness",
                "picurl": "https://i.ibb.co/pyYwY3S/Fitness-53-4937.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f8b7ba4834a127300a94d3",
                "dt": "2022-11-09",
                "unit": "Microbus Taxtoken. 4936",
                "picurl": "https://i.ibb.co/zNy7RSp/Tax-Token-53-4936.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "61f8b7e14834a127300a94d4",
                "dt": "2022-11-09",
                "unit": "Microbus Insurance 4936",
                "picurl": "https://i.ibb.co/924Vzqt/Insurance-53-4936.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            },
            {
                "id": "1668016490616",
                "dt": "2022-11-09",
                "unit": "Microbus Fitness 4936",
                "picurl": "https://i.ibb.co/N3TqZY5/Fitness-53-4936.jpg",
                "cat": {
                    "id": "61c6f341e23bcb091c5d3bc4",
                    "name": "Vehicles"
                }
            }
        ],
        mobile: [
            { id: 1, name: "Office & Organization", mobile: "01711439324" },
            { id: 2, name: "Chairman", mobile: "01711564665" },
            { id: 3, name: "Chairman Teletalk", mobile: "01540186935" },
            { id: 4, name: "Establishment", mobile: "01730051229" },
            { id: 5, name: "A/C", mobile: "01766667350" }
        ]

    }
}
