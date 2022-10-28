<?php

function disable_gutenberg_editor(){
    return false;
}

function themeentrecieletmere_supports(){
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('title-tag');
    register_nav_menu('primary', 'Menu principal');
}


function themeentrecieletmere_register_assets(){
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('swiper', get_stylesheet_directory_uri().'/assets/js/swiper.js');
    wp_enqueue_script('swiperjs-js', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js');

    wp_enqueue_style('themeentrecieletmere', get_stylesheet_directory_uri().'/assets/sass/main.css');
    wp_enqueue_style('swiperjs', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');
}

add_action('after_setup_theme','themeentrecieletmere_supports');
add_action('wp_enqueue_scripts', 'themeentrecieletmere_register_assets');
add_filter("use_block_editor_for_post_type", "disable_gutenberg_editor");