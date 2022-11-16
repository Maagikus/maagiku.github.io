import './Header.scss'
import { Outlet, Link, Router } from "react-router-dom";
function Header() {
	return (

		<div class="header">
			<div class="header__container">
				<div class="header__wrapper">
					<div class="header__list">
						<li class="header__item"><Link className="header__link" to='/'> learn</Link></li>
						<li class="header__item"><Link className="header__link" to='/quize'> quize</Link></li>
					</div>
				</div>
			</div>
		</div>


	)
}
export default Header