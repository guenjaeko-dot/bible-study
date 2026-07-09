# 개혁주의 성경연구 아카이브

GitHub Pages(Jekyll 기본 빌드, 별도 설치/빌드 도구 불필요)로 배포되는 무료 정적 사이트입니다.
`main` 브랜치에 push하면 GitHub이 자동으로 빌드해 배포합니다.

## 새 연구 추가하는 법

1. Claude Code에서 `/bible-study <구절>` 로 연구를 생성한다.
2. `templates/study-template.md` 를 복사해 `_studies/<slug>.md` 로 저장한다.
   (slug 예: `romans-8-28-30.md`, `genesis-3-1-7.md`)
3. front matter(title, book, testament, reference, date, tags)를 채우고,
   생성된 연구 내용을 6개 섹션(원어 확인/문맥 분석/개혁주의 주석가 관점/조직신학적 함의/적용점/참고자료)에 붙여넣는다.
4. `git add`, `git commit`, `git push` 하면 몇 분 내로 사이트에 자동 반영된다.

## 로컬 미리보기 (선택)

Ruby와 Jekyll이 설치되어 있다면:

```
bundle exec jekyll serve
```

없어도 무방하다 — GitHub Pages가 push 시 자동으로 빌드하므로 로컬 빌드 도구 없이도 운영 가능하다.

## 배포 주소

`https://<github-username>.github.io/<repo-name>/`
