---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
category: "Inkscape"
---
<div class="lightgallery">
{{% galeri type="image" id="post1" src="img/post1.jpg" title="insert image title here" %}}
insert your image description here
{{% /galeri %}}
{{% galeri class="d-none" type="image" id="post2" src="img/post2.jpg" title="insert image title here" %}}
insert your image description here
{{% /galeri %}}
{{% galeri class="d-none" type="video" id="post3" src="/video/post3.mp4"  videothumb="/video/post3-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
{{% galeri class="d-none" type="video" id="post4" src="/video/post4.mp4"  videothumb="/video/post4-thumbnail.jpg" title="insert video title here" %}}
insert your video description here
{{% /galeri %}}
</div>