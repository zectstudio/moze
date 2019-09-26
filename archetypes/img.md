---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
category: "Inkscape"
---
<div class="lightgallery">
{{% galeri type="image" id="post1" src="img/post1.jpg" title="insert image title here" %}}
insert your image description here
{{% /galeri %}}
</div>