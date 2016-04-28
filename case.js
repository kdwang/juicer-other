// tpl example
var tpl = '<div class="floor gather_node">

        <h2>$_{title}</h2>
        
        <ul class="swiper-wrapper">
            {^each result as it, index}
            <li class="swiper-slide">
                <a href="$_{it.product_url}"><img src="$_{it.image_url}" alt=""></a>
            </li>
            {^/each}
        </ul>

    </div>';


// controller example
var html = juicer(tpl, {
    title : res.title,
    result : res.result
});
