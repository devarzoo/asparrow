import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import './career.css'



const Career = () => {
	return (
		<>
			<SEO title="Blog Grid" />
			<ColorSwitcher />
			<main className="main-wrapper">
				<HeaderOne />
				<BreadCrumbOne
					title="Career"
					page="Career"
				/>

				<div className='career-outer-div' >
						<div>
						<h2 className='job-title'>IT Services</h2>
						<div className='career-section'>
								<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
							</div>
						<div className='career-section'>
							<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>React js Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Sr. Dot net Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Salesforce Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>PPC and Social Media Executive</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Node js. Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Java Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Full Stack Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Project Manager</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Business Development Executive</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						<div className='career-section'>
							<h5>Angular Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
						</div>
					<div>
						<h2 className='job-title'>Engineering</h2>
						<div className='career-section'>
							<h5>Wordpress Developer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					<div>
						<h2 className='job-title'>Designer</h2>
						<div className='career-section'>
							<h5>UI/UX Designer</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					<div>
						<h2 className='job-title'>IT Services</h2>
						<div className='career-section'>
							<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					<div>
						<h2 className='job-title'>IT Services</h2>
						<div className='career-section'>
							<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					<div>
						<h2 className='job-title'>IT Services</h2>
						<div className='career-section'>
							<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					<div>
						<h2 className='job-title'>IT Services</h2>
						<div className='career-section'>
							<h5>MERN/MEAN</h5>
							<p><h6>City:</h6>Indore</p>
							<p><h6>Country:</h6>India</p>
							<p><h6>Job type:</h6>Full Time</p>
						</div>
					</div>
					</div>

							<FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
			</main>
		</>
	)
}

export default Career;