</div>
<div class="site-cache" id="site-cache"></div>
</div>
</div>
<footer class="footer-container">
    <div class="container-logo-footer">
        <a href="#"><img class="logo-footer" src="/entrecieletmere/wp-content/themes/entrecieletmer/assets/img/entrecieletmere_logo.png"></a>
    </div>
    <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container' => false,
            'menu_class' => 'footer-menu',
        ])

    ?>
    <div class="footer-menu">
        <div class="menu-item">
            <a class="item-menu">contact</a>
            <ul class="sub-menu">
                <li class="menu-item">
                    <a class="item-menu">téléphone : 06 28 64 39 57</a>
                </li>
            </ul>
        </div>
    </div>
</footer>
</body>
<?php wp_footer() ?>
</html>