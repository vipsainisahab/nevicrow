
import Link from "next/link"

export default function IgPost() {
	return (
		<>

			<section className="instagram-post relative">
				<div className="bg-primary-ig" />
				<div className="tf-container">
					<div className="row relative z-index3">
						<div className="col-lg-12">
							<div className="center mb-40">
								<span className="sub-title-heading text-second fs-28-46 font-yes wow fadeInUp animated">Explore
									the
									world</span>
								<h2 className="title-heading text-white wow fadeInUp animated">Recent instagram Post
								</h2>
							</div>
						</div>
					</div>
					<div className="row relative z-index3">
						<div className="col-lg-12">
							<div className="instagram-post-grid">
								<Link href="#" className="tf-instagram relative overflow-hidden wow fadeInUp animated " data-wow-delay="0.1s">
									<img src="/assets/images/gallery/8.jpg" alt="Image Instagram" />
									<div className="mask-absolute">
										<i className="icon-8" />
									</div>
									<div className="mask-bg">
										<svg width="100%" height="100%" viewBox="0 0 280 202" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M104.057 2.74389C103.605 -1.83455 103.209 1.86287 97.2893 3.92822C100.355 5.28587 92.4996 11.6697 91.5954 7.8134C87.0036 1.9062 86.834 -0.202486 82.6378 0.649653C76.4212 1.67511 72.0554 7.30789 68.3678 2.67168C69.6818 2.36837 68.0852 2.93165 65.7258 3.49493C64.3553 9.3588 68.4667 3.56715 63.225 4.60704C64.1857 2.58502 59.0287 6.48464 58.068 7.9145C54.5499 8.05893 52.6284 13.9372 51.9079 8.72331C47.6693 18.9201 47.6127 9.24326 46.2564 6.48464C42.6677 6.49908 45.889 -1.58902 39.7854 4.96812C37.4118 6.64351 41.6222 1.94953 37.101 4.99701C29.528 7.0768 27.2109 8.86774 22.9723 3.33606C19.7085 3.17718 13.0963 -2.00787 10.0304 0.866298C4.53431 0.476336 -0.60854 3.89934 2.92364 8.39112C-1.55516 15.0494 8.54686 19.44 5.31139 22.7764C5.09946 24.4084 8.74467 34.4897 6.83729 37.0172C9.29568 38.7793 4.84514 35.544 7.03509 39.487C5.93305 38.6348 13.4495 49.4816 7.45895 46.7663C9.16853 48.225 9.0555 48.9905 6.66775 54.2044C8.46209 56.9486 3.842 56.8186 6.04608 56.472C0.959747 59.1873 0.281569 68.2719 2.95189 69.7596C4.35064 76.2445 1.65205 80.0863 2.09004 83.2927C-0.778085 87.5101 6.01782 92.6951 3.99742 96.6958C1.99114 105.102 4.6756 102.3 9.19678 109.55C12.0225 106.719 10.0728 110.316 9.95973 112.237C6.5971 116.959 11.4291 120.484 11.0053 120.339C15.2721 119.198 4.15283 123.834 9.40871 126.16C11.302 122.838 8.51861 127.171 7.28941 131.662C0.648915 133.786 4.61908 135.259 6.97858 133.728C7.40244 133.713 5.98957 134.248 6.85142 135.952C6.08847 137.136 13.7745 148.619 7.61437 150.222C3.95503 158.772 11.3161 159.783 6.62536 164.174C8.56099 167.626 12.6159 164.448 5.62222 169.806C0.338083 172.782 8.123 178.256 5.14184 172.58C5.08533 177.476 0.309826 176.133 1.45425 188.669C-2.3605 192.785 2.23133 200.628 4.92991 198.043C3.27685 198.158 10.2282 199.155 11.3867 197.609C11.9378 198.043 16.0916 197.162 17.999 196.613C17.6881 199.819 19.426 196.252 20.6976 196.151C25.3176 197.263 25.7556 195.876 30.5594 193.869C33.4699 193.435 35.8011 191.139 40.6332 192.872C43.7132 192.352 44.236 192.771 43.1763 192.988C45.4793 194.085 49.7462 192.858 52.8404 195.761C57.743 197.162 58.2375 198.866 61.8686 200.628C65.7823 199.834 66.8137 199.747 72.7053 202C76.0397 199.66 79.6425 198.505 83.3866 198.823C85.5059 197.754 90.9879 196.208 94.3505 195.818C94.0538 195.183 97.9816 197.335 97.2186 195.862C98.6174 195.038 99.1119 197.263 100.2 196.049C103.393 198.288 104.396 195.818 103.068 196.338C108.239 196.613 109.638 199.66 116.759 197.696C120.814 196.555 124.939 197.999 130.054 195.789C136.044 194.432 139.916 192.915 143.448 191.962C144.295 193.363 146.09 192.294 147.474 191.153C149.664 191.442 148.562 188.9 149.396 190.879C151.289 192.901 156.46 190.301 160.134 189.521C164.019 191.471 169.784 190.417 170.617 189.81C172.722 188.9 169.487 190.214 173.584 190.099C178.572 192.756 181.496 190.648 186.102 192.93C187.628 196.439 192.573 195.371 198.705 194.677C203.283 197.133 206.391 197.942 211.35 195.284C217.242 194.807 221.678 192.626 223.981 194.692C221.664 197.465 227.189 198.1 226.341 194.923C230.523 194.764 230.608 192.367 234.677 195.414C235.963 199.458 246.065 194.923 243.634 194.865C246.079 193.623 248.721 191.226 251.886 193.002C257.297 192.135 250.501 192.525 254.542 192.208C258.13 190.128 262.807 190.128 265.93 190.474C269.928 188.106 273.46 192.251 276.653 188.857C277.656 183.484 278.914 186.503 277.699 181.505C275.933 179.18 270.225 176.219 273.601 171.496C275.41 168.247 273.022 165.112 270.733 160.086C271.454 160.866 274.11 160.202 270.239 157.515C268.572 153.558 269.32 151.291 268.812 146.149C270.917 141.498 270.903 139.129 270.069 136.342C271.948 132.226 271.807 130.897 273.743 128.644C274.124 129.583 275.989 127.965 274.816 126.116C274.972 121.697 276.455 120.426 278.207 115.515C280.157 113.565 281.485 109.29 276.865 105.073C276.371 100.162 273.248 96.2914 273.432 94.3849C274.703 91.1642 269.942 87.8856 272.061 83.3071C271.539 80.6641 272.316 78.2376 270.875 72.0127C272.711 70.0629 271.962 70.164 271.284 69.3263C272.725 67.0876 273.912 65.6578 272.867 64.3723C271.496 64.9789 272.768 63.2891 273.46 62.6825C276.385 58.6962 277.19 55.6198 275.933 49.5538C277.402 45.5675 275.424 41.4223 274.732 36.4684C274.802 31.63 271.92 27.6726 272.259 23.4263C270.38 17.4036 272.09 13.3884 270.903 10.4131C269.97 8.05893 272.641 8.76664 270.818 7.72674C270.535 6.09468 269.405 5.66139 270.677 5.04034C270.832 3.19163 266.452 3.3505 266.777 4.37596C267.823 5.50251 264.46 2.77278 264.842 4.31818C261.324 2.52725 257.707 1.66067 254.019 4.80925C250.091 4.44817 248.678 6.23911 243.182 5.70471C238.054 6.08023 234.423 6.86016 232.388 6.12356C233.264 6.61463 230.424 4.82369 229.449 6.0369C225.719 6.05135 223.84 4.53483 220.492 3.52382C216.211 4.08709 214.317 0.692982 212.297 1.67511C207.818 3.71158 206.066 4.86702 200.81 4.31818C197.109 4.08709 194.551 5.41585 189.479 7.16346C185.311 8.2178 183.376 7.92894 177.47 7.42344C175.011 7.55342 174.644 6.35465 174.517 6.81683C169.713 6.34021 168.766 5.34364 164.669 4.89591C159.385 5.79137 158.339 3.20607 155.019 6.22466C151.473 6.28244 148.167 10.6298 146.033 11.2075C144.409 10.442 145.609 12.7096 140.933 11.2075C138.955 8.7522 137.584 10.9042 135.324 8.69442C131.325 4.72259 133.586 10.9475 129.545 6.75906C130.435 10.1532 126.903 4.52039 127.143 6.39798C125.321 5.57473 119.005 7.84228 116.335 7.06236C115.19 6.02246 105.978 4.01488 105.767 3.61047C98.688 8.27557 103.421 7.42344 104.057 2.74389Z" fill="#05130B" fillOpacity="0.82" />
										</svg>
									</div>
								</Link>
								<Link href="#" className="tf-instagram relative overflow-hidden wow fadeInUp animated " data-wow-delay="0.2s">
									<img src="/assets/images/gallery/9.jpg" alt="Image Instagram" />
									<div className="mask-absolute">
										<i className="icon-8" />
									</div>
									<div className="mask-bg">
										<svg width="100%" height="100%" viewBox="0 0 280 202" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M104.057 2.74389C103.605 -1.83455 103.209 1.86287 97.2893 3.92822C100.355 5.28587 92.4996 11.6697 91.5954 7.8134C87.0036 1.9062 86.834 -0.202486 82.6378 0.649653C76.4212 1.67511 72.0554 7.30789 68.3678 2.67168C69.6818 2.36837 68.0852 2.93165 65.7258 3.49493C64.3553 9.3588 68.4667 3.56715 63.225 4.60704C64.1857 2.58502 59.0287 6.48464 58.068 7.9145C54.5499 8.05893 52.6284 13.9372 51.9079 8.72331C47.6693 18.9201 47.6127 9.24326 46.2564 6.48464C42.6677 6.49908 45.889 -1.58902 39.7854 4.96812C37.4118 6.64351 41.6222 1.94953 37.101 4.99701C29.528 7.0768 27.2109 8.86774 22.9723 3.33606C19.7085 3.17718 13.0963 -2.00787 10.0304 0.866298C4.53431 0.476336 -0.60854 3.89934 2.92364 8.39112C-1.55516 15.0494 8.54686 19.44 5.31139 22.7764C5.09946 24.4084 8.74467 34.4897 6.83729 37.0172C9.29568 38.7793 4.84514 35.544 7.03509 39.487C5.93305 38.6348 13.4495 49.4816 7.45895 46.7663C9.16853 48.225 9.0555 48.9905 6.66775 54.2044C8.46209 56.9486 3.842 56.8186 6.04608 56.472C0.959747 59.1873 0.281569 68.2719 2.95189 69.7596C4.35064 76.2445 1.65205 80.0863 2.09004 83.2927C-0.778085 87.5101 6.01782 92.6951 3.99742 96.6958C1.99114 105.102 4.6756 102.3 9.19678 109.55C12.0225 106.719 10.0728 110.316 9.95973 112.237C6.5971 116.959 11.4291 120.484 11.0053 120.339C15.2721 119.198 4.15283 123.834 9.40871 126.16C11.302 122.838 8.51861 127.171 7.28941 131.662C0.648915 133.786 4.61908 135.259 6.97858 133.728C7.40244 133.713 5.98957 134.248 6.85142 135.952C6.08847 137.136 13.7745 148.619 7.61437 150.222C3.95503 158.772 11.3161 159.783 6.62536 164.174C8.56099 167.626 12.6159 164.448 5.62222 169.806C0.338083 172.782 8.123 178.256 5.14184 172.58C5.08533 177.476 0.309826 176.133 1.45425 188.669C-2.3605 192.785 2.23133 200.628 4.92991 198.043C3.27685 198.158 10.2282 199.155 11.3867 197.609C11.9378 198.043 16.0916 197.162 17.999 196.613C17.6881 199.819 19.426 196.252 20.6976 196.151C25.3176 197.263 25.7556 195.876 30.5594 193.869C33.4699 193.435 35.8011 191.139 40.6332 192.872C43.7132 192.352 44.236 192.771 43.1763 192.988C45.4793 194.085 49.7462 192.858 52.8404 195.761C57.743 197.162 58.2375 198.866 61.8686 200.628C65.7823 199.834 66.8137 199.747 72.7053 202C76.0397 199.66 79.6425 198.505 83.3866 198.823C85.5059 197.754 90.9879 196.208 94.3505 195.818C94.0538 195.183 97.9816 197.335 97.2186 195.862C98.6174 195.038 99.1119 197.263 100.2 196.049C103.393 198.288 104.396 195.818 103.068 196.338C108.239 196.613 109.638 199.66 116.759 197.696C120.814 196.555 124.939 197.999 130.054 195.789C136.044 194.432 139.916 192.915 143.448 191.962C144.295 193.363 146.09 192.294 147.474 191.153C149.664 191.442 148.562 188.9 149.396 190.879C151.289 192.901 156.46 190.301 160.134 189.521C164.019 191.471 169.784 190.417 170.617 189.81C172.722 188.9 169.487 190.214 173.584 190.099C178.572 192.756 181.496 190.648 186.102 192.93C187.628 196.439 192.573 195.371 198.705 194.677C203.283 197.133 206.391 197.942 211.35 195.284C217.242 194.807 221.678 192.626 223.981 194.692C221.664 197.465 227.189 198.1 226.341 194.923C230.523 194.764 230.608 192.367 234.677 195.414C235.963 199.458 246.065 194.923 243.634 194.865C246.079 193.623 248.721 191.226 251.886 193.002C257.297 192.135 250.501 192.525 254.542 192.208C258.13 190.128 262.807 190.128 265.93 190.474C269.928 188.106 273.46 192.251 276.653 188.857C277.656 183.484 278.914 186.503 277.699 181.505C275.933 179.18 270.225 176.219 273.601 171.496C275.41 168.247 273.022 165.112 270.733 160.086C271.454 160.866 274.11 160.202 270.239 157.515C268.572 153.558 269.32 151.291 268.812 146.149C270.917 141.498 270.903 139.129 270.069 136.342C271.948 132.226 271.807 130.897 273.743 128.644C274.124 129.583 275.989 127.965 274.816 126.116C274.972 121.697 276.455 120.426 278.207 115.515C280.157 113.565 281.485 109.29 276.865 105.073C276.371 100.162 273.248 96.2914 273.432 94.3849C274.703 91.1642 269.942 87.8856 272.061 83.3071C271.539 80.6641 272.316 78.2376 270.875 72.0127C272.711 70.0629 271.962 70.164 271.284 69.3263C272.725 67.0876 273.912 65.6578 272.867 64.3723C271.496 64.9789 272.768 63.2891 273.46 62.6825C276.385 58.6962 277.19 55.6198 275.933 49.5538C277.402 45.5675 275.424 41.4223 274.732 36.4684C274.802 31.63 271.92 27.6726 272.259 23.4263C270.38 17.4036 272.09 13.3884 270.903 10.4131C269.97 8.05893 272.641 8.76664 270.818 7.72674C270.535 6.09468 269.405 5.66139 270.677 5.04034C270.832 3.19163 266.452 3.3505 266.777 4.37596C267.823 5.50251 264.46 2.77278 264.842 4.31818C261.324 2.52725 257.707 1.66067 254.019 4.80925C250.091 4.44817 248.678 6.23911 243.182 5.70471C238.054 6.08023 234.423 6.86016 232.388 6.12356C233.264 6.61463 230.424 4.82369 229.449 6.0369C225.719 6.05135 223.84 4.53483 220.492 3.52382C216.211 4.08709 214.317 0.692982 212.297 1.67511C207.818 3.71158 206.066 4.86702 200.81 4.31818C197.109 4.08709 194.551 5.41585 189.479 7.16346C185.311 8.2178 183.376 7.92894 177.47 7.42344C175.011 7.55342 174.644 6.35465 174.517 6.81683C169.713 6.34021 168.766 5.34364 164.669 4.89591C159.385 5.79137 158.339 3.20607 155.019 6.22466C151.473 6.28244 148.167 10.6298 146.033 11.2075C144.409 10.442 145.609 12.7096 140.933 11.2075C138.955 8.7522 137.584 10.9042 135.324 8.69442C131.325 4.72259 133.586 10.9475 129.545 6.75906C130.435 10.1532 126.903 4.52039 127.143 6.39798C125.321 5.57473 119.005 7.84228 116.335 7.06236C115.19 6.02246 105.978 4.01488 105.767 3.61047C98.688 8.27557 103.421 7.42344 104.057 2.74389Z" fill="#05130B" fillOpacity="0.82" />
										</svg>
									</div>
								</Link>
								<Link href="#" className="tf-instagram relative overflow-hidden wow fadeInUp animated " data-wow-delay="0.3s">
									<img src="/assets/images/gallery/10.jpg" alt="Image Instagram" />
									<div className="mask-absolute">
										<i className="icon-8" />
									</div>
									<div className="mask-bg">
										<svg width="100%" height="100%" viewBox="0 0 280 202" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M104.057 2.74389C103.605 -1.83455 103.209 1.86287 97.2893 3.92822C100.355 5.28587 92.4996 11.6697 91.5954 7.8134C87.0036 1.9062 86.834 -0.202486 82.6378 0.649653C76.4212 1.67511 72.0554 7.30789 68.3678 2.67168C69.6818 2.36837 68.0852 2.93165 65.7258 3.49493C64.3553 9.3588 68.4667 3.56715 63.225 4.60704C64.1857 2.58502 59.0287 6.48464 58.068 7.9145C54.5499 8.05893 52.6284 13.9372 51.9079 8.72331C47.6693 18.9201 47.6127 9.24326 46.2564 6.48464C42.6677 6.49908 45.889 -1.58902 39.7854 4.96812C37.4118 6.64351 41.6222 1.94953 37.101 4.99701C29.528 7.0768 27.2109 8.86774 22.9723 3.33606C19.7085 3.17718 13.0963 -2.00787 10.0304 0.866298C4.53431 0.476336 -0.60854 3.89934 2.92364 8.39112C-1.55516 15.0494 8.54686 19.44 5.31139 22.7764C5.09946 24.4084 8.74467 34.4897 6.83729 37.0172C9.29568 38.7793 4.84514 35.544 7.03509 39.487C5.93305 38.6348 13.4495 49.4816 7.45895 46.7663C9.16853 48.225 9.0555 48.9905 6.66775 54.2044C8.46209 56.9486 3.842 56.8186 6.04608 56.472C0.959747 59.1873 0.281569 68.2719 2.95189 69.7596C4.35064 76.2445 1.65205 80.0863 2.09004 83.2927C-0.778085 87.5101 6.01782 92.6951 3.99742 96.6958C1.99114 105.102 4.6756 102.3 9.19678 109.55C12.0225 106.719 10.0728 110.316 9.95973 112.237C6.5971 116.959 11.4291 120.484 11.0053 120.339C15.2721 119.198 4.15283 123.834 9.40871 126.16C11.302 122.838 8.51861 127.171 7.28941 131.662C0.648915 133.786 4.61908 135.259 6.97858 133.728C7.40244 133.713 5.98957 134.248 6.85142 135.952C6.08847 137.136 13.7745 148.619 7.61437 150.222C3.95503 158.772 11.3161 159.783 6.62536 164.174C8.56099 167.626 12.6159 164.448 5.62222 169.806C0.338083 172.782 8.123 178.256 5.14184 172.58C5.08533 177.476 0.309826 176.133 1.45425 188.669C-2.3605 192.785 2.23133 200.628 4.92991 198.043C3.27685 198.158 10.2282 199.155 11.3867 197.609C11.9378 198.043 16.0916 197.162 17.999 196.613C17.6881 199.819 19.426 196.252 20.6976 196.151C25.3176 197.263 25.7556 195.876 30.5594 193.869C33.4699 193.435 35.8011 191.139 40.6332 192.872C43.7132 192.352 44.236 192.771 43.1763 192.988C45.4793 194.085 49.7462 192.858 52.8404 195.761C57.743 197.162 58.2375 198.866 61.8686 200.628C65.7823 199.834 66.8137 199.747 72.7053 202C76.0397 199.66 79.6425 198.505 83.3866 198.823C85.5059 197.754 90.9879 196.208 94.3505 195.818C94.0538 195.183 97.9816 197.335 97.2186 195.862C98.6174 195.038 99.1119 197.263 100.2 196.049C103.393 198.288 104.396 195.818 103.068 196.338C108.239 196.613 109.638 199.66 116.759 197.696C120.814 196.555 124.939 197.999 130.054 195.789C136.044 194.432 139.916 192.915 143.448 191.962C144.295 193.363 146.09 192.294 147.474 191.153C149.664 191.442 148.562 188.9 149.396 190.879C151.289 192.901 156.46 190.301 160.134 189.521C164.019 191.471 169.784 190.417 170.617 189.81C172.722 188.9 169.487 190.214 173.584 190.099C178.572 192.756 181.496 190.648 186.102 192.93C187.628 196.439 192.573 195.371 198.705 194.677C203.283 197.133 206.391 197.942 211.35 195.284C217.242 194.807 221.678 192.626 223.981 194.692C221.664 197.465 227.189 198.1 226.341 194.923C230.523 194.764 230.608 192.367 234.677 195.414C235.963 199.458 246.065 194.923 243.634 194.865C246.079 193.623 248.721 191.226 251.886 193.002C257.297 192.135 250.501 192.525 254.542 192.208C258.13 190.128 262.807 190.128 265.93 190.474C269.928 188.106 273.46 192.251 276.653 188.857C277.656 183.484 278.914 186.503 277.699 181.505C275.933 179.18 270.225 176.219 273.601 171.496C275.41 168.247 273.022 165.112 270.733 160.086C271.454 160.866 274.11 160.202 270.239 157.515C268.572 153.558 269.32 151.291 268.812 146.149C270.917 141.498 270.903 139.129 270.069 136.342C271.948 132.226 271.807 130.897 273.743 128.644C274.124 129.583 275.989 127.965 274.816 126.116C274.972 121.697 276.455 120.426 278.207 115.515C280.157 113.565 281.485 109.29 276.865 105.073C276.371 100.162 273.248 96.2914 273.432 94.3849C274.703 91.1642 269.942 87.8856 272.061 83.3071C271.539 80.6641 272.316 78.2376 270.875 72.0127C272.711 70.0629 271.962 70.164 271.284 69.3263C272.725 67.0876 273.912 65.6578 272.867 64.3723C271.496 64.9789 272.768 63.2891 273.46 62.6825C276.385 58.6962 277.19 55.6198 275.933 49.5538C277.402 45.5675 275.424 41.4223 274.732 36.4684C274.802 31.63 271.92 27.6726 272.259 23.4263C270.38 17.4036 272.09 13.3884 270.903 10.4131C269.97 8.05893 272.641 8.76664 270.818 7.72674C270.535 6.09468 269.405 5.66139 270.677 5.04034C270.832 3.19163 266.452 3.3505 266.777 4.37596C267.823 5.50251 264.46 2.77278 264.842 4.31818C261.324 2.52725 257.707 1.66067 254.019 4.80925C250.091 4.44817 248.678 6.23911 243.182 5.70471C238.054 6.08023 234.423 6.86016 232.388 6.12356C233.264 6.61463 230.424 4.82369 229.449 6.0369C225.719 6.05135 223.84 4.53483 220.492 3.52382C216.211 4.08709 214.317 0.692982 212.297 1.67511C207.818 3.71158 206.066 4.86702 200.81 4.31818C197.109 4.08709 194.551 5.41585 189.479 7.16346C185.311 8.2178 183.376 7.92894 177.47 7.42344C175.011 7.55342 174.644 6.35465 174.517 6.81683C169.713 6.34021 168.766 5.34364 164.669 4.89591C159.385 5.79137 158.339 3.20607 155.019 6.22466C151.473 6.28244 148.167 10.6298 146.033 11.2075C144.409 10.442 145.609 12.7096 140.933 11.2075C138.955 8.7522 137.584 10.9042 135.324 8.69442C131.325 4.72259 133.586 10.9475 129.545 6.75906C130.435 10.1532 126.903 4.52039 127.143 6.39798C125.321 5.57473 119.005 7.84228 116.335 7.06236C115.19 6.02246 105.978 4.01488 105.767 3.61047C98.688 8.27557 103.421 7.42344 104.057 2.74389Z" fill="#05130B" fillOpacity="0.82" />
										</svg>
									</div>
								</Link>
								<Link href="#" className="tf-instagram relative overflow-hidden wow fadeInUp animated " data-wow-delay="0.4s">
									<img src="/assets/images/gallery/11.jpg" alt="Image Instagram" />
									<div className="mask-absolute">
										<i className="icon-8" />
									</div>
									<div className="mask-bg">
										<svg width="100%" height="100%" viewBox="0 0 280 202" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M104.057 2.74389C103.605 -1.83455 103.209 1.86287 97.2893 3.92822C100.355 5.28587 92.4996 11.6697 91.5954 7.8134C87.0036 1.9062 86.834 -0.202486 82.6378 0.649653C76.4212 1.67511 72.0554 7.30789 68.3678 2.67168C69.6818 2.36837 68.0852 2.93165 65.7258 3.49493C64.3553 9.3588 68.4667 3.56715 63.225 4.60704C64.1857 2.58502 59.0287 6.48464 58.068 7.9145C54.5499 8.05893 52.6284 13.9372 51.9079 8.72331C47.6693 18.9201 47.6127 9.24326 46.2564 6.48464C42.6677 6.49908 45.889 -1.58902 39.7854 4.96812C37.4118 6.64351 41.6222 1.94953 37.101 4.99701C29.528 7.0768 27.2109 8.86774 22.9723 3.33606C19.7085 3.17718 13.0963 -2.00787 10.0304 0.866298C4.53431 0.476336 -0.60854 3.89934 2.92364 8.39112C-1.55516 15.0494 8.54686 19.44 5.31139 22.7764C5.09946 24.4084 8.74467 34.4897 6.83729 37.0172C9.29568 38.7793 4.84514 35.544 7.03509 39.487C5.93305 38.6348 13.4495 49.4816 7.45895 46.7663C9.16853 48.225 9.0555 48.9905 6.66775 54.2044C8.46209 56.9486 3.842 56.8186 6.04608 56.472C0.959747 59.1873 0.281569 68.2719 2.95189 69.7596C4.35064 76.2445 1.65205 80.0863 2.09004 83.2927C-0.778085 87.5101 6.01782 92.6951 3.99742 96.6958C1.99114 105.102 4.6756 102.3 9.19678 109.55C12.0225 106.719 10.0728 110.316 9.95973 112.237C6.5971 116.959 11.4291 120.484 11.0053 120.339C15.2721 119.198 4.15283 123.834 9.40871 126.16C11.302 122.838 8.51861 127.171 7.28941 131.662C0.648915 133.786 4.61908 135.259 6.97858 133.728C7.40244 133.713 5.98957 134.248 6.85142 135.952C6.08847 137.136 13.7745 148.619 7.61437 150.222C3.95503 158.772 11.3161 159.783 6.62536 164.174C8.56099 167.626 12.6159 164.448 5.62222 169.806C0.338083 172.782 8.123 178.256 5.14184 172.58C5.08533 177.476 0.309826 176.133 1.45425 188.669C-2.3605 192.785 2.23133 200.628 4.92991 198.043C3.27685 198.158 10.2282 199.155 11.3867 197.609C11.9378 198.043 16.0916 197.162 17.999 196.613C17.6881 199.819 19.426 196.252 20.6976 196.151C25.3176 197.263 25.7556 195.876 30.5594 193.869C33.4699 193.435 35.8011 191.139 40.6332 192.872C43.7132 192.352 44.236 192.771 43.1763 192.988C45.4793 194.085 49.7462 192.858 52.8404 195.761C57.743 197.162 58.2375 198.866 61.8686 200.628C65.7823 199.834 66.8137 199.747 72.7053 202C76.0397 199.66 79.6425 198.505 83.3866 198.823C85.5059 197.754 90.9879 196.208 94.3505 195.818C94.0538 195.183 97.9816 197.335 97.2186 195.862C98.6174 195.038 99.1119 197.263 100.2 196.049C103.393 198.288 104.396 195.818 103.068 196.338C108.239 196.613 109.638 199.66 116.759 197.696C120.814 196.555 124.939 197.999 130.054 195.789C136.044 194.432 139.916 192.915 143.448 191.962C144.295 193.363 146.09 192.294 147.474 191.153C149.664 191.442 148.562 188.9 149.396 190.879C151.289 192.901 156.46 190.301 160.134 189.521C164.019 191.471 169.784 190.417 170.617 189.81C172.722 188.9 169.487 190.214 173.584 190.099C178.572 192.756 181.496 190.648 186.102 192.93C187.628 196.439 192.573 195.371 198.705 194.677C203.283 197.133 206.391 197.942 211.35 195.284C217.242 194.807 221.678 192.626 223.981 194.692C221.664 197.465 227.189 198.1 226.341 194.923C230.523 194.764 230.608 192.367 234.677 195.414C235.963 199.458 246.065 194.923 243.634 194.865C246.079 193.623 248.721 191.226 251.886 193.002C257.297 192.135 250.501 192.525 254.542 192.208C258.13 190.128 262.807 190.128 265.93 190.474C269.928 188.106 273.46 192.251 276.653 188.857C277.656 183.484 278.914 186.503 277.699 181.505C275.933 179.18 270.225 176.219 273.601 171.496C275.41 168.247 273.022 165.112 270.733 160.086C271.454 160.866 274.11 160.202 270.239 157.515C268.572 153.558 269.32 151.291 268.812 146.149C270.917 141.498 270.903 139.129 270.069 136.342C271.948 132.226 271.807 130.897 273.743 128.644C274.124 129.583 275.989 127.965 274.816 126.116C274.972 121.697 276.455 120.426 278.207 115.515C280.157 113.565 281.485 109.29 276.865 105.073C276.371 100.162 273.248 96.2914 273.432 94.3849C274.703 91.1642 269.942 87.8856 272.061 83.3071C271.539 80.6641 272.316 78.2376 270.875 72.0127C272.711 70.0629 271.962 70.164 271.284 69.3263C272.725 67.0876 273.912 65.6578 272.867 64.3723C271.496 64.9789 272.768 63.2891 273.46 62.6825C276.385 58.6962 277.19 55.6198 275.933 49.5538C277.402 45.5675 275.424 41.4223 274.732 36.4684C274.802 31.63 271.92 27.6726 272.259 23.4263C270.38 17.4036 272.09 13.3884 270.903 10.4131C269.97 8.05893 272.641 8.76664 270.818 7.72674C270.535 6.09468 269.405 5.66139 270.677 5.04034C270.832 3.19163 266.452 3.3505 266.777 4.37596C267.823 5.50251 264.46 2.77278 264.842 4.31818C261.324 2.52725 257.707 1.66067 254.019 4.80925C250.091 4.44817 248.678 6.23911 243.182 5.70471C238.054 6.08023 234.423 6.86016 232.388 6.12356C233.264 6.61463 230.424 4.82369 229.449 6.0369C225.719 6.05135 223.84 4.53483 220.492 3.52382C216.211 4.08709 214.317 0.692982 212.297 1.67511C207.818 3.71158 206.066 4.86702 200.81 4.31818C197.109 4.08709 194.551 5.41585 189.479 7.16346C185.311 8.2178 183.376 7.92894 177.47 7.42344C175.011 7.55342 174.644 6.35465 174.517 6.81683C169.713 6.34021 168.766 5.34364 164.669 4.89591C159.385 5.79137 158.339 3.20607 155.019 6.22466C151.473 6.28244 148.167 10.6298 146.033 11.2075C144.409 10.442 145.609 12.7096 140.933 11.2075C138.955 8.7522 137.584 10.9042 135.324 8.69442C131.325 4.72259 133.586 10.9475 129.545 6.75906C130.435 10.1532 126.903 4.52039 127.143 6.39798C125.321 5.57473 119.005 7.84228 116.335 7.06236C115.19 6.02246 105.978 4.01488 105.767 3.61047C98.688 8.27557 103.421 7.42344 104.057 2.74389Z" fill="#05130B" fillOpacity="0.82" />
										</svg>
									</div>
								</Link>
								<Link href="#" className="tf-instagram relative overflow-hidden wow fadeInUp animated " data-wow-delay="0.5s">
									<img src="/assets/images/gallery/12.jpg" alt="Image Instagram" />
									<div className="mask-absolute">
										<i className="icon-8" />
									</div>
									<div className="mask-bg">
										<svg width="100%" height="100%" viewBox="0 0 280 202" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M104.057 2.74389C103.605 -1.83455 103.209 1.86287 97.2893 3.92822C100.355 5.28587 92.4996 11.6697 91.5954 7.8134C87.0036 1.9062 86.834 -0.202486 82.6378 0.649653C76.4212 1.67511 72.0554 7.30789 68.3678 2.67168C69.6818 2.36837 68.0852 2.93165 65.7258 3.49493C64.3553 9.3588 68.4667 3.56715 63.225 4.60704C64.1857 2.58502 59.0287 6.48464 58.068 7.9145C54.5499 8.05893 52.6284 13.9372 51.9079 8.72331C47.6693 18.9201 47.6127 9.24326 46.2564 6.48464C42.6677 6.49908 45.889 -1.58902 39.7854 4.96812C37.4118 6.64351 41.6222 1.94953 37.101 4.99701C29.528 7.0768 27.2109 8.86774 22.9723 3.33606C19.7085 3.17718 13.0963 -2.00787 10.0304 0.866298C4.53431 0.476336 -0.60854 3.89934 2.92364 8.39112C-1.55516 15.0494 8.54686 19.44 5.31139 22.7764C5.09946 24.4084 8.74467 34.4897 6.83729 37.0172C9.29568 38.7793 4.84514 35.544 7.03509 39.487C5.93305 38.6348 13.4495 49.4816 7.45895 46.7663C9.16853 48.225 9.0555 48.9905 6.66775 54.2044C8.46209 56.9486 3.842 56.8186 6.04608 56.472C0.959747 59.1873 0.281569 68.2719 2.95189 69.7596C4.35064 76.2445 1.65205 80.0863 2.09004 83.2927C-0.778085 87.5101 6.01782 92.6951 3.99742 96.6958C1.99114 105.102 4.6756 102.3 9.19678 109.55C12.0225 106.719 10.0728 110.316 9.95973 112.237C6.5971 116.959 11.4291 120.484 11.0053 120.339C15.2721 119.198 4.15283 123.834 9.40871 126.16C11.302 122.838 8.51861 127.171 7.28941 131.662C0.648915 133.786 4.61908 135.259 6.97858 133.728C7.40244 133.713 5.98957 134.248 6.85142 135.952C6.08847 137.136 13.7745 148.619 7.61437 150.222C3.95503 158.772 11.3161 159.783 6.62536 164.174C8.56099 167.626 12.6159 164.448 5.62222 169.806C0.338083 172.782 8.123 178.256 5.14184 172.58C5.08533 177.476 0.309826 176.133 1.45425 188.669C-2.3605 192.785 2.23133 200.628 4.92991 198.043C3.27685 198.158 10.2282 199.155 11.3867 197.609C11.9378 198.043 16.0916 197.162 17.999 196.613C17.6881 199.819 19.426 196.252 20.6976 196.151C25.3176 197.263 25.7556 195.876 30.5594 193.869C33.4699 193.435 35.8011 191.139 40.6332 192.872C43.7132 192.352 44.236 192.771 43.1763 192.988C45.4793 194.085 49.7462 192.858 52.8404 195.761C57.743 197.162 58.2375 198.866 61.8686 200.628C65.7823 199.834 66.8137 199.747 72.7053 202C76.0397 199.66 79.6425 198.505 83.3866 198.823C85.5059 197.754 90.9879 196.208 94.3505 195.818C94.0538 195.183 97.9816 197.335 97.2186 195.862C98.6174 195.038 99.1119 197.263 100.2 196.049C103.393 198.288 104.396 195.818 103.068 196.338C108.239 196.613 109.638 199.66 116.759 197.696C120.814 196.555 124.939 197.999 130.054 195.789C136.044 194.432 139.916 192.915 143.448 191.962C144.295 193.363 146.09 192.294 147.474 191.153C149.664 191.442 148.562 188.9 149.396 190.879C151.289 192.901 156.46 190.301 160.134 189.521C164.019 191.471 169.784 190.417 170.617 189.81C172.722 188.9 169.487 190.214 173.584 190.099C178.572 192.756 181.496 190.648 186.102 192.93C187.628 196.439 192.573 195.371 198.705 194.677C203.283 197.133 206.391 197.942 211.35 195.284C217.242 194.807 221.678 192.626 223.981 194.692C221.664 197.465 227.189 198.1 226.341 194.923C230.523 194.764 230.608 192.367 234.677 195.414C235.963 199.458 246.065 194.923 243.634 194.865C246.079 193.623 248.721 191.226 251.886 193.002C257.297 192.135 250.501 192.525 254.542 192.208C258.13 190.128 262.807 190.128 265.93 190.474C269.928 188.106 273.46 192.251 276.653 188.857C277.656 183.484 278.914 186.503 277.699 181.505C275.933 179.18 270.225 176.219 273.601 171.496C275.41 168.247 273.022 165.112 270.733 160.086C271.454 160.866 274.11 160.202 270.239 157.515C268.572 153.558 269.32 151.291 268.812 146.149C270.917 141.498 270.903 139.129 270.069 136.342C271.948 132.226 271.807 130.897 273.743 128.644C274.124 129.583 275.989 127.965 274.816 126.116C274.972 121.697 276.455 120.426 278.207 115.515C280.157 113.565 281.485 109.29 276.865 105.073C276.371 100.162 273.248 96.2914 273.432 94.3849C274.703 91.1642 269.942 87.8856 272.061 83.3071C271.539 80.6641 272.316 78.2376 270.875 72.0127C272.711 70.0629 271.962 70.164 271.284 69.3263C272.725 67.0876 273.912 65.6578 272.867 64.3723C271.496 64.9789 272.768 63.2891 273.46 62.6825C276.385 58.6962 277.19 55.6198 275.933 49.5538C277.402 45.5675 275.424 41.4223 274.732 36.4684C274.802 31.63 271.92 27.6726 272.259 23.4263C270.38 17.4036 272.09 13.3884 270.903 10.4131C269.97 8.05893 272.641 8.76664 270.818 7.72674C270.535 6.09468 269.405 5.66139 270.677 5.04034C270.832 3.19163 266.452 3.3505 266.777 4.37596C267.823 5.50251 264.46 2.77278 264.842 4.31818C261.324 2.52725 257.707 1.66067 254.019 4.80925C250.091 4.44817 248.678 6.23911 243.182 5.70471C238.054 6.08023 234.423 6.86016 232.388 6.12356C233.264 6.61463 230.424 4.82369 229.449 6.0369C225.719 6.05135 223.84 4.53483 220.492 3.52382C216.211 4.08709 214.317 0.692982 212.297 1.67511C207.818 3.71158 206.066 4.86702 200.81 4.31818C197.109 4.08709 194.551 5.41585 189.479 7.16346C185.311 8.2178 183.376 7.92894 177.47 7.42344C175.011 7.55342 174.644 6.35465 174.517 6.81683C169.713 6.34021 168.766 5.34364 164.669 4.89591C159.385 5.79137 158.339 3.20607 155.019 6.22466C151.473 6.28244 148.167 10.6298 146.033 11.2075C144.409 10.442 145.609 12.7096 140.933 11.2075C138.955 8.7522 137.584 10.9042 135.324 8.69442C131.325 4.72259 133.586 10.9475 129.545 6.75906C130.435 10.1532 126.903 4.52039 127.143 6.39798C125.321 5.57473 119.005 7.84228 116.335 7.06236C115.19 6.02246 105.978 4.01488 105.767 3.61047C98.688 8.27557 103.421 7.42344 104.057 2.74389Z" fill="#05130B" fillOpacity="0.82" />
										</svg>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}