// Example IITK ID card QR string (format may vary):
// "IITK/240123/B.Tech/Computer Science/John Doe/2024"
// The roll number is a 6-digit number in the range 240001-240400.
// It appears as a standalone 6-digit sequence within the QR string.

function extractRollNumber(qrString) {
  const matches = qrString.match(/\d{6}/g);
  if (!matches) return null;

  const rollNumber = matches.find((num) => {
    const n = Number(num);
    return n >= 240001 && n <= 240400;
  });

  return rollNumber || null;
}

function isRegistered(rollNumber) {
  const n = Number(rollNumber);
  return n >= 240001 && n <= 240400;
}

if (require.main === module) {
  // Test with hardcoded strings
  const testCases = [
    'IITK/240123/BTech/CSE/John Doe',
    'ROLLNO:240400/NAME:Jane/DEPT:EE',
    'ROLLNO:239999/NAME:Bob/DEPT:ME',  // out of range
    'NO_DIGITS_HERE',
    '240001',
  ];

  testCases.forEach((str) => {
    const roll = extractRollNumber(str);
    console.log(`Input: "${str}"`);
    console.log(`  Roll: ${roll}, Registered: ${roll ? isRegistered(roll) : false}`);
  });
}

module.exports = { extractRollNumber, isRegistered };
