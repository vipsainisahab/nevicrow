import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
	return (
		<>

			<section className="breadcumb-section">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12 center z-index1">
							<h1 className="title">{breadcrumbTitle}</h1>
							<ul className="breadcumb-list flex-five">
								<li><Link href="/">Home</Link></li>
								<li><span>{breadcrumbTitle}</span></li>
							</ul>
							<img className="bcrumb-ab" src="/assets/images/page/mask-bcrumb.png" alt="" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
