import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import './contactUs.css';

class ContactUs extends Component {
	render() {
		return (
			<div>
				<HeaderMenu />
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mainRw12contact">
						<img src='.images/moreTab-aboutNcontact/contactUs.jpg' alt="" className="contactBanerimg" />
					</div>
				</div>
				<div className="">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12">
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-1 col-sm-1 col-md-1"></div>
					<div className="col-xs-10 col-sm-10 col-md-10">
						<div className="row" style={{ marginTop: '-3vw' }}>
							<h3 className="contactHeadonBner">Contact Us</h3>
							<p className="paraONcontact">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
								laying out print, graphic or web designs. The passage is attributed
								to an unknown typesetter in the 15th century who is thought to have
								scrambled parts of Cicero's De Finibus Bonorum et Malorum for use
								in a type specimen book.
							</p>
							<p className="paraONcontact">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
								laying out print, graphic or web designs. The passage is attributed
								to an unknown typesetter in the 15th century who is thought to have
								scrambled parts of Cicero's De Finibus Bonorum et Malorum for use
								in a type specimen book.
							</p>
						</div>
					</div>
					<div className="col-xs-1 col-sm-1 col-md-1"></div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default ContactUs;