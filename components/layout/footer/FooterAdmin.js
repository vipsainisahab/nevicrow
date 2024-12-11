import Link from "next/link"

export default function FooterAdmin() {
	return (
		<>
			<footer className="footer footer-dashboard">
				<div className="tf-container full">
					<div className="row">
						<div className="col-xl-6">
							<p className="text-white">Made with ❤️ by Themesflat. - Powered by Theme</p>
						</div>
						<div className="col-xl-6">
							<ul className="menu-footer flex-six">
								<li>
									<Link href="#">Privacy &amp; Policy</Link>
								</li>
								<li>
									<Link href="#">Licensing</Link>
								</li>
								<li>
									<Link href="#">Instruction</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
