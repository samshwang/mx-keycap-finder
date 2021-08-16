import React from "react"
import { Link } from 'react-router-dom'

const AboutPage = (props) => {
  return (
      <div className="about">
        <p>
            Welcome to the MX Keycap Finder website. <br/><br/>
            This is a website that catalogs a database of custom keycaps that have been offered for
            custom mechanical keyboards, specifically for the MX switch design. The website is
            currently in development and is showcasing an early prototype with a few seeded data sets. <br/><br/>
            To browse the current catalog of keycap sets, please navigate over to the <Link to="/list">Keycaps List</Link> page.
            To add additional keycap sets, you can navigate over to the <Link to="/new">Add Keycap Set</Link> page. Both pages
            are available anytime in the top bar. You can also edit pre-existing keycap sets on their respective show
            pages.<br/><br/>
            You will need to be logged into an admin account to be able to add and edit keycap sets. You can use the
            below administrator credentials to log into a test admin account for this prototype:<br/><br/>
                <strong>email:</strong> admin@test.com<br/>
                <strong>password:</strong> password
        </p>
      </div>
  )
}

export default AboutPage
