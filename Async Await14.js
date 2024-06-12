// async & await

// async =======

// asyncronous function  ---v ===============
// fungsi yang berjalan secara asyncronous 
// menghasilkan implisit promise //implisit = return value-nya promis meskipun tidak ada async
// cara penulisan seperti syncrounous

// "sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai"

// ini akan langsung selesai ============
// const coba = new Promise(resolve => resolve('selesai'))
// console.log(coba); // selesai

// ===============
// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000)
// })

// console.log(coba); // pending
// coba.then(() => console.log(coba)) // selesai
// ===============
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 2000
    if(waktu < 5000){
      setTimeout(() => {
        resolve('selesai')
      }, waktu)
    } else {
      reject('kelamaan')
    }
  })
}

// cara 1 
// tangani resolve, reject dengan then, catch
// const coba = cobaPromise()
// // console.log(coba) // pending
// coba
//   .then(coba => console.log(coba)) // selesai
//   .catch(coba => console.log(coba)) // selesai

// cara 2
// tangani resolve, reject dengan try, catch
async function cobaAsync () {
  try {
    const coba = await cobaPromise()
    console.log(coba);
  } catch (error) {
    // console.log(error);
    console.error(error);
  }
}
cobaAsync()
// ===============
// 
// ===============