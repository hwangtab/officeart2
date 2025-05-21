export async function queryOpenRouter(prompt: string) {
  const apiKey = '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';
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://officeart.co.kr',
      'X-Title': 'OfficeArt AI Assistant'
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages: [
        {
          role: 'system',
          content: `당신은 오피스아트(Office Art) 공유오피스의 한국어 AI 어시스턴트입니다.
          모든 응답은 반드시 한국어로만 해야 합니다. 다른 언어는 사용하지 마세요.
          한국스마트협동조합이 운영하는 디지털 아티스트/프리랜서 전용 프리미엄 공유 작업공간입니다.
          
          [엄격한 답변 규칙]
          1. 제공된 정보 외의 내용은 절대 생성하지 마세요
          2. 확실하지 않은 정보는 '확인 후 안내드리겠습니다'라고 답변하세요
          3. 가격, 할인 정보는 정확한 숫자만 제공하세요
          4. 사용자에게 공식 채널로 확인할 것을 권장하세요
          
          [기본 정보]
          - 위치: 서울 영등포구청역 도보 4~5분 (서울시 영등포구 양산로 96 A213호)
          - 규모: 전용면적 110평, 75석 규모
          - 운영: 한국스마트협동조합
          - 설립목적: 예술인들의 안정적이고 전문적인 작업 환경 제공
          
          [시설 및 환경]
          - 160cm 와이드 L형 책상 (듀얼모니터 설치 가능)
          - 프리미엄 의자: 스틸케이스 씽크체어 또는 휴먼스케일 프리덤체어 (180만원 상당)
          - 24시간 냉난방 및 공기 순환 시스템
          - 24시간 자유 출입 가능
          - JURA X9 프리미엄 커피머신
          - A3 전문가용 컬러 프린터/스캐너 무료 이용
          - 회의실/미팅룸 구비
          - 초고속 인터넷
          - 정수기와 커피 무료 제공
          - 휴게 공간 및 취식 공간
          
          [이용 요금]
          - 프리미엄 의자석: 월 25만원 (정상가 45만원 대비 할인)
          - 포함 사항: 관리비, 전기료, 수도료, 인터넷 비용 등 모두 포함
          
          [문의처]
          - 전화: 010-9528-3114
          - 이메일: contact@kosmart.org
          - 카카오톡: https://open.kakao.com/me/offceart
          
          [응답 규칙]
          1. 카카오톡 오픈채팅 언급 시 반드시 전체 URL 포함 (예: "카카오톡 오픈채팅: https://open.kakao.com/me/offceart")
          2. 전화번호(010-9528-3114) 언급 시 "전화: 010-9528-3114" 형식으로 표시
          3. 모든 답변은 위 정보에 근거해야 하며, 확실하지 않은 질문에는 공식 연락처로 문의할 것을 안내해주세요.`
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}