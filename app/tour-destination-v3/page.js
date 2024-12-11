
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TourDestinationV3() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tour Destination v3">
				<div>
					<section className="tour-destination pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">3 tours</span>
											<img src="/assets/images/destination/list.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">Switzerland</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">7 tours</span>
											<img src="/assets/images/destination/list1.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">Thailand</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">9 tours</span>
											<img src="/assets/images/destination/list2.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">united kingdom</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">4 tours</span>
											<img src="/assets/images/destination/list3.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">Hongkong</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">3 tours</span>
											<img src="/assets/images/destination/list4.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">Sri lanka</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 mb-37">
									<div className="tf-widget-destination">
										<Link href="/single-destination" className="destination-imgae">
											<span className="tour">3 tours</span>
											<img src="/assets/images/destination/list5.jpg" alt="" />
										</Link>
										<div className="destination-content">
											<span className="nation">Singapore</span>
											<div className="flex-two btn-destination">
												<h6 className="title"><Link href="/single-destination">View all tours</Link></h6>
												<Link href="/single-destination" className="flex-five btn-view">
													<i className="icon-Vector-32" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Widget Tour Destination v3 */}
					<section className="mb--93">
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
				</div>

			</Layout>
		</>
	)
}