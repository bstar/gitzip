## Gitzip (Issue Prioritization For Github Users)

### `npm install`
Installs dependencies.

### `npm run server`
Runs the app's internal proxy server.  Required to access Github API.

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### `npm test` (incomplete)
Launches the test runner in the interactive watch mode.<br />

### `npm run build`
Builds the app for production to the `build` folder.<br />

## App Functionality
Simply run the app and paste your Github "user:key" in the form and press Enter.  ie: bstar:my_private_key_here

Install Redux Debugger in Chrome to see redux state tree.

### Usage Flow
- User lands on authentication form and authenticates with their login name and key.  Format is: bstar:732cde15d9def16bd5a879b117291fxxxxxxxxxx (not encrypted so potentially unsafe).  Submit by pressing Enter.
- User is redirected to the "Select a Repo" view.  User can scroll through the list of repos and select one by clicking on it.
- If on a mobile device or using a width < 600px, a media query will trigger and display a single column view.  The repos are now displayed in a smaller scroll area allowing the user to see the issues load.
- When the User clicks on a repo, it will become active and highlight with a yellow border.  Issues will load in a column to the right.
- Issues column displays all active issues, each one being orderable.
- User can drag issues up and down to change their respective ranks.  Dragging is limited to the "y" axis.  When the User drops the issue into its new position, the new rank is automatically applied.
- Considerations are made for issues that are added and closed on the Github side.  If issues are added, clicking on the repo name will re-load the issues and will display all new issues at the bottom, highlighted in orange.  If an issue is deleted, clicking on the repo name will refresh the issues and remove all closed issues.
- The issue order state is managed in local storage.  Clearing local state will default all stored issue ranking back to their default order state.

**Future improvements**: Improve column rendering so that issues mounting/unmounting does not shift the content so abruptly- perhaps animate.  Track issue count in each repo card (needs to refresh when issues are opened/closed).  Consider loading issues in an overlay for mobile so ordering is less cumbersome.
