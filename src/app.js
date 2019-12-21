const fs = require("fs");
const path = require("path");
const pdf = require('html-pdf');
const handlebars = require("handlebars");

async function createPDF(data){
    var templateHtml = fs.readFileSync(path.join(__dirname, './template/invoice.html'), 'utf8');
	var template = handlebars.compile(templateHtml);
    
    var html = template(data);
    
    var options = { format: 'Letter' };

    pdf.create(html, options).toFile(path.join(__dirname,'./pdf/inovice.pdf'), function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
}
 
const data = {
    title: "A new Brazilian School",
    date: "05/12/2018",
    name: "Rodolfo Luis Marcos",
    age: 28,
    birthdate: "12/07/1990",
    course: "Computer Science",
    obs: "Graduated in 2014 by Federal University of Lavras, work with Full-Stack development and E-commerce."
}

createPDF(data)