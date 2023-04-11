// DOM 요소 참조
const nameInput = document.getElementById('name');
const addNameBtn = document.getElementById('add-name');
const removeNameBtn = document.getElementById('remove-name');
const resetNamesBtn = document.getElementById('reset-names');
const nameList = document.getElementById('name-list');
const numTeamsInput = document.getElementById('num-teams');
const teamSizeInput = document.getElementById('team-size');
const divideTeamsBtn = document.getElementById('divide-teams');
const textResult = document.getElementById('text-result');
const saveImageBtn = document.getElementById('save-image');
const imageResult = document.getElementById('image-result');

// 이름 목록
let names = [];

// 이름 추가
addNameBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name && !names.includes(name)) {
    names.push(name);
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
    nameInput.value = '';
  }
});

// 선택한 이름 삭제
removeNameBtn.addEventListener('click', () => {
  const selectedName = nameList.querySelector('li.selected');
  if (selectedName) {
    names = names.filter(name => name !== selectedName.textContent);
    nameList.removeChild(selectedName);
  }
});

// 모든 이름 삭제
resetNamesBtn.addEventListener('click', () => {
  names = [];
  nameList.innerHTML = '';
});

// 팀 인원 설정 시 팀 수 초기화
teamSizeInput.addEventListener('input', () => {
  numTeamsInput.value = '';
});

// 팀 수 설정 시 팀 인원 초기화
numTeamsInput.addEventListener('input', () => {
  teamSizeInput.value = '';
});

// 팀 나누기
divideTeamsBtn.addEventListener('click', () => {
  const numTeams = parseInt(numTeamsInput.value);
  const teamSize = parseInt(teamSizeInput.value);

  if ((!numTeams && !teamSize) || names.length === 0) {
    return;
  }

// 팀 수가 사람 수를 초과하는 경우 처리
if (numTeams > names.length) {
    alert('팀 수가 사람 수를 초과할 수 없습니다.');
    return;
  }


  // 이름 무작위로 섞기
  const shuffledNames = names.slice().sort(() => Math.random() - 0.5);

  // 팀 구성
  let teams;
  if (numTeams) {
    teams = Array.from({ length: numTeams }, () => []);
    shuffledNames.forEach((name, index) => {
      teams[index % numTeams].push(name);
    });
  } else {
    teams = [];
    for (let i = 0; i < shuffledNames.length; i += teamSize) {
      teams.push(shuffledNames.slice(i, i + teamSize));
    }
  }

  // 결과 출력
  textResult.innerHTML = teams
    .map((team, index) => `팀 ${index + 1}: ${team.join(', ')}`)
    .join('<br>');
});

// 결과 이미지로 저장
saveImageBtn.addEventListener('click', () => {
    if (!textResult.innerHTML) {
      return;
    }
  
    const lines = textResult.innerHTML.split('<br>');
    const lineHeight = 40;
    const padding = 20;
  
    imageResult.width = textResult.offsetWidth + padding * 2;
    imageResult.height = lineHeight * lines.length + padding * 2;
  
    const ctx = imageResult.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, imageResult.width, imageResult.height);
    ctx.fillStyle = 'black';
    ctx.font = '24px sans-serif'; // 글자 크기를 변경했습니다.
    ctx.textAlign = 'center'; // 텍스트를 중앙 정렬했습니다.
    lines.forEach((line, index) => {
      ctx.fillText(line, imageResult.width / 2, lineHeight * (index + 1) + padding);
    });
  
    // 이미지 다운로드 링크 생성
    const link = document.createElement('a');
    link.href = imageResult.toDataURL('image/png');
    link.download = 'team-results.png';
    link.click();
  });
  

// 이름 목록에서 선택 처리
nameList.addEventListener('click', event => {
if (event.target.tagName === 'LI') {
const prevSelected = nameList.querySelector('li.selected');
if (prevSelected) {
prevSelected.classList.remove('selected');
}
event.target.classList.add('selected');
}
});

// 이스터에그

nameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && nameInput.value.toLowerCase() === '고양이') {
      divideTeamsBtn.style.backgroundColor = '#4CAF50';
      nameInput.value = '';
    }
  });
  
