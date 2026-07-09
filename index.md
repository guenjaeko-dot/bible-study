---
layout: default
---

<div class="controls">
  <input type="text" id="search" placeholder="구절, 책 이름, 키워드로 검색 (예: 요나, 섭리, 롬8)" autocomplete="off">
</div>

<ul id="study-list" class="study-list">
{% assign studies = site.studies | sort: 'date' | reverse %}
{% for study in studies %}
  <li class="study-card" data-search="{{ study.title | strip_html | downcase }} {{ study.book | downcase }} {{ study.reference | downcase }} {{ study.tags | join: ' ' | downcase }}">
    <a href="{{ study.url | relative_url }}">
      <span class="card-ref">{{ study.reference }}</span>
      <span class="card-title">{{ study.title }}</span>
    </a>
    {% if study.tags and study.tags.size > 0 %}
    <span class="card-tags">{% for tag in study.tags %}<span class="tag">{{ tag }}</span>{% endfor %}</span>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.studies.size == 0 %}
<p class="empty">아직 등록된 연구가 없습니다.</p>
{% endif %}

<script src="{{ '/assets/search.js' | relative_url }}"></script>
