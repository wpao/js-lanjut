
// calback js murni
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//           success(JSON.parse(xhr.response))
//       } else if (xhr.status === 404) {
//         error();
//       }
//   };
//   xhr.open('get', url);
//   xhr.send();
// }

// getDataMahasiswa('http://localhost:3000/api/items', result => {
//   result.forEach(element => {
//     console.log(element.name);
//   });
// }, () => {})


// jQuery
$.ajax({
  url: 'http://localhost:3000/api/items',
  success: (result) => {
    result.forEach(mhs => {
      console.log(mhs);
    });
  },
  error: (e) => { 
    console.log(e); 
  }
})