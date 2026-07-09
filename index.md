---
layout: default
---

<div class="controls">
  <input type="text" id="search" placeholder="구절, 책 이름, 키워드로 검색 (예: 요나, 섭리, 롬8)" autocomplete="off">
</div>

<div id="study-groups">
{% assign by_testament = site.studies | group_by: 'testament' %}
{% for tgroup in by_testament %}
  <section class="testament-group">
    <h2 class="testament-heading">{{ tgroup.name }}</h2>
    {% assign by_book = tgroup.items | group_by: 'book' %}
    {% for bgroup in by_book %}
      <section class="book-group">
        <h3 class="book-heading">{{ bgroup.name }}</h3>
        <ul class="study-list">
        {% assign items = bgroup.items | sort: 'reference' %}
        {% for study in items %}
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
      </section>
    {% endfor %}
  </section>
{% endfor %}
</div>

{% if site.studies.size == 0 %}
<p class="empty">아직 등록된 연구가 없습니다.</p>
{% endif %}

<script src="{{ '/assets/search.js' | relative_url }}"></script>
