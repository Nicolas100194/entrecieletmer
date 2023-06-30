<footer class="footer-container">
    <section class="footer-bloc-content">
        <div class="container-logo-footer">
            <a href="#"><img class="logo-footer" src="/entrecieletmere/wp-content/themes/entrecieletmer/assets/img/entrecieletmere_logo.png"></a>
        </div>
        <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container' => false,
            'menu_class' => 'footer-menu title-group-prestations',
        ])

        ?>
        <div class="footer-menu">
            <div class="menu-item">
                <a class="item-menu title-group">contact</a>
                <ul class="sub-menu">
                    <li class="menu-item">
                        <a class="item-menu">06 28 64 39 57</a>
                    </li>
                    <li class="menu-item">
                        <a class="item-menu">contact@entrecieletmere.fr</a>
                    </li>
                    <li class="menu-item">
                        <a class="item-menu">@entrecieletmere</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</footer>
</div>
<div class="site-cache" id="site-cache"></div>
</div>
</div>
<!--<script>ScrollReveal().reveal('.site-content');</script>-->
</body>
<?php wp_footer() ?>
</html>
