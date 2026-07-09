# 개혁주의 성경연구 아카이브

GitHub Pages(Jekyll 기본 빌드, 별도 설치/빌드 도구 불필요)로 배포되는 무료 정적 사이트입니다.
`main` 브랜치에 push하면 GitHub이 자동으로 빌드해 배포합니다.

홈페이지는 구약/신약 -> 책 이름 순으로 폴더처럼 묶어서 목록을 보여줍니다.

## 새 연구 추가하는 법

1. Claude Code에서 `/bible-study <구절>` 로 연구를 생성한다.
2. `templates/study-template.md` 를 복사해 `_studies/<책이름>/<slug>.md` 로 저장한다.
   (예: `_studies/로마서/8-28-30.md`, `_studies/창세기/3-1-7.md`)
   `_studies/요나/1-4-10.md` 가 폴더 구조 예시다.
3. front matter(title, book, testament, reference, date, tags)를 채우고,
   생성된 연구 내용을 6개 섹션(원어 확인/문맥 분석/개혁주의 주석가 관점/조직신학적 함의/적용점/참고자료)에 붙여넣는다.
   `book` 값이 홈페이지에서 폴더 제목처럼 그룹핑되는 기준이 되므로, 같은 책은 항상 동일한 문자열로 통일한다.
4. `git add`, `git commit`, `git push` 하면 몇 분 내로 사이트에 자동 반영된다.

## 설교 인사이트

연구가 끝난 본문으로 설교 준비까지 이어가려면 Claude Code에서 `/sermon-insight <구절>` 을 실행한다.
해당 구절의 연구 파일(`_studies/<책이름>/...`)을 자동으로 찾아 근거로 삼아 설교 대지·적용 등을 생성한다.
설교 인사이트 자체는 이 사이트에 게시하지 않는 개인 작업 자료로 다룬다.

## 로컬 미리보기 (선택)

Ruby와 Jekyll이 설치되어 있다면:

```
bundle exec jekyll serve
```

없어도 무방하다 — GitHub Pages가 push 시 자동으로 빌드하므로 로컬 빌드 도구 없이도 운영 가능하다.

## 배포 주소

https://guenjaeko-dot.github.io/bible-study/
