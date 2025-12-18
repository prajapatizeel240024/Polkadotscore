const asciiArt = `              ,   ,-',
        ,', ,'  ','  ,'   ÅÑGË£ÏÇÄ †(–)Ë ßRÄ†
      '-',  '      ,'
          ' -,    ',
              ' -, ',                                         , - - -,
             ('''''' ®'''''''')                        ,,,,,    ,-' -,''''''''',
              \` ~„''\`„~ '                          ',  ,', -' , -,'' ''''''''',
                  "„  " - „                   „ - ",®,-'     \`~~' '''''''
                 „"         " „         „ - "      ,',,,',
               „-" " " " " " " ~~~~~~" - „       ,'
            „" –,'' ~ ,       • ; •          "      "„
            """";      ' - , ,  ; , , , - '' ' ' -,_ ', ',
           , -' ' ',           ,'    ,'             ',~', ',
         ,'         ' - , ,()' /\\    ',          (),'¯ ,'   \`¸\`;
         ',                            \` \` \` \` \` \`      ,-,,,-'
           '-,                                  ,¬  ,-'
              ' -, ~            ~~~~~~' ' \` ,-'
                  \`~-,,,,,,,      ,,,,,,,,,,-~'
      ('('('(,,,              ;    ;                •Å(V)åö•
       '-, '-,'''      ,-';\`,\`'ˆˆˆˆˆ ,' ;' ' -,           •97•
         ;¯ ;      ;  ;  ', ; ; ,'  ;  ‚¸  ' -,        •••
         ;   ;     ;       '''''''''''    \`\`'-,',  ,'
         ;   ;, -¬;    O   O      O   '-',,,,,,,,,,,,
         ;        ;  O   O     O O    O  ,'     O     ,'
          ' - - ' \`;    O        O  O    O   O    ,'
               ,-'   O    O    O  O      O    O   ,'
            ,-' O O  O   O        O        O ,'
         ,-'   O      O   O   O     O  O     ,'
      ,-'  O    O    O  O   O   O O O   O,-'-,
       \`\`¬ -,,,,,,,-¬~,~~~~~~~~~--',)  (' -,
                    ',   (',                     ' -,    '-,
                     ',)  (',                        \`-,)  ' -,
                      ',    ',                           \`-,  ,',-----,
                       ',)   ;                              \`\\,- ---'
                   ¸,,,,'‡  (;
                  (¸,,,,,';_'\\ ßy §(V)òó†(–)775 ™`;

function computePolkadotScore(art) {
  const lines = art.split('\n');
  
  let lipsStartX = null;
  let lipsEndX = null;
  let pupilChars = 0;
  
  // Find pupils (• ; •) and lips (~~~~~~)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Find pupils - the • characters in "• ; •"
    if (line.includes('• ; •')) {
      pupilChars = 2; // Two • characters represent the pupils
    }
    
    // Find lips - the ~~~~~~ pattern (only first occurrence on face)
    if (line.includes('~~~~~~') && i > 10 && lipsStartX === null) {
      lipsStartX = line.indexOf('~~~~~~');
      lipsEndX = lipsStartX + 5; // ~~~~~~ is 6 chars
    }
  }
  
  // Count polkadots (O characters)
  let polkadotsOutside = 0;
  let polkadotsInside = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let x = 0; x < line.length; x++) {
      if (line[x] === 'O') {
        if (x >= lipsStartX && x <= lipsEndX) {
          polkadotsInside++;
        } else {
          polkadotsOutside++;
        }
      }
    }
  }
  
  // Formula: Outside + (Inside * PupilChars)
  const score = polkadotsOutside + (polkadotsInside * pupilChars);
  
  console.log(`Lips range: x=${lipsStartX} to x=${lipsEndX}`);
  console.log(`Pupil characters: ${pupilChars}`);
  console.log(`Polkadots outside: ${polkadotsOutside}`);
  console.log(`Polkadots inside: ${polkadotsInside}`);
  console.log(`Formula: ${polkadotsOutside} + (${polkadotsInside} * ${pupilChars}) = ${score}`);
  
  return score;
}

const score = computePolkadotScore(asciiArt);
console.log(`\n*** POLKADOT SCORE: ${score} ***`);
