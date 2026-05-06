

// BigInt ✅

// JS mein hum variable mein integers ki ek maximum value hoti hai bas utni hi rakh sakte hain jo ke basically hum console mein Number.MAX_SAFE_INTEGER likh ker dekh  bhi sakte hain (9007199254740991) agar usse zyada badi integer value hum variable mein rakhenge to calculations mein mistakes  hongi for example maximum safe value jitni hai usmein agar hum +1 karenge to wo theek  jawaab dega but+2 karenge to ghalat,  +3  pesahi +4 pe ghalat aur aise hi calculations  wrong hoti rahengi. isse bachne ke liye hum BigInt ka use karte hain jo ke basically hum sirf apne integer value ke aage n laga dete hain phir chahe wo  value kitni hi bdi kyun na  ho usmein koi  problem nahi hogihum aagecalculations mein use is tarah use kar paayenge:

let maxSafeValue = 9007199254740991n;
// maxSafeValue = maxSafeValue + 4n;

// this method will work because our maxSafeValue is a bigint (big integer) now.

