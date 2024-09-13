import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production'
  },
  studioHost: 'kryptonum'
})
