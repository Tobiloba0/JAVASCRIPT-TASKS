
        for (let day = 1; day <= 12; day++) {
            Console.log("On the ");

            switch (day) {
                case 1-> console.log("first");
                case 2-> console.log("second");
                case 3-> console.log("third"); 
                case 4-> console.log("fourth"); 
                case 5-> console.log("fifth"); 
                case 6-> console.log("sixth");
                case 7-> console.log("seventh");
                case 8-> console.log("eighth");
                case 9-> console.log("ninth"); 
                case 10-> console.log("tenth"); 
                case 11-> console.log("eleventh");
                case 12-> console.log("twelfth");
            }

            console.logln(" day of Christmas, my true love sent to me:");

            switch (day) {
                case 12 -> console.logln("Twelve drummers drumming");
                case 11 -> console.logln("Eleven pipers piping");
                case 10 -> console.logln("Ten lords a-leaping");
                case 9  -> console.logln("Nine ladies dancing");
                case 8  -> console.logln("Eight maids a-milking");
                case 7  -> console.logln("Seven swans a-swimming");
                case 6  -> console.logln("Six geese a-laying");
                case 5  -> console.logln("Five golden rings");
                case 4  -> console.logln("Four calling birds");
                case 3  -> console.logln("Three French hens");
                case 2  -> console.logln("Two turtle doves");
                case 1  -> console.logln(day == 1 ? "A partridge in a pear tree" : "And a partridge in a pear tree");
            }

            console.logln();
        }

