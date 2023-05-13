// Writing Async function with Promise

const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const start = async() => {
  try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}
start()

const { readFile, writeFile } = require('fs').promises;

const start_p = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile('./content/output-mind-grenade.txt', 
    `THIS IS AWESOME STUFF : ${first} ${second}`)
     console.log(first, second);
  } catch (error) {
    console.log(error);
}
}
start_p()