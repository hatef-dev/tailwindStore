import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

var vocabularySwiper = new Swiper(".vocabularySwiper", {
	modules:[Pagination ],
	direction: 'horizontal',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}
	}
});