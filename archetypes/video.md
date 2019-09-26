---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
category: "Inkscape"
---
<div class="lightgallery">
{{% galeri type="video" id="post1" src="/video/post1.mp4"  videothumb="/video/post1-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
</div>