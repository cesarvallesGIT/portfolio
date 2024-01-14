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

    return response.data;
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