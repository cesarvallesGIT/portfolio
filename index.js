import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
})

const getGithubUser = async () => {
  try {
    const response = await octokit.request('GET /user', {
      name: "cesarvallesGIT",
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return response.data
} catch (error) {
    console.error('Error fetching user data:', error.message)
    throw error
  }
}
const githubImgEl = document.getElementById('github-user-img')

const makeGithubUser = async () => {
  let githubCallback = await getGithubUser()
  githubImgEl.src = githubCallback.avatar_url
}
makeGithubUser()

const musicCtnEl = document.getElementById('music-container')
const musicIconEls = document.querySelectorAll('.music-icons')
const iframeEl = document.getElementById('iframe')
const skipBefore = document.getElementById('before')
const skipAfter = document.getElementById('after')
const spotifySRC = [
  "https://open.spotify.com/embed/track/759fzpnRkH3yjHsqBsXwKK?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/track/4Sav8RLaXMBpTZX6xNPj0K?utm_source=generator",
  "https://open.spotify.com/embed/track/3gE4eQH3K83Sght0ZLvuBK?utm_source=generator"
]
const spotifyColors = ['#282828', 'rgb(81, 128, 116)', 'rgb(83, 83, 83)']
let musicCount = 0
skipBefore.addEventListener('click', () => {
  musicCount -= 1
  changeSong()
})
skipAfter.addEventListener('click', () => {
  musicCount += 1
  changeSong()
})
const changeSong = () => {
  musicCount = musicCount < 0 ? spotifySRC.length -1 : musicCount >= spotifySRC.length ? 0 : musicCount
  musicCtnEl.style.backgroundColor = spotifyColors[musicCount]
  musicIconEls.forEach((icon, index) => {
    icon.style.color = spotifyColors[musicCount]
  })
  iframeEl.src = spotifySRC[musicCount]
}
musicCtnEl.style.backgroundColor = spotifyColors[musicCount]
musicIconEls.forEach((icon, index) => {
  icon.style.color = spotifyColors[musicCount]
})
