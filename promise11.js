// contoh 0 =============================================
// fetch('http://localhost:3000/api/items')
//   .then(response => response.json())
//   .then(response => console.log(response))

// ==============================
// contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('janji ditepati')
//   } else {
//     reject('inkar janji')
//   }
// })

// janji1
//   .then(response => console.log('ok ' + response))
//   .catch(response => console.log('gagal ' + response))

// =====================================================
// // contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('janji ditepati')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       reject('inkar janji')
//     }, 2000)
//   }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2))); melihat pending
// janji2
//   .finally(() => console.log('selesai menunggu'))
//   .then(response => console.log('ok ' + response))
//   .catch(response => console.log('gagal ' + response))
// console.log('selesai');

// ===================================================
// Promise.all()
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'avengers',
      sutradara: 'sandhika',
      pemeran: 'dody, erik'
    }])
  }, 1000)
})

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'bandung',
      temp: 26,
      kondisi: 'cerah berawan'
    }])
  }, 500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([film, cuaca])
  // .then(response => console.log(response))
  .then(response => {
    const [film, cuaca] = response
    console.log(film);
    console.log(cuaca);
  })