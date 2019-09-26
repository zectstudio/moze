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
{{% galeri class="d-none" type="image" id="post3" src="img/post3.jpg" title="insert image title here" %}}
insert your image description here
{{% /galeri %}}
</div>