<?php

function disable_gutenberg_editor(){
    return false;
}

function themeentrecieletmere_supports(){
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
    register_nav_menu('primary', 'Menu principal');
}


function themeentrecieletmere_register_assets(){
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('swiper', get_stylesheet_directory_uri().'/assets/js/swiper.js');
    wp_enqueue_script('swiperjs-js', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js');
    wp_enqueue_script('menu', get_stylesheet_directory_uri().'/assets/js/menu.js', array(), null, true);
    wp_enqueue_style('themeentrecieletmere', get_stylesheet_directory_uri().'/assets/sass/main.css');
    wp_enqueue_style('swiperjs', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');
}

function themeentrecieletmere_menu_link_class($attrs){

    $attrs['class'] = 'item-menu';
    return $attrs;
}

function themeentrecieletmere_submenu_class($classes){
    $classes[] = 'sous-menu';
    return $classes;
}

function themeentrecieletmere_menu_class($classes){
    $classes[] = 'bloc-menu';
    return $classes;
}

function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );
    unset( $tabs['reviews'] );
    unset( $tabs['additional_information'] );
    return $tabs;
}

function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce', array(
        'thumbnail_image_width' => 200,
        'single_image_width'    => 300,

        'product_grid'          => array(
            'default_rows'    => 2,
            'default_columns' => 2,
        ),
    ) );
}



remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 ); //informations complémentaires -> non

register_nav_menu('footer', 'footer menu');

add_filter('nav_menu_link_attributes', 'themeentrecieletmere_menu_link_class');
add_action('after_setup_theme','themeentrecieletmere_supports');
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );
add_action('wp_enqueue_scripts', 'themeentrecieletmere_register_assets');
add_filter('nav_menu_submenu_css_class', 'themeentrecieletmere_submenu_class');
add_filter('nav_menu_css_class', 'themeentrecieletmere_menu_class');
add_filter("use_block_editor_for_post_type", "disable_gutenberg_editor");