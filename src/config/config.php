<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-02-21
 * Time: 21:12
 */
return [
    // 默认语言
    'lang' => 'zh-cn',
    //主题 light 暗黑dark
    'theme' => 'light',
    //菜单主题 dark light
    'menu_theme' => 'dark',
    //导航模式 sideTopMenuLayout sideMenuLayout topMenuLayout
    'navigationMode' => 'sideTopMenuLayout',
    //侧边栏
    'sidebar' => [
        //是否收起状态
        'collapsed' => false,
        //显示隐藏
        'visible' => true,
    ],
    //多页标签
    'tabs' => true,
    //登录路由
    'loginRoute' => '/common/login',
    //公用渲染路由前缀
    'commonRoutePrefix' => 'common/',
    //后台渲染路由前缀
    'adminRoutePrefix' => '',
];