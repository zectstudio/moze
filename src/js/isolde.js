class isolde {
	constructor({
		parent: t = document.querySelector("#isolde"),
		links: e = document.querySelectorAll("[data-isolde-link]"),
		active: i = "is-active",
		margin: s = 18,
		responsive: n = {
			980: {
				columns: 5
			},
			480: {
				columns: 3
			},
			0: {
				columns: 2
			}
		},
		fadeDuration: l = { in : 300,
			out: 0
		}
	} = {}) {
		this.parent = t, this.links = Array.from(e), this.active = i, this.margin = s, this.responsive = n, this.fadeDuration = l, this.elements = Array.from(this.parent.children), this.activeElements = this.elements, this.columns = 1, this.dataLink = "all", this.winWidth = window.innerWidth, this.init()
	}
	orderelements() {
		let {
			parent: t,
			activeElements: e,
			columns: i,
			blocWidth: s,
			responsive: n,
			margin: l
		} = this, a = e.reduce((t, e, n) => {
			let a = this._sumArrHeight(t, i),
				r = n % i * (s + l),
				o = n - i >= 0 ? a[n % i] + l * Math.floor(n / i) : 0;
			return e.style.transform = `translate3d(${r}px, ${o}px, 0)`, t.push(e.offsetHeight), t
		}, []), r = this._sumArrHeight(a, i), o = Math.max(...r) + l * (Math.floor(e.length / i) - 1);
		t.style.height = `${o}px`
	}
	handleFilterClick(t, e) {
		t.preventDefault();
		let {
			links: i,
			active: s
		} = this;
		e.dataset.isoldeLink !== this.dataLink && (this.dataLink = e.dataset.isoldeLink, i.forEach(t => {
			t.isEqualNode(e) ? t.classList.add(s) : t.classList.remove(s)
		}), this._filterElements(() => {
			this.orderelements()
		}))
	}
	resize() {
		window.addEventListener("resize", () => {
			clearTimeout(window.sortableResize), window.sortableResize = setTimeout(() => {
				this.winWidth = window.innerWidth, this._setBlocWidth(() => {
					this.orderelements()
				})
			}, 500)
		})
	}
	init() {
		let {
			parent: t,
			links: e,
			active: i
		} = this;
		e.forEach((t, e) => {
			0 === e && (t.classList.add(i), this.dataLink = t.dataset.isoldeLink), t.addEventListener("click", e => {
				this.handleFilterClick(e, t)
			})
		}), this._setBlocWidth(), window.addEventListener("load", () => {
			this._filterElements(() => {
				this.orderelements()
			}), t.style.opacity = 1
		}), this.resize()
	}
	_setBlocWidth(t) {
		let {
			parent: e,
			elements: i,
			margin: s,
			responsive: n
		} = this, l = this.columns = this._columnsCount(n).columns, a = this.blocWidth = (e.clientWidth - s * (l - 1)) / l;
		i.forEach(t => {
			t.style.width = `${a}px`
		}), t && t()
	}
	_filterElements(t) {
		let {
			elements: e,
			dataLink: i,
			fadeDuration: s
		} = this;
		this.activeElements = e.filter(t => "all" === i ? (this._fadeIn(t, s.in), !0) : t.dataset.isoldeEl !== i ? (this._fadeOut(t, s.out), !1) : (this._fadeIn(t, s.in), !0)), t && t()
	}
	_sumArrHeight(t, e) {
		return t.reduce((t, i, s) => {
			let n = s % e;
			return t[n] || (t[n] = 0), t[n] = t[n] + i, t
		}, [])
	}
	_columnsCount(t) {
		let {
			winWidth: e
		} = this;
		return Object.entries(t).reduce((t, i) => e > i[0] && i[0] >= Math.max(t.width) ? {
			width: i[0],
			columns: i[1].columns
		} : t, {
			width: 0,
			columns: 4
		})
	}
	_fadeIn(t, e = 300, i) {
		let s = parseFloat(window.getComputedStyle(t, null).getPropertyValue("opacity")),
			n = 16 / e;
		t.style.display = "block", requestAnimationFrame(function e() {
			(s += n) <= 1 ? (t.style.opacity = s, requestAnimationFrame(e)) : (t.style.opacity = 1, i && i())
		})
	}
	_fadeOut(t, e = 300, i) {
		let s = parseFloat(window.getComputedStyle(t, null).getPropertyValue("opacity")),
			n = e ? 16 / e : 1;
		requestAnimationFrame(function e() {
			(s -= n) >= 0 ? (t.style.opacity = s, requestAnimationFrame(e)) : (t.style.opacity = 0, t.style.display = "none", i && i())
		})
	}
}
export default isolde;

const ijs = new isolde();
