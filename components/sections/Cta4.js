
import Link from "next/link"

export default function Cta4() {
	return (
		<>

			<section className="mb--93 z-index3 relative ">
				<div className="tf-container">
					<div className="callt-to-action flex-two">
						<div className="callt-to-action-content flex-three">
							<div className="image">
								<img src="/assets/images/page/ready.png" alt="Image" />
							</div>
							<div className="content">
								<h2 className="title-call">Ready to adventure and enjoy natural</h2>
								<p className="des">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
							</div>
						</div>
						<img src="/assets/images/page/vector4.png" alt="" className="shape-ab" />
						<div className="callt-to-action-button">
							<Link href="#" className="get-call">Let,s get started</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
