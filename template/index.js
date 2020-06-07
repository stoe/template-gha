/**
 * {{_ "startCase" name}}.
 */
import {getInput, setFailed} from '@actions/core'
import github from '@actions/github'

async function run() {
  try {
    const token = getInput('token', {required: true})
    const client = new github.GitHub(token)

    const {context} = github
    const {owner, repo} = context.repo

    // TODO
  } catch (err) {
    setFailed(err.message)
  }
}

run()
