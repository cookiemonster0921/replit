const PDFExtract = require('pdf.js-extract').PDFExtract;
const fs = require('fs')

const pdfExtract = new PDFExtract();
const options = {
    firstPage: 671,
  lastPage: 671 
};
console.log('sd')
pdfExtract.extract('textbook.pdf', options, (err, data) => {
  if (err) return console.log(err);
  //console.log(data);
  ///console.log(data.pages)
  //console.log(data.pages[0].content)
  var list = []
  for (var i = 0; i < data.pages[0].content.length; i++) {
    list.push(data.pages[0].content[i].str)
  }
  console.log(list)
  console.log('s')
  fs.writeFile('p.txt', JSON.stringify(data), (err) => {
    if (err) {
      console.log(err)
    }
  })
});
