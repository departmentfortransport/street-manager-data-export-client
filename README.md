# street-manager-data-export-client

Contains NodeJS Client that is used to communicate with the `street-manager-data-export-api` project.

It is used by the integration tests within the `street-manager-data-export-api` project to call our client methods.

NOTE - Remember to run `npm run build` once you have completed development and commit the generate `dist/` folder. This will make the new version of your source code available to dependent repos when they run `npm install`

NOTE - Do not squash commits when merging client Pull Requests - we need to keep the commit history in order to retrieve via commit hashes.
