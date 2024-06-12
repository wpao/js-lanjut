// fetch('http://localhost:3000/api/items')
//   .finally()
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch()

// =============
// fetch(resources, init)

// resources  adalah bisa berisi (url atau request object)

// response (properti)
// headers
// ok               --> response.ok
// redirected       --> if (status.redirected)
// status           --> if (status === 200)
// statusText
// type
// url
// body

// response (method)
// clone()
// error()
// redirect()
// blob()           --> tangani isi file saat upload
// formData()
// json()           --> response.json()
// text()


// init       adalah (optional) //configurasi tambahan pada sebuah request berbentuk object

//  isinya seperti
// method  --> GET, POST, etc..
// headers
// body
// mode
// cache
// referrer
// referrerPolicy
// integrity
// keepalive
// signal

