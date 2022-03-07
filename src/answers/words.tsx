const c3: string[] = ["aba", "act", "age", "ala", 	"ant", 	"ape", 	"arc", 	"art", 	"ass", 	"bat", 	"bin", 	"but", 	"cot", 	"dew", 	"dry", 	"end", 	"fly", 	"gin", 	"her", 	"icy", 	"jet", 	"jun", 	"log", 	"mon", 	"nil", 	"orb", 	"pet", 	"rad", 	"rim", 	"rum" ];
const c4: string[] = ["away", "been", "bulk", "coal", "dial", "duke", "fear", "file", "gene", "good", "hold", "huge", "keep", "lack", "lose"];
const c5: string[] = ["about", "after", "allow", "basis", "brown", "clean", "drama", "enter", "fifty", "group", "legal", "mount", "point", "prior", "prize", "proud", "queen", "ratio", "rural", "short", "solid", "sound", "south", "speed", "spend", "stage", ];
const c6: string[] = ["abroad", "attack", "camera", "copper", "decide", "defeat", "expert", "fabric", "foster", "future", "junior", "launch", "martin", "mental", "motion", "notice",];
const c7: string[] = ["ability", "arrival", "clothes", "command", "council", "cutting", "fiction", "however", "liberal", "neutral", "organic", "passive", "primary", "Reading", "regular",];

const words  = (char: number) => {

  // if (char === 5) {
  //   return c5
  // } else if (char == 6) {
  //   return c6
  // } else {
  //   return c7
  // }

  switch (char) {
    case 4:
      return c4;
      break;
    case 5:
      return c5;
      break;
    case 6:
      return c6;
      break;
    case 7:
      return c7;
      break;
    default:
      return c3;
      break;
  }
}

export default words;