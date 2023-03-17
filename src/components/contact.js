export default function Contact() {
	return (
		<section class="contact-content">
			<div class="header-text">
				<h1 class="intro">Let’s talk!</h1>
				<h2 class="description">
					Want to get in touch? I'd love to hear from you. <br />
					Here's how you can reach me...
				</h2>
			</div>

			<div class="contact-buttons d-flex">
				<div class="email">
					<i class="fa-solid fa-chevron-right"></i>
					<a
						href="mailto:katieliu59@gmail.com"
						target="_blank"
						class="email-button"
					>
						Email me
					</a>
				</div>
				<div class="linkedin">
					<i class="fa-solid fa-chevron-right"></i>
					<a
						href="https://www.linkedin.com/in/katiejxliu/"
						target="_blank"
						class="linkedin-button"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	);
}
