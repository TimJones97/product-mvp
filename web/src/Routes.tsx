// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  const CLIENT_ID = process.env.CLIENT_ID as string
  const CLIENT_SECRET = process.env.CLIENT_SECRET as string
  const REDIRECT_URI = 'http://localhost:3000/api/discord/auth-callback'
  return (
    <Router>
      <Route path="/view-hubs" page={ViewHubsPage} name="viewHubs" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/list-hubs" page={ListHubsPage} name="listHubs" />
      <Route path="/list-hubs/{stepId:Int}" page={ListHubsPage} name="listHubs" />
      <Route path="/auth/{client_id:string}" page={DiscordAuthPage} name="discordAuth" c_id={CLIENT_ID} redir_url={REDIRECT_URI} />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
