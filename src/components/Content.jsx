import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from './Stack';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function Content() {
	return (
		<div
			className='bg-primary w-full flex justify-center items-center py-10 lg:py-[10%] xl:pt-[7%] mt-[20%] md:mt-[10%] lg:mt-[3%] xl:mt-[4%]'
			id='home'>
			<div className='w-3/4 lg:w-[85%] xl:w-[67%] h-3/4 flex flex-col gap-8 justify-center items-center'>
				<div className='w-full lg:mb-0 flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-between items-center'>
					<div className='w-full lg:w-[55%] xl:w-3/5 flex flex-col gap-8 justify-center items-center lg:items-start text-center lg:text-left'>
						<h1 className='text-secondary text-3xl md:text-4xl xl:text-6xl font-semibold font-poppins'>
							Front-End {/* <br /> */}
							Developer{' '}
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='inline w-9 h-[35px] xl:w-[55px] xl:h-[54px]'
									width='55'
									height='54'
									viewBox='0 0 55 54'
									fill='none'>
									<path
										d='M26.3294 48.5491C24.4123 47.0623 6.61006 30.3313 6.41107 30.1483C5.62482 29.3885 5.12978 28.6005 4.99388 27.8781C4.85313 27.1277 5.09095 26.471 5.72189 25.8612C6.30915 25.2937 7.02745 24.9935 7.79914 24.9935C8.7407 24.9935 9.70652 25.425 10.5122 26.2083L18.5834 33.7037C18.7241 33.8351 18.9085 33.9007 19.0881 33.9007C19.2774 33.9007 19.4618 33.8304 19.6026 33.6943C19.8841 33.4223 19.8841 32.9814 19.6074 32.7093L6.72169 19.848C5.43069 18.6003 4.82401 16.6913 6.35768 15.2091C6.94494 14.6416 7.66324 14.3414 8.43493 14.3414C9.37649 14.3414 10.3423 14.7729 11.148 15.5562L24.3298 27.9766C24.4705 28.108 24.6549 28.1783 24.8394 28.1783C25.0238 28.1783 25.2131 28.108 25.3538 27.9719C25.6353 27.6999 25.6402 27.259 25.3587 26.9823L9.52694 11.2972C8.79408 10.589 8.35242 9.74 8.27477 8.91447C8.20197 8.07487 8.50773 7.29625 9.16294 6.66303C9.7502 6.09548 10.4685 5.79529 11.2402 5.79529C12.1817 5.79529 13.1476 6.22682 13.9532 7.00544L30.1004 22.2214C30.2412 22.3527 30.4256 22.4231 30.6101 22.4231C30.7945 22.4231 30.9838 22.3527 31.1245 22.2167C31.406 21.9447 31.4109 21.5038 31.1294 21.227L19.4036 9.58052C18.6659 8.86757 18.2242 8.02328 18.1514 7.19775C18.0786 6.35815 18.3844 5.57953 19.0396 4.94631C19.6268 4.37876 20.3451 4.07857 21.1168 4.07857C22.0584 4.07857 23.0242 4.5101 23.8299 5.29341C28.13 9.37414 39.3559 20.045 39.7344 20.439C41.1759 21.4006 41.4671 19.9465 41.5399 19.0037C41.6224 17.9061 40.3217 14.074 41.0788 10.6265C42.3504 6.04389 46.0147 6.79437 46.0972 6.83189C48.1065 7.74185 47.7231 9.10209 47.0096 11.8366L46.9368 12.3761C46.1894 15.9502 51.3243 26.5413 51.7029 27.334C53.717 31.593 56.0369 40.2282 48.354 47.6533C39.9334 55.7913 29.5083 51.6214 26.3294 48.5491Z'
										fill='url(#paint0_radial_11_28)'
									/>
									<path
										d='M37.133 53.1177C31.969 53.1177 27.5767 50.7302 25.844 49.0745C24.2861 47.8456 14.4531 38.671 6.44503 31.1615C6.11985 30.8566 5.93057 30.6831 5.91115 30.6596C5.00357 29.7825 4.44058 28.8678 4.28042 28.0048C4.09599 27.0245 4.41146 26.138 5.20741 25.364C5.93542 24.6605 6.82844 24.2899 7.79912 24.2899C8.93967 24.2899 10.0851 24.7965 11.0266 25.7111L19.0881 33.1972L6.1975 20.3358C4.71237 18.9005 3.96495 16.5224 5.84321 14.7119C6.57122 14.0083 7.46424 13.6378 8.43492 13.6378C9.57546 13.6378 10.7209 14.1444 11.6624 15.059L24.8345 27.4701L9.00762 11.7897C8.16313 10.9736 7.64381 9.97452 7.5516 8.98014C7.45938 7.92008 7.83795 6.94915 8.64846 6.16584C9.37647 5.46227 10.2695 5.09172 11.2402 5.09172C12.3759 5.09172 13.5213 5.5936 14.4677 6.50825L30.61 21.7195L18.8843 10.073C18.0349 9.25218 17.5156 8.25311 17.4282 7.25872C17.336 6.20336 17.7146 5.23243 18.5251 4.44912C19.2531 3.74555 20.1461 3.375 21.1168 3.375C22.2574 3.375 23.4028 3.88157 24.3443 4.79622L27.8436 8.11239C34.0802 14.0224 39.2927 18.9709 39.8509 19.5244C40.1227 19.7354 40.477 19.8152 40.6274 19.7448C40.7245 19.6979 40.8313 19.4821 40.8119 19.0272C40.7827 18.2298 40.6663 17.2401 40.5449 16.1941C40.3022 14.0928 40.0499 11.9164 40.3653 10.4811C41.0545 7.99044 42.4086 6.93508 43.4181 6.4801C44.8062 5.86096 46.1506 6.07672 46.4078 6.19398C48.9316 7.33846 48.4317 9.25218 47.7425 11.907L47.7279 11.9727L47.6503 12.5215C47.1455 14.923 49.7372 21.56 52.3289 26.9682L52.3678 27.0432C54.1004 30.7018 57.2212 40.0875 48.8733 48.1551C45.0343 51.8559 40.8798 53.1177 37.133 53.1177ZM7.79912 25.6971C7.22642 25.6971 6.68284 25.9269 6.23633 26.3584C5.77526 26.804 5.6151 27.2355 5.71217 27.7515C5.81894 28.319 6.25089 28.9945 6.92551 29.6511C6.93037 29.6558 7.1245 29.8388 7.45938 30.1483C18.826 40.8098 25.6887 47.1467 26.7856 48.0004L26.8438 48.0519C29.5229 50.6411 39.4772 55.2378 47.8396 47.1561C55.5419 39.7122 52.6444 31.0208 51.0379 27.6248L51.004 27.5545C49.3344 24.0741 45.5391 15.6313 46.2137 12.2635L46.3253 11.5599C47.0727 8.68933 47.1164 8.08894 45.8497 7.49794C45.476 7.43227 42.7969 7.11801 41.7728 10.8094C41.5156 11.9867 41.7631 14.1397 41.9815 16.0393C42.1077 17.1135 42.2242 18.1313 42.2533 18.9803C42.3018 20.3171 41.6466 20.8283 41.2487 21.0159C40.4381 21.3959 39.4723 21.0722 38.8705 20.5844L38.8074 20.5281C38.5113 20.2186 31.4691 13.544 26.8098 9.12554L23.3057 5.79998C22.1118 4.64143 20.5732 4.44912 19.5395 5.44819C19.0347 5.93601 18.8066 6.50825 18.86 7.14146C18.9182 7.80282 19.2871 8.49232 19.9035 9.08802L31.6535 20.7345C32.2068 21.2786 32.2068 22.1698 31.6438 22.7139C31.1051 23.2345 30.1538 23.2439 29.6005 22.728L13.4436 7.50732C12.2497 6.35346 10.7063 6.16115 9.67738 7.16022C9.17263 7.64804 8.94452 8.22028 8.99791 8.85349C9.061 9.51485 9.42986 10.209 10.0414 10.7954L25.878 26.4897C26.4361 27.0338 26.4313 27.925 25.8683 28.4691C25.3296 28.9898 24.3783 28.9992 23.825 28.4832L10.6384 16.0581C9.44442 14.8948 7.90104 14.7072 6.87213 15.7063C5.6151 16.9211 6.28487 18.4268 7.23613 19.3508L20.1316 32.2215C20.6849 32.7656 20.68 33.6521 20.117 34.1915C19.5734 34.7169 18.6319 34.7216 18.0786 34.2103L10.0074 26.7149C9.32794 26.0535 8.54654 25.6971 7.79912 25.6971Z'
										fill='#EDBD82'
									/>
									<path
										d='M38.5744 19.984C35.9099 25.2421 36.2545 32.6015 40.2537 38.5068C40.7051 39.3042 41.4768 38.9149 41.0836 38.094C36.2545 28.108 41.3166 20.9127 41.3166 20.9127L38.5744 19.984Z'
										fill='#EDBD82'
									/>
									<path
										d='M28.096 0.265198C29.5617 -0.105351 31.1245 -0.0725177 32.6436 0.269888C34.153 0.621675 35.6624 1.36277 36.7835 2.57292C37.8804 3.77369 38.555 5.23243 38.7831 6.76153C38.9967 8.27656 38.7977 9.8385 38.0551 11.1331C37.9678 9.67902 37.7057 8.34223 37.264 7.10863C37.0359 6.49417 36.769 5.90786 36.4438 5.35438C36.1235 4.8056 35.7449 4.2615 35.3421 3.8159C34.5219 2.90126 33.4104 2.1883 32.1631 1.63482C30.9109 1.06258 29.5471 0.640437 28.096 0.265198Z'
										fill='#B0BEC5'
									/>
									<path
										d='M28.4988 4.71179C29.3093 4.21459 30.3237 4.1114 31.2798 4.27557C32.2456 4.43974 33.1678 4.9041 33.8958 5.54669C34.6189 6.19867 35.1334 7.01951 35.4537 7.87318C35.609 8.30001 35.6867 8.7503 35.7595 9.18652C35.7838 9.6368 35.7838 10.0871 35.711 10.5374C35.3761 10.195 35.114 9.85257 34.8665 9.51954C34.5801 9.20528 34.3569 8.87225 34.0996 8.56737C33.5949 7.9623 33.1047 7.41351 32.5757 6.9257C32.0321 6.45196 31.4594 6.0345 30.7945 5.67334C30.1344 5.30279 29.3918 4.99321 28.4988 4.71179Z'
										fill='#90A4AE'
									/>
									<path
										d='M0.752013 34.4307C1.43634 35.7253 2.14979 36.9261 2.97972 37.9861C3.80479 39.0462 4.7512 39.9468 5.85292 40.5331C6.38679 40.8192 7.02259 41.0678 7.64382 41.2554C8.26991 41.4477 8.92026 41.5791 9.59003 41.6682C10.9296 41.8277 12.337 41.7995 13.827 41.5791C12.6719 42.55 11.1286 43.0659 9.55606 43.1785C7.96415 43.2817 6.34797 42.9487 4.90166 42.1607C3.44564 41.3586 2.3779 40.0828 1.70813 38.7272C1.03836 37.3623 0.679212 35.8942 0.752013 34.4307Z'
										fill='#B0BEC5'
									/>
									<path
										d='M5.33847 33.882C5.80925 34.67 6.27518 35.3032 6.78478 35.8567C7.28954 36.4101 7.83311 36.8651 8.42523 37.2779C9.02705 37.6766 9.68711 38.0284 10.4054 38.3801C10.7646 38.5584 11.148 38.6991 11.5265 38.9055C11.9197 39.0696 12.3176 39.2432 12.735 39.4918C12.2934 39.6513 11.842 39.7451 11.3809 39.8154C10.9247 39.8342 10.4539 39.8576 9.98802 39.7967C9.05617 39.6747 8.12432 39.3605 7.30895 38.8117C6.50814 38.2535 5.84323 37.4796 5.47922 36.6024C5.11036 35.73 5.00359 34.7544 5.33847 33.882Z'
										fill='#90A4AE'
									/>
									<defs>
										<radialGradient
											id='paint0_radial_11_28'
											cx='0'
											cy='0'
											r='1'
											gradientUnits='userSpaceOnUse'
											gradientTransform='translate(18.8145 15.9783) rotate(-44.0222) scale(43.4346 43.4093)'>
											<stop
												offset='0.3533'
												stopColor='#F9DDBD'
											/>
											<stop
												offset='0.8723'
												stopColor='#FFD29C'
											/>
										</radialGradient>
									</defs>
								</svg>
							</span>
						</h1>
						<h2 className='text-white text-lg md:text-2xl xl:text-3xl font-poppins'>
							Hello, my name is{' '}
							<span className='text-secondary'>Gabriela Manolache</span>. <br />{' '}
							I'm a passionate Front-End Developer based in Romania.{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='30'
								height='30'
								className='inline w-5 h-5 lg:w-7 lg:h-7'
								viewBox='0 0 30 30'
								fill='none'>
								<path
									d='M8.47348 19.7763C8.601 19.6438 8.73351 19.5138 8.87353 19.3988C9.28107 19.0563 10.3437 18.2612 10.9163 18.5912C11.2563 18.7862 11.2063 19.4413 11.0813 19.7138C10.7712 20.3864 9.98115 20.954 9.4961 21.5116C9.11605 21.9541 8.656 22.3516 8.24095 22.7667C7.57588 23.4318 6.9383 24.1794 6.22072 24.7869C6.21822 24.7869 0.467556 29.6425 0.467556 29.6425L0.0200043 29.1949L4.87807 23.4393C5.79067 22.5267 6.70077 21.6141 7.61338 20.704C7.90841 20.4139 8.18345 20.0814 8.47348 19.7763Z'
									fill='url(#paint0_linear_11_68)'
								/>
								<path
									d='M8.47348 19.8313C7.33335 18.6037 6.32073 17.2735 5.49814 15.8959C4.87056 14.8458 3.4179 12.398 4.57803 11.2329L5.59315 10.2177C6.54576 9.26762 9.05355 10.1427 11.8389 12.203L18.1296 5.91224C16.5519 3.81949 15.8043 2.07679 16.3794 1.50173L17.662 0.216579C18.4971 -0.618517 21.8125 1.34171 25.0679 4.59708C28.3208 7.84996 30.2835 11.1678 29.4459 12.0029L28.1632 13.2856C27.5857 13.8607 25.843 13.1131 23.7527 11.5354L17.4645 17.8261C19.5248 20.6139 20.3999 23.1217 19.4497 24.0743L18.4346 25.0894C17.2345 26.2896 14.6767 24.7269 13.6091 24.0718C11.7664 22.9442 10.0062 21.4815 8.47348 19.8313Z'
									fill='url(#paint1_linear_11_68)'
								/>
								<path
									d='M29.4859 11.7154C28.7658 12.4355 25.5905 10.4328 22.3951 7.2374C19.1997 4.04203 17.197 0.869161 17.9171 0.146578C18.6372 -0.573506 21.8125 1.42923 25.0079 4.62459C28.2033 7.81996 30.206 10.9953 29.4859 11.7154Z'
									fill='#00509D'
								/>
								<path
									d='M19.5823 23.9068C18.6872 24.8019 14.8742 22.4441 11.0688 18.6387C7.26334 14.8333 4.90306 11.0203 5.79817 10.1252C6.69327 9.23012 10.6637 10.4528 14.9842 14.8408C19.1747 19.0938 20.4774 23.0117 19.5823 23.9068Z'
									fill='#00509D'
								/>
								<path
									d='M10.8863 12.9556L18.1296 5.91225C18.1296 5.91225 19.4998 7.72496 20.5424 8.78758C21.585 9.8502 23.7577 11.5379 23.7577 11.5379L16.7269 18.5662C16.7269 18.5662 15.1918 17.9536 13.4316 16.1934C11.3813 14.1457 10.8863 12.9556 10.8863 12.9556Z'
									fill='url(#paint2_linear_11_68)'
								/>
								<path
									opacity='0.2'
									d='M18.3271 0.751643C18.4171 0.751643 18.9222 0.791648 20.1748 1.59174C20.1798 1.59424 20.1848 1.59674 20.1898 1.60174C21.5075 2.40433 23.0452 3.65698 24.5153 5.12715C26.1455 6.75734 27.5207 8.48754 28.2833 9.86769C28.2858 9.87269 28.2883 9.8752 28.2908 9.8802C28.8158 10.7878 28.8583 11.1803 28.8583 11.2779C28.8583 11.3029 28.8608 11.3254 28.8633 11.3504C28.8708 11.4304 28.8683 11.4779 28.8633 11.5029L27.6457 12.723C27.6332 12.7255 27.6107 12.728 27.5807 12.728C27.1081 12.728 25.938 12.258 24.1853 10.9378C24.0503 10.8353 23.8928 10.7853 23.7327 10.7853C23.5402 10.7853 23.3477 10.8603 23.2027 11.0053L16.9495 17.261C16.6894 17.5211 16.6569 17.9336 16.8719 18.2312C18.0496 19.8613 18.5896 21.0865 18.8372 21.8316L18.8647 21.9141C19.1672 22.8667 19.0772 23.3042 19.0247 23.3793C18.9972 23.4093 18.9747 23.4418 18.9522 23.4768C18.9347 23.5043 18.9172 23.5268 18.8972 23.5443L17.8821 24.5594C17.7871 24.6544 17.617 24.7794 17.2345 24.7794C16.1744 24.7794 14.6367 23.8343 13.9791 23.4318C12.714 22.6567 11.4788 21.7116 10.3087 20.6239C10.1637 20.4889 9.98115 20.4239 9.79863 20.4239C9.60861 20.4239 9.41859 20.4964 9.27107 20.6389C9.15856 20.7489 9.02854 20.8815 8.90603 21.0215C8.6735 21.2915 8.40347 21.549 8.11844 21.8191C7.97342 21.9566 7.8284 22.0941 7.68839 22.2341C7.46336 22.4591 7.24084 22.6942 7.02581 22.9217C6.60326 23.3693 6.16571 23.8293 5.71566 24.2119L5.72066 24.2194C5.53564 24.3669 5.08309 24.7469 3.87795 25.7645L5.41062 23.9493L7.11082 22.2491L8.12094 21.2365C8.30346 21.054 8.47598 20.864 8.641 20.6764C8.74851 20.5564 8.85852 20.4339 8.96853 20.3164C9.24107 20.0289 9.24357 19.5813 8.97354 19.2913C7.85841 18.0886 6.8983 16.816 6.11571 15.5083C4.92807 13.5256 4.58303 12.263 5.08309 11.7604L6.0957 10.7453C6.23072 10.6128 6.47825 10.5828 6.66577 10.5828C6.99331 10.5828 7.41586 10.6703 7.88841 10.8328C7.89341 10.8353 7.89591 10.8353 7.90091 10.8378C8.61349 11.0728 9.78613 11.5829 11.3263 12.683C11.4588 12.778 11.6113 12.823 11.7639 12.823C11.9539 12.823 12.1414 12.7505 12.2864 12.6105L18.6297 6.4448C18.8997 6.18227 18.9322 5.75722 18.7047 5.45469C17.202 3.46196 16.8544 2.28932 16.917 1.99679L18.1396 0.774146C18.1471 0.774146 18.1546 0.771645 18.1646 0.771645C18.2146 0.766645 18.2571 0.761644 18.3046 0.746642C18.3046 0.754143 18.3121 0.751643 18.3271 0.751643ZM18.3271 0.0015564C18.2446 0.0015564 18.1696 0.0115576 18.1021 0.0315599C17.9096 0.0465617 17.752 0.106569 17.6395 0.219082L16.3569 1.50423C15.7818 2.0793 16.5294 3.822 18.1071 5.91474L11.7639 12.0779C10.3912 11.0953 9.14605 10.4603 8.13594 10.1277C7.58837 9.9377 7.09082 9.83769 6.66827 9.83769C6.20322 9.83769 5.82817 9.96021 5.56814 10.2177L4.55303 11.2329C3.39289 12.3955 4.84306 14.8433 5.47313 15.8959C6.29073 17.2635 7.29584 18.5862 8.42597 19.8038C8.14594 20.1014 7.87841 20.4214 7.59338 20.7064C6.68327 21.6191 5.77067 22.5317 4.85806 23.4418L0 29.1974L0.447552 29.645C0.447552 29.645 6.19822 24.7894 6.20072 24.7894C6.9208 24.1818 7.55837 23.4343 8.22095 22.7692C8.636 22.3541 9.09355 21.9591 9.47609 21.514C9.5736 21.4015 9.68362 21.289 9.79863 21.1765C10.9838 22.2766 12.2639 23.2617 13.5866 24.0743C14.3742 24.5569 15.9693 25.532 17.2345 25.532C17.687 25.532 18.0971 25.407 18.4121 25.092L19.4272 24.0768C19.4872 24.0168 19.5398 23.9493 19.5848 23.8793C19.9023 23.5193 19.9123 22.7442 19.5773 21.6891C19.5673 21.6591 19.5573 21.6266 19.5473 21.5965C19.1997 20.5489 18.5221 19.2363 17.4795 17.7961L23.7352 11.5404C25.3504 12.7605 26.7581 13.4831 27.5807 13.4831C27.8232 13.4831 28.0132 13.4206 28.1432 13.2906L29.4259 12.0079C29.5834 11.8504 29.6409 11.6004 29.6084 11.2829C29.6059 10.8678 29.3684 10.2552 28.9408 9.51265C28.1733 8.12249 26.7981 6.35479 25.0479 4.60459C23.4777 3.02691 21.895 1.75926 20.5799 0.961667C19.6223 0.346596 18.8297 0.0015564 18.3271 0.0015564Z'
									fill='#424242'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_11_68'
										x1='5.24211'
										y1='23.6568'
										x2='6.38824'
										y2='24.8044'
										gradientUnits='userSpaceOnUse'>
										<stop stopColor='#F5F5F5' />
										<stop
											offset='0.1455'
											stopColor='#EFEFEF'
										/>
										<stop
											offset='0.3368'
											stopColor='#DFDFDF'
										/>
										<stop
											offset='0.5535'
											stopColor='#C3C3C3'
										/>
										<stop
											offset='0.7872'
											stopColor='#9E9E9E'
										/>
										<stop
											offset='1'
											stopColor='#757575'
										/>
									</linearGradient>
									<linearGradient
										id='paint1_linear_11_68'
										x1='10.1079'
										y1='5.56445'
										x2='23.9853'
										y2='19.4423'
										gradientUnits='userSpaceOnUse'>
										<stop
											offset='0.0048445'
											stopColor='#004384'
										/>
									</linearGradient>
									<linearGradient
										id='paint2_linear_11_68'
										x1='14.2551'
										y1='9.52791'
										x2='19.9901'
										y2='15.2626'
										gradientUnits='userSpaceOnUse'>
										<stop
											offset='0.3689'
											stopColor='#00509D'
										/>
										<stop
											offset='0.885417'
											stopColor='#0073E1'
										/>
									</linearGradient>
								</defs>
							</svg>
						</h2>
						<div className='flex gap-4 text-white text-3xl'>
							<a
								target='blank'
								href='https://www.linkedin.com/in/gabriela-manolache-240916215/'>
								<FontAwesomeIcon
									className='hover:text-secondary'
									icon={faLinkedin}
								/>
							</a>
							<a
								target='blank'
								href='https://github.com/manolache1gabriela'>
								<FontAwesomeIcon
									className='hover:text-secondary'
									icon={faGithub}
								/>
							</a>
							<a
								href='/content/resume.pdf'
								target='_blank'
								className='hover:underline'>
								<FontAwesomeIcon
									className=' hover:text-secondary'
									icon={faFile}
								/>
							</a>
						</div>
					</div>
					<div className='w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 overflow-hidden border-secondary animate-border flex justify-center items-center'>
						<img
							className='w-full'
							src='./assets/foto.jpg'
							alt='personal portrait'
						/>
					</div>
				</div>
				<Stack />
			</div>
		</div>
	);
}
