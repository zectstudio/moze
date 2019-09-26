---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
category: "Inkscape"
---
<div class="lightgallery">
{{% galeri type="video" id="post1" src="/video/post1.mp4"  videothumb="/video/post1-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
{{% galeri class="d-none" type="video" id="post2" src="/video/post2.mp4"  videothumb="/video/post2-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
{{% galeri class="d-none" type="video" id="post3" src="/video/post3.mp4"  videothumb="/video/post3-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
</div>