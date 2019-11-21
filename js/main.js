// var resPerson = {
//     name: '',
//     height: '',
//     gender: ''
// }

async function fetchSwapi(url) {
    try {  
      const response = await fetch(url);
      await response.json().then(res => {
        //   console.log(res.results.length)
        var table = '';
                var rows = res.results.length;
                var cols = 3;
                // <p>Hello</p>;
                for(var r = 0; r < rows; r++)
                {
                    table +='<tr>';
                        for(var a = 0; a < cols; a++){
                            table +='<td>' + a + '</td>';
                        }
                    table +='</tr>';
                }
                document.write('<table border=1><tr><th>Name</th>' +
                '<th>Height</th><th>Gender</th></tr>'+ table + '</table>')
      });
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }

fetchSwapi('https://swapi.co/api/people/');

// var table = '';
//                 var rows = 4;
//                 var cols = 3;
//                 // <p>Hello</p>;
//                 for(var r = 0; r < rows; r++)
//                 {
//                     table +='<tr>';
//                         for(var a = 1; a <= cols; a++){
//                             table +='<td>' + a + '</td>';
//                         }
//                     table +='</tr>';
//                 }
//                 document.write('<table border=1><tr><th>Name</th>' +
//                 '<th>Height</th><th>Gender</th></tr>'+ table + '</table>')

// document.getElementById("name").innerHTML = "OK";
// document.getElementById("demo").innerHTML = 'The first paragraph (index 0) inside';


// document.getElementById('name').innerHTML = res.name;
        // document.getElementById('height').innerHTML = res.height;
        // document.getElementById('gender').innerHTML = res.gender;