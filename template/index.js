/**
 * {{_ "startCase" name}}.
 */
const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = core.getInput('token', {required: true})
    const client = new github.GitHub(token)

    const {context} = github
    const {owner, repo} = context.repo

    // TODO
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
