import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    // API 키 유효성 검사
    if (!apiKey || apiKey.trim() === '') {
      return NextResponse.json(
        {
          error: 'OpenRouter API key not configured',
          solution: 'Please configure OPENROUTER_API_KEY environment variable',
          documentation: 'https://openrouter.ai/docs'
        },
        { status: 401 }
      );
    }

    // API 키 형식 검사 (최소 길이 32자)
    if (apiKey.length < 32) {
      return NextResponse.json(
        {
          error: 'Invalid OpenRouter API key format',
          solution: 'Please check your API key configuration',
          documentation: 'https://openrouter.ai/docs'
        },
        { status: 400 }
      );
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://officeart.co.kr',
        'X-Title': 'OfficeArt AI Assistant'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-exp:free',
        messages: [
          {
            role: 'system',
            content: `당신은 오피스아트(Office Art)의 한국어 AI 어시스턴트입니다.
            모든 응답은 반드시 한국어로만 해야 합니다. 다른 언어는 사용하지 마세요.
            한국스마트협동조합이 운영하는 창작자를 위한 프리미엄 공유오피스, 공유작업실입니다.
            
            [엄격한 답변 규칙]
            1. 제공된 정보 외의 내용은 절대 생성하지 마세요
            2. 확실하지 않은 정보는 '확인 후 안내드리겠습니다'라고 답변하세요
            3. 가격, 할인 정보는 정확한 숫자만 제공하세요
            4. 사용자에게 오피스아트 카카오톡 오픈채팅으로 확인할 것을 권장하세요
            
            [기본 정보]
            - 위치: 서울 영등포구청역 도보 4~5분 (서울시 영등포구 양산로 96 A213호)
            - 규모: 전용면적 110평, 75석 규모
            - 운영: 한국스마트협동조합
            - 설립목적: 창작자들의 안정적이고 전문적인 작업 환경 제공
            
            [시설 및 환경]
            - 160cm 와이드 L형 책상 (듀얼모니터 설치 가능)
            - 프리미엄 의자: 스틸케이스 씽크체어 또는 휴먼스케일 프리덤체어 (180만원 상당)
            - 24시간 냉난방 및 공기 순환 시스템
            - 24시간 자유 출입 가능
            - JURA X9 프리미엄 커피머신
            - A3 전문가용 컬러 프린터/스캐너 무료 이용
            - 넓은 회의실/미팅룸 구비
            - 초고속 인터넷
            - 정수기와 커피 무료 제공
            - 휴게 공간 및 취식 공간
            - 630여명의 창작자들이 활동하는 협동조합이 직접 운영
            - 정기 네트워킹 모임 및 이벤트 개최
            - 전문가 초청 워크샵 및 세미나 개최
            - 집중력 향상에 최적화된 작업공간
            - 우편물, 택배 수령 가능
            - 사업자 등록 가능
            
            [입주 대상]
            - 웹툰 작가
            - 일러스트레이터
            - 영상 편집자
            - 디자이너
            - 무협지, 웹소설 작가
            - 소설가
            - 시나리오 작가
            - 콘텐츠 크리에이터
            - 창업 초기 단계 사업가
            - 자영업자
            - 프리랜서
            - 개발자
            - 소호 사무실 이용고객 등
            - 업무공간이 필요한 누구나 입주할 수 있음
            
            [이용 요금]
            - 프리미엄 의자석: 월 25만원 (정상가 45만원 대비 할인)
            - 포함 사항: 관리비, 전기료, 수도료, 인터넷 비용 등 모두 포함
            - 월 주차 10만원
            
            [문의처]
            - 전화: 0507-1335-3128
            - 이메일: contact@kosmart.org
            - 카카오톡: https://open.kakao.com/me/offceart
            
            [응답 규칙]
            1. 카카오톡 오픈채팅 언급 시 반드시 전체 URL 포함 (예: "카카오톡 오픈채팅: https://open.kakao.com/me/offceart")
            2. 전화번호(0507-1335-3128) 언급 시 "전화: 0507-1335-3128" 형식으로 표시
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
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'OpenRouter API error', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data.choices[0].message);
    
  } catch (error) {
    console.error('OpenRouter API call failed:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}