'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// http://codepen.io/ettrics/pen/WRbGRN
var StickyNavigation = function () {
	function StickyNavigation() {
		var _this = this;

		_classCallCheck(this, StickyNavigation);

		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 100; // container "height"
		var self = this;
		$('.et-hero-tab').click(function () {
			self.onTabClick(event, $(this));
		});
		$('.btn').click(function () {
			self.onTabClick(event, $(this));
		});
		$('.card-link').click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(function () {
			_this.onScroll();
		});
		$(window).resize(function () {
			_this.onResize();
		});
	}

	_createClass(StickyNavigation, [{
		key: 'onTabClick',
		value: function onTabClick(event, element) {
			event.preventDefault();
			var scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 35; // scroll positioning offset
			$('html, body').animate({ scrollTop: scrollTop }, 600);
		}
	}, {
		key: 'onScroll',
		value: function onScroll() {
			this.checkTabContainerPosition();
			this.findCurrentTabSelector();
		}
	}, {
		key: 'onResize',
		value: function onResize() {
			if (this.currentId) {
				this.setSliderCss();
			}
		}
	}, {
		key: 'checkTabContainerPosition',
		value: function checkTabContainerPosition() {
			var offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
			if ($(window).scrollTop() > offset + 300) {
				$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
			} else {
				$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
			}
		}
	}, {
		key: 'findCurrentTabSelector',
		value: function findCurrentTabSelector(element) {
			var newCurrentId = void 0;
			var newCurrentTab = void 0;
			var self = this;
			$('.et-hero-tab').each(function () {
				var id = $(this).attr('href');
				var offsetTop = $(id).offset().top - self.tabContainerHeight;
				var offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
				if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
					newCurrentId = id;
					newCurrentTab = $(this);
				}
			});
			if (this.currentId != newCurrentId || this.currentId === null) {
				this.currentId = newCurrentId;
				this.currentTab = newCurrentTab;
				this.setSliderCss();
			}
		}

		// BUG: colored span slider jumps to first position before executing
		// BUG: colored span disappears in between sections
		// TODO: keep colored span on previous section before transition to next

	}, {
		key: 'setSliderCss',
		value: function setSliderCss() {
			var width = 0; // originally 0
			var left = 0; // originally 0
			if (this.currentTab) {
				width = this.currentTab.css('width');
				left = this.currentTab.offset().left;
			}
			$('.et-hero-tab-slider').css('width', width);
			$('.et-hero-tab-slider').css('left', left);
		}
	}]);

	return StickyNavigation;
}();

new StickyNavigation();
