import React  from 'react';
import { Link } from 'react-router-dom';
import ebookcss from '../css/index.module.css';
import tableimg from '../img/wood.jpg';

function Ebook() {
	document.body.style.backgroundImage = "url(" + tableimg + ")";
	
  return (
		<div className="Ebook">
			<section className={ebookcss.main}>
				<table className={ebookcss.table}>
					<thead>
						<tr>
							<th>목록1</th>
							<th>목록2</th>
							<th>목록3</th>
							<th>목록4</th>
							<th>목록5</th>
							<th>목록6</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td className={ebookcss.errorBook}>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td className={ebookcss.errorBook}>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
							<td>
								<form method="GET">
									<input type="hidden" name="id" value="1" />
									<input type="submit" value="1" />
								</form>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
  );
}

export default Ebook;
