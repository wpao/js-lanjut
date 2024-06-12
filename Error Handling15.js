// Error Handling

function cobaPromise() {
  return fetch('http://localhost:3000/api/items')
    .then(response => {
      // Cek apakah respons tidak ok (status tidak 200-299)
      if (!response.ok) {
        // Jika respons tidak ok, lempar error
        throw new Error('Maaf tuan, ' + response.statusText);
      }
      // Kembalikan respons sebagai JSON
      return response.json();
    })
    .then(data => {
      // Lakukan sesuatu dengan data
      console.log(data);
    })
    .catch(error => {
      // Tangani kesalahan di sini
      console.error('Terjadi kesalahan:', error);
    });
}


async function cobaAsync () {
  try {
    const coba = await cobaPromise()
    console.log(coba);
  } catch (error) {
    // console.log('aaauuuuu' + error);
    console.error('aaauuuuu ' + error);
  }
}
cobaAsync()