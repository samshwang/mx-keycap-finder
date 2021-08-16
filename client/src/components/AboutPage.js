import React from "react"

const AboutPage = (props) => {
  return (
      <div className="about">
        <p>
            Welcome to the MX Keycap Finder website. <br/><br/>
            This is a website that catalogs a database of custom keycaps that have been offered for
            custom mechanical keyboards, specifically for the MX switch design. The website is
            currently in development and is showcasing an early prototype. <br/><br/>
            To browse the current catalog of keycap sets, please navigate over to the <em>Keycaps List</em> from
            the top bar. To add additional keycap sets, you can navigate over to the <em>Add Keycap Set</em> page,
            also from the top bar. You can also edit pre-existing keycap sets on their respective show pages.<br/><br/>
            You will need to be logged into an admin account to be able to add and edit keycap sets. You can use the
            below admin credentials to log into a sample admin account for this prototype:<br/><br/>
                <strong>email:</strong> admin@test.com<br/>
                <strong>password:</strong> password
        </p>
      </div>
  )
}

export default AboutPage
