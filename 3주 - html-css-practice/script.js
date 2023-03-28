function generateName() {
    // 사용자 입력값 가져오기
    var gender = document.getElementById("gender").value;
    var color = document.getElementById("color").value;
    var personality = document.getElementById("personality").value;
    
    // 이름 생성
    var names = {
      male: {
        black: {
          playful: "콜라",
          shy: "스모키",
          curious: "달링",
          relaxed: "빅토르",
          bold: "로미오",
          sweet: "미로"
        },
        white: {
          playful: "코코",
          shy: "루시",
          curious: "쿠퍼",
          relaxed: "오스카",
          bold: "제임스",
          sweet: "토비"
        },
        gray: {
          playful: "핑크",
          shy: "그레이",
          curious: "냥이",
          relaxed: "우디",
          bold: "바톤",
          sweet: "체리"
        },
        brown: {
          playful: "몽키",
          shy: "베어",
          curious: "타이거",
          relaxed: "체스터",
          bold: "아서",
          sweet: "체리"
        },
        orange: {
          playful: "톰",
          shy: "빈센트",
          curious: "마시",
          relaxed: "오드리",
          bold: "아더",
          sweet: "유니"
        },
        calico: {
          playful: "클라우디아",
          shy: "마시모",
          curious: "토스카",
          relaxed: "제니",
          bold: "마리",
          sweet: "하니"
        }
      },
      female: {
        black: {
          playful: "비비안",
          shy: "씨스타",
          curious: "스텔라",
          relaxed: "그레이스",
          bold: "아리아",
          sweet: "애쉬"
        },
        white: {
          playful: "베일리",
          shy: "애미",
          curious: "크리스티",
          relaxed: "도로시",
          bold: "마리",
          sweet: "토스카"
        },
        gray: {
          playful: "캔디",
          shy: "피넛",
          curious: "허니",
          relaxed: "샴푸",
          bold: "헤이즐",
          sweet: "다이아"
        },
        brown: {
          playful: "버터컵",
          shy: "미니",
          curious: "슈가",
          relaxed: "윈디",
          bold: "모카",
          sweet: "사라"
        },
        orange: {
          playful: "핑크",
          shy: "레드",
          curious: "카밀",
          relaxed: "루루",
          bold: "사무라이",
          sweet: "빈츠"
          },
          calico: {
            playful: "베라",
            shy: "무니",
            curious: "리나",
            relaxed: "아델",
            bold: "루나",
            sweet: "메이블"
          }
        }
      };
      
      var name = names[gender][color][personality];
      
      // 이름 출력
      var nameResult = document.getElementById("nameResult");
      nameResult.innerHTML = "<p>당신의 고양이 이름은 " + name + " 입니다!</p>";
    }
       
  