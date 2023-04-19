<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entre Ciel et Mère</title>
    <?php wp_head()?>
</head>
<body>
    <div class="site-container">
        <div class="site-pusher">
            <header>
                <a href="#" class="header-icon" id="header-icon"></a>
                <a class="logo-header-desktop" href="http://localhost/entrecieletmere">
                    <img class="logo-header logo-mobile" src="/entrecieletmere/wp-content/themes/entrecieletmer/assets/img/entrecieletmere_logo.png">
                    <img class="logo-header logo-default" src="/entrecieletmere/wp-content/themes/entrecieletmer/assets/img/logo.svg">
                </a>
                <div class="container-menus">
                    <?php wp_nav_menu(['theme_location' => 'primary' ])?>
                    <?php wp_nav_menu(['theme_location' => 'header'])?>
                </div>

            </header>
            <div class="site-content">