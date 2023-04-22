//https://leetcode.com/problems/roman-to-integer/description/

function getInt(c: String){
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
    };
};

function romanToInt(s: string): number {
    let sum = 0;

    for(let i = 0; i<s.length; i++){

        if (i != (s.length - 1)) {
            if(s[i]=='I' && s[i+1]=='V') {
                sum = sum + 4;
                i++;
            } else if(s[i]=='I' && s[i+1]=='X') {
                sum = sum + 9;
                i++;
            } else if(s[i]=='X' && s[i+1]=='L') {
                sum = sum + 40;
                i++;
            } else if(s[i]=='X' && s[i+1]=='C') {
                sum = sum + 90;
                i++;
            }else if(s[i]=='C' && s[i+1]=='D') {
                sum = sum + 400;
                i++;
            }else if(s[i]=='C' && s[i+1]=='M') {
                sum = sum + 900;
                i++;
            }else {
                sum = sum + getInt(s[i]);
            }
        } else {
            sum = sum + getInt(s[i]);
        }
    }   
    return sum;
};
