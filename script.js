console.clear();

const team = [
{
  rank: 1,
  name: 'Abdulrahman Alharbi',
  img: 'https://media.licdn.com/dms/image/C4D03AQFdsIFPlJXXkQ/profile-displayphoto-shrink_100_100/0/1661078572801?e=1697068800&v=beta&t=oxdf9LTBvsQeCibBgCRZSZ3ZnfQDlSxTeK4A9z3M_Og'},
{
  rank: 2,
  name: 'Abdulrahman Boksmati',
  img: 'https://media.licdn.com/dms/image/D4D03AQHU8Z1DMVfEDw/profile-displayphoto-shrink_100_100/0/1687123189950?e=1697068800&v=beta&t=ofs98ZQLyRdBZqXvQ7tMWDMGqcAdfRidDpbVsx1Hjhw'}];

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
  }
  list.appendChild(newRow);
});

let winner = team[0];
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16"><span style='color:#FC4EF6;'>2023 Winner</span></div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
`;