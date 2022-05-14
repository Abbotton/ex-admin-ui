<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-02-21
 * Time: 21:12
 */
return [
    'request_interface' => [
        //ExAdmin\ui\contract\LoginInterface
        'login' => '',
        //ExAdmin\ui\contract\SystemAbstract
        'system' => '',
    ],
    'grid' => [
         //ExAdmin\ui\Manager
        'manager' => \ExAdmin\ui\manager\GridManager::class,
    ],
    'form' => [
        //ExAdmin\ui\Manager
        'manager' => \ExAdmin\ui\manager\FormManager::class,
        //ExAdmin\ui\contract\ValidatorAbstract
        'validator' => '',
        //ExAdmin\ui\contract\UploaderAbstract
        'uploader'=>'',
    ],
    //扫描权限目录
    'auth_scan' => [],

    'plugin'=>[
        //插件目录
        'dir'=>dirname(__DIR__,5).DIRECTORY_SEPARATOR.'plugin',
        //插件命名空间
        'namespace'=>'plugin'
    ],
    //语言
    'lang' => [
        // 默认语言
        'default'=>'zh-CN',
        //语言列表
        'list'=>[
            'zh-CN'=>'中文',
            'en'=>'English',
        ]
    ],
    //布局 headerSider顶部侧边  sider侧边
    'layout'=>'headerSider',
    //主题 light 暗黑dark
    'theme' => 'light',
    //主题色
    'theme_color' => '#1890ff',
    //菜单主题 dark light
    'menu_theme' => 'dark',
    //导航模式 sideTopMenuLayout sideMenuLayout topMenuLayout
    'navigationMode' => 'sideTopMenuLayout',
    //header背景色
    'header_background'=>'#121929',
    //侧边栏
    'sidebar' => [
        //选中色
        'sidebar_color'=>'#1890ff',
        //背景色
        'background'=>'#121929',
        //宽度
        'width'=>200,
        //是否收起状态
        'collapsed' => false,
        //显示隐藏
        'visible' => true,
        //菜单并排数量
        'menu_num'=>1
    ],
    //多页标签
    'tabs' => true,
    //登录路由
    'loginRoute' => '/ex-admin/login/index',
    //公用渲染路由前缀
    'commonRoutePrefix' => 'common/',
    //后台渲染路由前缀
    'adminRoutePrefix' => '',
    //主题css
    'theme_css'=>[

        'light'=>file_get_contents(__DIR__.'/../../theme/antd.min.css'),

        'dark'=>file_get_contents(__DIR__.'/../../theme/antd.dark.min.css'),
    ]
];
