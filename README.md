# 황세연 포트폴리오

서울대학교 언론정보학과 석사과정 황세연의 포트폴리오 웹사이트입니다.

## 기술 스택

- [Next.js](https://nextjs.org/) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

## Vercel 배포

1. GitHub 저장소에 코드를 푸시합니다.
2. [Vercel](https://vercel.com)에서 새 프로젝트를 생성하고 해당 저장소를 연결합니다.
3. 프레임워크는 Next.js로 자동 감지되며, 별도 설정 없이 배포할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/           # Next.js App Router 페이지
├── components/    # UI 컴포넌트
└── data/          # 포트폴리오 데이터
docs/              # 원본 마크다운 문서
```

## 콘텐츠 수정

포트폴리오 내용은 `src/data/portfolio.ts` 파일에서 수정할 수 있습니다. 원본 문서는 `docs/snu-seyeon-portfolio.md`에 있습니다.
